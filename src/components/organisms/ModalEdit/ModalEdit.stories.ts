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
            titulo: "Exemplo",
            notas: "Aqui estão algumas notas...",
            cor: "azul",  
        },
    }
}


