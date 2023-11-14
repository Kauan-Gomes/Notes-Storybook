import 'tailwindcss/tailwind.css';
import { getVariant, Variant, Disabled } from '../../../getVariantutils';

export type ButtonProps = {
    children: React.ReactNode;
    size?: "pequeno" | "medio" | "grande";
    variant?: Variant,
    disabled: Disabled
} & React.ButtonHTMLAttributes<HTMLButtonElement>;


function getSize(size: ButtonProps['size']) {
    if(size == 'pequeno'){
        return 'text-sm'
    } else if(size == 'medio'){
        return 'text-base'
    }
    else {
        return 'text-xl'
    }
}


const Button = ({ variant = 'sem-cor', size="medio" ,children = 'Botão', className, disabled, ...rest }: ButtonProps) => {
    return (
        <button
            className={`py-2 px-7 rounded-full font-semibold  ${getVariant(variant, disabled)} ${getSize(size)} text-shadow-xl   ${className}  `}
            disabled={disabled}
            {...rest}
        >
            {children}
        </button>)

}


export default Button