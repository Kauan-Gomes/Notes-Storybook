import { useState } from "react";
import Input from "../../Atoms/Input/Input"
import Textarea from "../../Atoms/Textarea/Textarea";
import { getVariant, Variant, Disabled } from '../../../getVariantutils';

export type NotaProps = {
    title?: string;
    notes?: string;
    variant?: Variant,
    disabled: Disabled
    setAtributes: (atributos: { title: string; notes: string; variant: Variant }) => void;
    setToggleClose: React.Dispatch<React.SetStateAction<boolean>>;
};

const Nota = ({ title='', notes='', variant = 'sem-cor', setAtributes, setToggleClose, disabled }: NotaProps) => {


    const [toggleHover, setToggleHover] = useState(false)
    const componentType = 'nota'

    return (
        <div
            onMouseLeave={() => setToggleHover(false)}
            onMouseEnter={() => setToggleHover(true)}
            className="relative bg-white h-64 w-60 rounded m-5 border-black/20 border-2 shadow-xl cursor-pointer">
            <Input
                type="text"
                value={title}
                placeholder="Escreva um titulo..."
                disabled={false}
                className={`w-full px-2 py-3 text-center font-semibold`}
                variant={variant}
            />
            <Textarea
                className={`w-full line-clamp-6 overflow-hidden `}
                value={notes}
                disabled={true}
            />
            {toggleHover &&
                <div className={`flex justify-center items-center font-semibold absolute ${getVariant(variant, disabled, componentType)} bg-opacity-70  h-64 w-60 top-0 rounded select-none`}>
                    <h2 className="transition duration-300 transform scale-100 hover:scale-140 ">Clique aqui <br /> para ver mais</h2>
                </div>
            }
        </div>
    );
}

export default Nota;