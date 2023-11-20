import ListaNotas from '@/InterfaceListaNotas'
import React from 'react'

export type HeaderProps = {
    listaNotas?: ListaNotas[]
    handleOptionChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    selectedOption: string;
}

export default function ({ listaNotas, handleOptionChange, selectedOption }: HeaderProps) {
    return (
        <header className='flex w-full h-20 bg-[#ffd569] mx-auto justify-around items-center border-b-2 shadow-lg border-black/20'>
            <h1 className='font-semibold text-4xl '>Betagera Notes</h1>
            <div className='flex gap-2'>
                <label className='font-semibold p-1'>Pesquisa: </label>
                <input className='rounded-full shadow-lg p-1 pl-3' list="notes" name="note" id="note" value={selectedOption} onChange={handleOptionChange} />
                {listaNotas && (
                    <datalist id="notes">
                        {listaNotas.map((notas) => (
                            <option key={notas.id} value={notas.title} />
                        ))}
                    </datalist>
                )}
            </div>
        </header>
    )
}
