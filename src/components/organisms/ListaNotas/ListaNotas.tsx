

import { useState } from "react"
import './style.css'
import Nota from "../../Moleculas/Nota/Nota"

export type ListaNotasProps = {
    listaNotas?: [{
        id: number,
        title: string,
        notes: string,
        variant: 'sem-cor' | 'azul' | 'vermelho' | 'roxo' | 'verde' | 'amarelo' | 'cinza'
    }]
}



export default function ListaNotas({ listaNotas }: ListaNotasProps) {

    const [tituloModal, setTituloModal] = useState('')
    const [notasModal, setNotasModal] = useState()
    const [corModal, setCorModal] = useState('bg-violet-200')

    // Usar um estado só para manipular tudo, usando um objeto para isso, não precisando dos outros
    const [atributes, setAtributes] = useState({
        title: "",
        notes: "",
        variant: "",
    })
    const [toggleClose, setToggleClose] = useState(true)


    return (
        <div className={`absolute border-none w-8/12 right-5 overflow-auto h-[500px] rounded-xl  2xl:h-[700px] flex flex-wrap text-center border-2 rolagem`}>
            {listaNotas && listaNotas.map((props) =>
                <Nota
                    setAtributes={setAtributes}
                    setToggleClose={setToggleClose}
                    key={props.id}
                    title={props.title}  
                    notes={props.notes}    
                    variant={props.variant}
                />
            )}

            {/* <ModalEdit
            //mudar as props, ao inves de passar essas separadas, passar uma que contenha todas as informações
                atributes={atributes}
                setAtributes={setAtributes}
                toggleClose={toggleClose}
                setToggleClose={setToggleClose}
            /> */}
        </div>
    )
}
