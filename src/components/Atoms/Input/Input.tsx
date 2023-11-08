export type InputProps = {
    type?: string;
    value?: string;
    placeholder?: string;
    disabled?: boolean;
    className: string,
    style: any
};

const Input = ({ type, value, placeholder, disabled, className, style }: InputProps) => {
    return (
        <input
            className={`border py-2 px-4 ${className}`}
            type={type}
            value={value}
            placeholder={placeholder}
            disabled={disabled}
            style={style}
        />
    );
}

export default Input;