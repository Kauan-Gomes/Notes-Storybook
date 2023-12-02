import { Meta, StoryObj } from "@storybook/react"
import ModalAdd, { ModalAddProps } from "./ModalAdd"
import { within, userEvent } from '@storybook/testing-library';


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
            'Professor me da 10',
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
