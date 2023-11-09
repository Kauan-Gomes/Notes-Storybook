export type InputProps = {
    type?: string;
    value?: string;
    variant?: 'sem-cor' | 'azul' | 'vermelho' | 'roxo' | 'verde' | 'amarelo' | 'cinza'
    placeholder?: string;
    disabled?: boolean;
    className: string,
};


function getVariant(variant: InputProps['variant']) {
    switch (variant) {
        case 'sem-cor':
            return 'bg-white text-black border-2 font-semibold'
        case 'azul':
            return 'bg-blue-300 text-white '
        case 'vermelho':
            return 'bg-red-400 text-white '
        case 'roxo':
            return 'bg-purple-400 text-white '
        case 'verde':
            return 'bg-green-400 text-white '
        case 'amarelo':
            return 'bg-yellow-400 text-white '
        case 'cinza':
        default:
            return 'bg-gray-400 text-white '
    }
}

const Input = ({ type, value, placeholder, disabled, className, variant="sem-cor" }: InputProps) => {
    return (
        <input
            className={`border-none text-lg text-center py-2 px-4 ${getVariant(variant)}  ${className}`}
            type={type}
            value={value == '' ? 'undefined' : value}
            placeholder={placeholder}
            disabled={disabled}
        />
    );
}

export default Input;