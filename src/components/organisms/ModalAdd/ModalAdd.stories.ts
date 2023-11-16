import { Meta, StoryObj } from "@storybook/react"

import ModalAdd, {ModalAddProps} from "./ModalAdd"

const meta: Meta<ModalAddProps> = {
    title: "Organisms/ModalAdd",
    component: ModalAdd,
    argTypes: {
        variant: {
            control: "radio",
        },
    },
};

export default meta;


export const SemCor: StoryObj<ModalAddProps> = {
    args: {
    variant: 'sem-cor'
    }
}