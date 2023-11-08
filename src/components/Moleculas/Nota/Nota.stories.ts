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
        color: {
            control: {
                type: "select",
                options: colorOptions,
            }
        },
        setAtributes: {
            control: { disable: true }
        },
        setToggleClose: {
            control: { disable: true }
        },
    }
};

export default meta;

type Story = StoryObj<NotaProps>;

export const Primary: Story = {
    args: {
        title: "Projeto",
        notes: "Projeto de um bloco de notas com uma documentação de front-end feita com Storybook",
        color: "#fff000",
    }

};
export const Secondary: Story = {
    args: {
        title: "Projeto",
        notes: "Projeto de um bloco de notas com uma documentação de front-end feita com Storybook",
        color: "#fff",
    }

};



