import React, { ChangeEvent, TextareaHTMLAttributes } from 'react';

export type TextareaProps = {
    value?: string,
    disabled: boolean,
    onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>




const Textarea = ({value, disabled, className, onChange, ...rest}: TextareaProps) => {
    return(
        <textarea
        value={value}
        disabled={disabled}
        className={`border-t h-4/6 resize-none p-5 outline-none text-black ${disabled ? 'bg-white' : ''} ${className}`}
        {...rest}
        onChange={onChange}
        />
    )
}

export default Textarea

