import { Meta, StoryObj } from "@storybook/react"

import ModalEdit, {ModalEditProps} from "./ModalEdit"

const meta: Meta<ModalEditProps> = {
    title: "Organisms/ModalEdit",
    component: ModalEdit,
    argTypes: {
        atributes: {
            control: {
                type: 'object'
            }
        }
    },
};

export default meta;

export const SemCor: StoryObj<ModalEditProps> = {
    args: {
        atributes: {
            id: 1,
            title: "Exemplo",
            notes: "Aqui estão algumas notas...",
            variant: "azul",  
        },
    }
}


