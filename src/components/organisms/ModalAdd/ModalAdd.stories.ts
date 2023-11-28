import { Meta, StoryObj } from "@storybook/react"
import ModalAdd, { ModalAddProps } from "./ModalAdd"
import { within, userEvent } from '@storybook/testing-library';

import { expect } from '@storybook/jest';

const meta: Meta<typeof ModalAdd> = {
    title: "Organisms/ModalAdd",
    component: ModalAdd,
};

export default meta;
type Story = StoryObj<typeof ModalAdd>;

export const EmptyForm: Story = {};

export const FilledForm: Story = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        const titleInput = canvas.getByPlaceholderText('Título...');
        const notesTextArea = canvas.getByPlaceholderText('Faça sua anotação...');

        await userEvent.type(titleInput, 'Teste', { delay: 50 });
        await userEvent.type(
            notesTextArea,
            'Peço desculpas pela confusão. Parece que ocorreu um erro de digitação no código. Vamos corrigir isso. Em vez de usar logger.log, você deve usar console.log ou qualquer método de logging que você prefira.',
            { delay: 50 }
        );
        
        

        console.log('Filled the form');

    }

};


// export const SemCor: StoryObj<ModalAddProps> = {
//     args: {
//         variant: 'sem-cor'
//     }
// }

// export const Azul: StoryObj<ModalAddProps> = {
//     args: {
//         variant: 'azul'
//     }
// }
