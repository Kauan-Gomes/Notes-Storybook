import { InputHTMLAttributes } from "react"


export type InputProps = {
    type?: string;
    value?: string;
    placeholder?: string;
    disabled?: boolean;
}


const Input = ({ type, value, placeholder, disabled }: InputProps) => {
    return (
        <input
            className={`border py-2 px-4 `}
            type={type}
            value={value}
            placeholder={placeholder}
            disabled={disabled}
        />
    )
}

export default Input