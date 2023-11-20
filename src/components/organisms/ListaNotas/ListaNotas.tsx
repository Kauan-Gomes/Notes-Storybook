
import { useState } from "react"
import './style.css'
import Nota from "../../Moleculas/Nota/Nota"
import ModalEdit from "../ModalEdit/ModalEdit";
import ListaNotas from "@/InterfaceListaNotas";
import Atributes from "@/interfaceAtributes";

export type ListaNotasProps = {
    listaNotas?: ListaNotas[]
    atributes?: Atributes
}



export default function ListaDeNotas({ listaNotas }: ListaNotasProps) {

    const [atributes, setAtributes] = useState<Atributes>({
        title: "",
        notes: "",
        variant: "sem-cor",
    })
    const [toggleClose, setToggleClose] = useState(true)


    return (
        <div className={`border mx-5 w-8/12  right-5 overflow-auto h-[500px] rounded-xl  2xl:h-[700px] flex flex-wrap text-center rolagem`}>
            {listaNotas && listaNotas.map((props) =>
                <Nota
                    setAtributes={setAtributes}
                    setToggleClose={setToggleClose}
                    key={props.id}
                    title={props.title}  
                    notes={props.notes}    
                    variant={props.variant}
                    disabled={false}
                />
            )}
            <ModalEdit
                atributes={atributes}
                setAtributes={setAtributes}
                toggleClose={toggleClose}
                setToggleClose={setToggleClose}
            />
        </div>
    )
}
