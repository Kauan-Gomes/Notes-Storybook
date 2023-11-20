import React from 'react'
import Button from '../../Atoms/Button/Button';
import Input from '../../Atoms/Input/Input'
import ListSpanColors from '../../Moleculas/ListSpanColors/ListSpanColors';
import Textarea from '../../Atoms/Textarea/Textarea'
import { Variant } from '@/getVariantutils';
import Atributes from '@/interfaceAtributes';


export type ModalEditProps = {
    atributes: Atributes
    setAtributes: (atributes: Atributes) => void;
    toggleClose: boolean;
    setToggleClose: React.Dispatch<React.SetStateAction<boolean>>;
}


export default function ModalEdit({ atributes, setAtributes, toggleClose, setToggleClose }: ModalEditProps) {

    const handleModalClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (e.target === e.currentTarget) {
            setToggleClose(true)
        }
    };

    return (
        <div
            onClick={(e) => handleModalClick(e)}
            className={`fixed rounded top-0 left-0 bg-black/40 w-full h-full flex justify-center items-center ${toggleClose ? "hidden" : ""}`}>
            <div
                className='bg-white flex flex-col items-center w-auto rounded-xl relative '>
                <button
                    onClick={() => setToggleClose(!toggleClose)}
                    className='absolute right-6 top-4 font-bold text-xl'
                >X</button>
                <Input
                    value={atributes.title}
                    onChange={(e) =>
                        setAtributes({
                            ...atributes,
                            title: e.target.value,
                        })
                    }
                    className={`h-16 w-full rounded-t-lg`}
                    variant={atributes.variant}
                />
                <Textarea
                    onChange={(e) =>
                        setAtributes({
                            ...atributes,
                            notes: e.target.value,
                        })
                    }
                    value={atributes.notes}
                    className='mx-auto my-10 text-2xl resize-none w-5/6 border h-4/6 outline-none p-4'
                    disabled={false}
                />
                <ListSpanColors setAtributes={setAtributes} />
                <div className='mx-5 my-6 flex gap-5'>
                    <Button
                        variant={atributes.variant}
                    >Remover</Button>
                    <Button
                        variant={atributes.variant}
                    >Cancelar</Button>
                    <Button
                        variant={atributes.variant}
                    >Salvar
                    </Button>
                </div>
            </div>
        </div>
    )
}
