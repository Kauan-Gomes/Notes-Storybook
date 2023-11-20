import { getVariant, Variant } from '../../../getVariantutils';

export type InputProps = {
    type?: string;
    value?: string;
    variant?: Variant
    placeholder?: string;
    disabled?: boolean;
    className: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};


const Input = ({ type, value, placeholder, disabled = false, className, variant = "sem-cor", onChange }: InputProps) => {
    
    const componentType = 'input'

    return (
        <input
            className={` text-xl text-center py-2 px-4 outline-none placeholder:text-black/40 placeholder:text-xl ${getVariant(variant, disabled, componentType)} text-black ${className}`}
            type={type}
            value={value == '' ? '' : value}
            placeholder={placeholder}
            disabled={disabled}
            onChange={onChange}
        />
    );
}

export default Input;