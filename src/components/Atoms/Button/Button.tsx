import 'tailwindcss/tailwind.css';
import { getVariant, Variant, ComponentType } from '../../../getVariantutils';

export type ButtonProps = {
    children: React.ReactNode;
    size?: "pequeno" | "medio" | "grande";
    variant?: Variant,
    componentType?: ComponentType
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

// export function getVariant(variant: ButtonProps['variant']): string {
//     switch (variant) {
//       case 'sem-cor':
//         return 'bg-white text-black border-2 font-semibold hover:bg-gray-500 hover:text-white';
//       case 'azul':
//         return 'bg-blue-400 text-white hover:bg-blue-900';
//       case 'vermelho':
//         return 'bg-red-400 text-white hover:bg-red-900';
//       case 'roxo':
//         return 'bg-purple-400 text-white hover:bg-purple-900';
//       case 'verde':
//         return 'bg-green-500 text-white hover:bg-green-900';
//       case 'amarelo':
//         return 'bg-yellow-500 text-white hover:bg-yellow-700';
//       case 'cinza':
//       default:
//         return 'bg-gray-400 text-white hover:bg-gray-900';
//     }
//   }


const Button = ({ variant = 'sem-cor', size="medio" ,children = 'Botão', className, componentType='button',  disabled= false, ...rest }: ButtonProps) => {
    return (
        <button
            className={`py-2 px-7 rounded-full font-semibold  ${getVariant(variant, disabled, componentType)} ${getSize(size)} ${className}  `}
            disabled={disabled}
            {...rest}
        >
            {children}
        </button>)

}


export default Button