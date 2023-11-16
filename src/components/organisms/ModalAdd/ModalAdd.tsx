import { Variant } from "@/getVariantutils";
import Input from "../../Atoms/Input/Input";
import Textarea from "../../Atoms/Textarea/Textarea";
import ListSpanColors from "../../Moleculas/ListSpanColors/ListSpanColors";
import Button from "../../Atoms/Button/Button";

export type ModalAddProps = {
  variant: Variant,
  functionAddnotes: () => void
}


export default function ModalAdd({ variant = 'sem-cor', functionAddnotes }: ModalAddProps) {
  return (
    <form className="border w-2/6 h-auto flex flex-col justify-center items-center ">
      <Input
        type='text'
        value=''
        placeholder='Título...'
        disabled={false}
        className='w-full'
        variant={variant}
      />
      <Textarea
        value=''
        disabled={false}
        className='h-60'
      />
      <ListSpanColors />
      <Button
        variant='sem-cor'
        size='medio'
        children='Criar nota'
        className='m-5'
        disabled={false}
      />
    </form>
  )
}
