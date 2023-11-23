import React, { FormEvent, useState } from 'react'
import Button from '../../Atoms/Button/Button';
import Input from '../../Atoms/Input/Input'
import ListSpanColors from '../../Moleculas/ListSpanColors/ListSpanColors';
import Textarea from '../../Atoms/Textarea/Textarea'
import Atributes from '@/interfaceAtributes';
import { Variant } from '@/getVariantutils';


export type ModalEditProps = {
    editAtributesNotes: (id: number, newValues: Partial<Omit<Atributes, 'id'>>) => void;
    atributes: Atributes
    setAtributes: (atributes: Atributes) => void;
    toggleClose: boolean;
    setToggleClose: React.Dispatch<React.SetStateAction<boolean>>;
}


export default function ModalEdit({ atributes, setAtributes, toggleClose, setToggleClose, editAtributesNotes }: ModalEditProps) {

    const [button, setButton] = useState<string>()

    const handleModalClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (e.target === e.currentTarget) {
            setToggleClose(true)
        }
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        
        //console.log(button)

        if (button === 'save') {
            // Chame a função editAtributesNotes com as propriedades específicas
            editAtributesNotes(atributes.id, {
                title: atributes.title,
                notes: atributes.notes,
                variant: atributes.variant,
            });
            setToggleClose(true)
        }

    }


    return (
        <div
            onClick={(e) => handleModalClick(e)}
            className={`fixed rounded top-0 left-0 bg-black/40 w-full h-full flex justify-center items-center ${toggleClose ? "hidden" : ""}`}>
            <form
            onSubmit={handleSubmit}
                className='bg-white flex flex-col items-center gap-5 w-6/12 h-auto rounded-xl relative '>
                <button
                    type='button'
                    onClick={() => setToggleClose(!toggleClose)}
                    className='absolute -right-3 -top-4 bg-black/80 rounded-full px-3 py-2 text-white font-semibold text-sm'
                >X
                </button>
                <Input
                    value={atributes.title}
                    onChange={(e) =>
                        setAtributes({
                            ...atributes,
                            title: e.target.value,
                        })
                    }
                    className={`h-16 w-full text-3xl rounded-t-lg`}
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
                    className='mx-auto  text-2xl resize-none w-5/6 h-72 text-center outline-none p-4 rolagem border-none bg-black/10 rounded'
                    disabled={false}
                />
                <ListSpanColors onClick={(variant) => setAtributes({ ...atributes, variant })} />
                <div className='mx-5 mb-5 flex gap-5'>
                    <Button
                    variant={atributes.variant}
                    type="submit"
                    onClick={() => setButton('remove')}
                    >
                        Remover
                    </Button>
                    <Button
                    variant={atributes.variant}
                    type="submit"
                    onClick={() => setButton('save')}
                    >
                        Salvar
                    </Button>
                </div>
            </form>
        </div>
    )
}
