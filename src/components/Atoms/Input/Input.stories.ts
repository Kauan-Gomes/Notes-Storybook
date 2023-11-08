import { Meta, StoryObj } from "@storybook/react"
import Input, { InputProps } from "./Input"

const meta: Meta<InputProps> = {
    title: 'Atomos/Input',
    component: Input,
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
        placeholder: {
            type: "string"
        }
    }
}

export default meta

export const Primary: StoryObj<InputProps> = {
    args: {
        value: "texto para teste",
        placeholder: "escreva aqui"     
    }
}