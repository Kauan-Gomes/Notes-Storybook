import { Meta, StoryObj } from "@storybook/react"

import SpanColors from "./SpanColors"
import { SpanColorProps } from "./SpanColors"

const meta: Meta<SpanColorProps> = {
    title: "Atomos/SpanColor",
    component: SpanColors,
    argTypes: {
        variant:{
            control: {
                type: "inline-radio"
            }
        }
    }
};


export default meta;

type Story = StoryObj<SpanColorProps>;

export const SemCor: Story = {
    args: {
        variant: 'sem-cor'
    }
};

export const Verde: Story = {
    args: {
        variant: 'verde'
    }
};

export const vermelho: Story = {
    args: {
        variant: 'vermelho'
    }
};

export const Amarelo: Story = {
    args: {
        variant: 'amarelo'
    }
};

export const Azul: Story = {
    args: {
        variant: 'azul'
    }
};

export const Roxo: Story = {
    args: {
        variant: 'roxo'
    }
};

export const Cinza: Story = {
    args: {
        variant: 'cinza'
    }
};