
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

    const editAtributesNotes = (id: number, newValues: Partial<Omit<Atributes, 'id'>>) => {
        const updatedListaNotas = (filteredNotes || []).map((elemento) => {
            if (elemento.id === id) {
                return {
                    ...elemento,
                    ...newValues,
                };
            }
            return elemento;
        });
        console.log(filteredNotes)
        setFilteredNotes(updatedListaNotas);
        setListaNotas(updatedListaNotas)
        
    };

    const removeNotes = (id: number) => {
        const updatedListaNotas = [...(filteredNotes || [])]; 
        const index = updatedListaNotas.findIndex((notes) => notes.id === id);

        if (index !== -1) {
            updatedListaNotas.splice(index, 1);
        }

        console.log(updatedListaNotas);
        setFilteredNotes(updatedListaNotas);
        setListaNotas(updatedListaNotas)
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
