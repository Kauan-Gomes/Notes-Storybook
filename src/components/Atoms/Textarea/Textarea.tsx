
export type TextareaProps = {
    value: string,
    disabled: boolean,
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>




const Textarea = ({value, disabled, className,  ...rest}: TextareaProps) => {
    return(
        <textarea
        value={value}
        disabled={disabled}
        className={`border-t h-4/6 resize-none p-5 outline-none text-black ${disabled ? 'bg-white' : ''} ${className}`}
        {...rest}
        >
        </textarea>
    )
}

export default Textarea

