import { getVariant, Variant } from '../../../getVariantutils';

export type InputProps = {
    type?: string;
    value?: string;
    variant?: Variant
    placeholder?: string;
    disabled?: boolean;
    className: string,
};


const Input = ({ type, value, placeholder, disabled, className, variant = "sem-cor" }: InputProps) => {
    return (
        <input
            className={`border-none text-lg text-center py-2 px-4 ${getVariant(variant)} ${className}`}
            type={type}
            value={value == '' ? 'undefined' : value}
            placeholder={placeholder}
            disabled={disabled}
        />
    );
}

export default Input;