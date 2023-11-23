
import { useState } from "react"
import './style.css'
import Nota from "../../Moleculas/Nota/Nota"
import ModalEdit from "../ModalEdit/ModalEdit";
import ListaNotas from "@/InterfaceListaNotas";
import Atributes from "@/interfaceAtributes";

export type ListaNotasProps = {
    listaNotas?: ListaNotas[]
    atributes?: Atributes
    setFilteredNotes: (updatedListaNotas: ListaNotas[]) => void;
}


export default function ListaDeNotas({ listaNotas, setFilteredNotes }: ListaNotasProps) {

    const [atributes, setAtributes] = useState<Atributes>({
        id: 0,
        title: "",
        notes: "",
        variant: "sem-cor",
    })
    const [toggleClose, setToggleClose] = useState(true)

    const editAtributesNotes = (id: number, newValues: Partial<Omit<Atributes, 'id'>>) => {
        const updatedListaNotas = (listaNotas || []).map((elemento) => {
            if (elemento.id === id) {
                return {
                    ...elemento,
                    ...newValues,
                };
            }
            return elemento;
        });
            setFilteredNotes(updatedListaNotas);
       
    };


    return (
        <div className={`border mx-5 w-8/12  right-5 overflow-auto h-[500px] rounded-xl  2xl:h-[700px] flex flex-wrap text-center rolagem`}>
            {listaNotas && listaNotas.map((props) =>
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
                editAtributesNotes={editAtributesNotes}
                atributes={atributes}
                setAtributes={setAtributes}
                toggleClose={toggleClose}
                setToggleClose={setToggleClose}
            />
        </div>
    )
}
