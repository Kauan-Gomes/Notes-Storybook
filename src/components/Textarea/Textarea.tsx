
export type TextareaProps = {
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>




const Textarea = ({children, disabled, className,  ...rest}: TextareaProps) => {
    return(
        <textarea
        className={`border resize-none p-5 outline-none text-black ${className}`}
        disabled={disabled}
        {...rest}
        >
        </textarea>
    )
}

export default Textarea