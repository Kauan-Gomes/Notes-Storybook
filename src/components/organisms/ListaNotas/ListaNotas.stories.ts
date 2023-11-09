import { Meta, StoryObj } from "@storybook/react"
import ListaNotas from "./ListaNotas"
import { ListaNotasProps } from './ListaNotas'

const meta: Meta<ListaNotasProps> = {
    title: "Organisms/ListaNotas",
    component: ListaNotas,
    argTypes: {
        listaNotas: {
            table: {
                type: {
                    summary: "Array",
                    detail: "Detalhes adicionais sobre o array, se necessário",
                },
                defaultValue: [],
            },
        },
    },
};

export default meta;

type Story = StoryObj<ListaNotasProps>;

export const Lista: Story = {
    args: {
        listaNotas: [
          
            {
                id: 2,
                title: "prova",
                notes: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                variant: "azul"
            },
            {
                id: 3,
                title: "trabalho",
                notes: " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when ",
                variant: "vermelho"
            },
            {
                id: 4,
                title: "receita",
                notes: "Peço desculpas pelo mal-entendido. Se você deseja que o texto seja truncado na vertical (em relação à altura da div) e não na horizontal, você pode usar a classe line-clamp-{n} do Tailwind CSS, onde {n} é",
                variant: "roxo"
            },
            {
                id: 5,
                title: "lista de tarefa",
                notes: "ajskjaskjaksjkasjka",
                variant: "verde"
            }
        ]
    }
};