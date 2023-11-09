import { Meta, StoryObj } from "@storybook/react"
import Nota from "./Nota"
import { NotaProps } from "./Nota"


const colorOptions = {
    black: "#000",
    purple: "#BA55D3",
    red: "#FF6347",
    yellow: "#FFD700",
    green: "#98FB98"
};

const meta: Meta<NotaProps> = {
    title: "Moleculas/Nota",
    component: Nota,
    argTypes: {
        title: {
            type: "string"
        },
        notes: {
            type: "string"
        },
        variant: {
            control: {
                type: "inline-radio",
                options: colorOptions,
            }
        },
        setAtributes: {
            table: { disable: true }
        },
        setToggleClose: {
            table: { disable: true }
        },
    }
};

export default meta;

type Story = StoryObj<NotaProps>;

export const SemCor: Story = {
    args: {
        title: "Projeto",
        notes: "Projeto de um bloco de notas com uma documentação de front-end feita com Storybook",
        variant: 'sem-cor'
    }
};
export const Azul: Story = {
    args: {
        title: "Projeto",
        notes: "Projeto de um bloco de notas com uma documentação de front-end feita com Storybook",
        variant: 'azul'
    }
};
export const Vermelho: Story = {
    args: {
        title: "Projeto",
        notes: "Projeto de um bloco de notas com uma documentação de front-end feita com Storybook",
        variant: 'vermelho'
    }
};
export const Roxo: Story = {
    args: {
        title: "Projeto",
        notes: "Projeto de um bloco de notas com uma documentação de front-end feita com Storybook",
        variant: 'roxo'
    }
};
export const Verde: Story = {
    args: {
        title: "Projeto",
        notes: "Projeto de um bloco de notas com uma documentação de front-end feita com Storybook",
        variant: 'verde'
    }
};
export const Amarelo: Story = {
    args: {
        title: "Projeto",
        notes: "Projeto de um bloco de notas com uma documentação de front-end feita com Storybook",
        variant: 'amarelo'
    }
};
export const Cinza: Story = {
    args: {
        title: "Projeto",
        notes: "Projeto de um bloco de notas com uma documentação de front-end feita com Storybook",
        variant: 'cinza'
    }
};




