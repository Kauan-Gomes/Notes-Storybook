
import { useState } from "react"
import './style.css'
import Nota from "../../Moleculas/Nota/Nota"
import ModalEdit from "../ModalEdit/ModalEdit";
import ListaNotas from "@/InterfaceListaNotas";
import Atributes from "@/interfaceAtributes";

export type ListaNotasProps = {
    filteredNotes?: ListaNotas[]
    atributes?: Atributes
    setFilteredNotes: (updatedListaNotas: ListaNotas[]) => void;
    setListaNotas: (updatedListaNotas: ListaNotas[]) => void;
}


export default function ListaDeNotas({ filteredNotes, setFilteredNotes, setListaNotas }: ListaNotasProps) {

    const [atributes, setAtributes] = useState<Atributes>({
        id: 0,
        title: "",
        notes: "",
        variant: "sem-cor",
    })
    const [toggleClose, setToggleClose] = useState(true)

    const editAtributesNotes = async (id: number, newValues: Partial<Omit<Atributes, 'id'>>) => {
        try {
            const response = await fetch(`http://localhost:3300/note/`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: id,
                    ...newValues,
                }),
            });

            if (!response.ok) {
                throw new Error('Erro ao editar nota na API');
            }

            const updatedListaNotas = (filteredNotes || []).map((elemento) => {
                if (elemento.id === id) {
                    return {
                        ...elemento,
                        ...newValues,
                    };
                }
                return elemento;
            });

            setFilteredNotes(updatedListaNotas);
            setListaNotas(updatedListaNotas);
        } catch (error) {
            console.error(error);
        }
    };

    const removeNotes = async (id: number) => {
        try {
            const response = await fetch(`http://localhost:3300/note/`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: id }),
            });

            if (!response.ok) {
                throw new Error('Erro ao excluir nota na API');
            }

            const updatedListaNotas = (filteredNotes || []).filter((note) => note.id !== id);

            setFilteredNotes(updatedListaNotas);
            setListaNotas(updatedListaNotas);
        } catch (error) {
            console.error(error);
        }

        // const updatedListaNotas = [...(filteredNotes || [])]; 
        // const index = updatedListaNotas.findIndex((notes) => notes.id === id);

        // if (index !== -1) {
        //     updatedListaNotas.splice(index, 1);
        // }

        // console.log(updatedListaNotas);
        // setFilteredNotes(updatedListaNotas);
        // setListaNotas(updatedListaNotas)
    }


    return (
        <div className={`border mx-5 w-8/12  right-5 overflow-auto h-[500px] rounded-xl  2xl:h-[700px] flex flex-wrap text-center rolagem`}>
            {filteredNotes && filteredNotes.map((props) =>
                <Nota
                    setAtributes={setAtributes}
                    setToggleClose={setToggleClose}
                    key={props.id}
                    id={props.id}
                    title={props.title}
                    notes={props.notes}
                    variant={props.variant}
                    disabled={false}
                />
            )}
            <ModalEdit
                removeNotes={removeNotes}
                editAtributesNotes={editAtributesNotes}
                atributes={atributes}
                setAtributes={setAtributes}
                toggleClose={toggleClose}
                setToggleClose={setToggleClose}
            />
        </div>
    )
}
