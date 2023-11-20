import { Variant } from "@/getVariantutils";
import Input from "../../Atoms/Input/Input";
import Textarea from "../../Atoms/Textarea/Textarea";
import ListSpanColors from "../../Moleculas/ListSpanColors/ListSpanColors";
import Button from "../../Atoms/Button/Button";
import { FormEvent } from "react";

export type ModalAddProps = {
  variant: Variant,
  functionAddnotes: (event: FormEvent<HTMLFormElement>, variant: Variant) => void;
  setVariant: (variant: Variant) => void;
}

export default function ModalAdd({ variant = "sem-cor", functionAddnotes, setVariant }: ModalAddProps) {

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const titleInput = event.currentTarget.elements[0] as HTMLInputElement;
    const notesTextArea = event.currentTarget.elements[1] as HTMLTextAreaElement;

    functionAddnotes(event, variant)

    setVariant('sem-cor');
    
    titleInput.value = "";
    notesTextArea.value = "";

  }


  return (
    <form
      onSubmit={handleSubmit}
      className="border w-2/6 mx-5 flex flex-col gap-5 rounded-md items-center ">
      <Input
        type='text'
        placeholder='Título...'
        disabled={false}
        className='w-full h-16  rounded-t-md '
        variant={variant}

      />
      <Textarea
        placeholder="Faça sua anotação..."
        disabled={false}
        className='h-72 w-72'
      />
      <ListSpanColors setVariant={setVariant} />
      <Button
        variant={variant}
        size='medio'
        children='Criar nota'
        className='mt-5'
        disabled={false}
        type="submit"
      />
    </form>
  )
}
