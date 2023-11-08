import { Meta, StoryObj } from "@storybook/react"
import Textarea, { TextareaProps } from "./Textarea"

const meta: Meta<TextareaProps> = {
    title: 'Atomos/Textarea',
    component: Textarea,
    argTypes: {
        value:{
            type: "string"
        },
        disabled: {
            type: "boolean",
        },
        className: {
            type: "string"
        },
    }
}

export default meta

export const Primary: StoryObj<TextareaProps> = {
    args: {
        value: "titulo teste"
    }
}