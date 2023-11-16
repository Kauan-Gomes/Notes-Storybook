import { Meta, StoryObj } from "@storybook/react"
import Button, { ButtonProps } from "./Button"

const meta: Meta<ButtonProps> = {
    title: 'Atomos/Button',
    component: Button,
    argTypes: {
        children:{
            type: "string"
        },
        disabled: {
            type: "boolean",
        },
        variant: {
            control: {
                type: "select"
            }
        },
        size: {
            description: 'opções de tamanho',
            control: {
                type: "radio"
            }
        },
        componentType: {
            table: { disable: true }
        },
    }
}

export default meta

export const SemCor: StoryObj<ButtonProps> = {
    args: {
    children: 'Botão'
    }
}
export const Azul: StoryObj<ButtonProps> = {
    args: {
    children: 'Botão', 
    variant: 'azul'
    }
}
export const Vermelho: StoryObj<ButtonProps> = {
    args: {
    children: 'Botão',
    variant: "vermelho",
    }
}
export const Roxo: StoryObj<ButtonProps> = {
    args: {
    children: 'Botão',
    variant: "roxo",
    }
}

export const Verde: StoryObj<ButtonProps> = {
    args: {
    children: 'Botão',
    variant: "verde",
    }
}

export const Amarelo: StoryObj<ButtonProps> = {
    args: {
    children: 'Botão',
    variant: "amarelo",
    }
}
export const Cinza: StoryObj<ButtonProps> = {
    args: {
    children: 'Botão',
    variant: "cinza",
    }
}



