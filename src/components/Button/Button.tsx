import 'tailwindcss/tailwind.css';

export type ButtonProps = {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'tertiary';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;




function getVariant(variant: ButtonProps['variant'], disabled: ButtonProps['disabled']) {
    switch (variant) {
        case 'primary':
            return disabled ? 'bg-disabled text-disabled border' : 'bg-primary text-primary'
        case 'secondary':
            return disabled ? 'bg-disabled text-disabled border' : 'bg-secondary text-white'
        case 'tertiary':
        default:
            return disabled ? 'bg-disabled text-disabled border' : 'bg-tertiary text-white'
    }
    
}


const Button = ({ variant = 'primary', children = 'Botão', className, disabled, ...rest }: ButtonProps) => {
    return (
        <button
            className={`py-2 px-7 rounded-full  ${getVariant(variant, disabled)} ${className}  `}
            disabled={disabled}
            {...rest}
        >
            {children}
        </button>)

}


export default Button