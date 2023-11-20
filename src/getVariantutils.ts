
export type Variant = 'sem-cor' | 'azul' | 'vermelho' | 'roxo' | 'verde' | 'amarelo' | 'cinza' | 'disabled';
export type Disabled = boolean
export type ComponentType = 'input' | 'button' | 'span' | 'nota' ;


const optionsVariants = {
  input: {
    'sem-cor': ' border-black text-black font-semibold placeholder:text-black',
    azul: 'bg-blue-400 text-white',
    vermelho: 'bg-red-400 text-white',
    roxo: 'bg-purple-400 text-white',
    verde: 'bg-green-500 text-white',
    amarelo: 'bg-yellow-500 text-white',
    cinza: 'bg-gray-400 text-white',
    disabled: ''
  },
  button: {
    'sem-cor': 'bg-white text-black border-2 font-semibold hover:bg-gray-500 hover:text-white',
    azul: 'bg-blue-400 text-white hover:bg-blue-900',
    vermelho: 'bg-red-400 text-white hover:bg-red-900',
    roxo: 'bg-purple-400 text-white hover:bg-purple-900',
    verde: 'bg-green-500 text-white hover:bg-green-900',
    amarelo: 'bg-yellow-500 text-white hover:bg-yellow-700',
    cinza: 'bg-gray-400 text-white hover:bg-gray-900',
    disabled: 'border bg-black'
  },
  span: {
    'sem-cor': 'bg-white text-black border-2 hover:bg-gray-500 ',
    azul: 'bg-blue-400  hover:bg-blue-900',
    vermelho: 'bg-red-400 hover:bg-red-900',
    roxo: 'bg-purple-400 hover:bg-purple-900',
    verde: 'bg-green-500 hover:bg-green-900',
    amarelo: 'bg-yellow-500 hover:bg-yellow-700',
    cinza: 'bg-gray-400 hover:bg-gray-900',
    disabled: 'border'
  },
  nota: {
    'sem-cor': 'bg-black text-white border-2  ',
    azul: 'bg-blue-400 ',
    vermelho: 'bg-red-400',
    roxo: 'bg-purple-400',
    verde: 'bg-green-500',
    amarelo: 'bg-yellow-500',
    cinza: 'bg-gray-400',
    disabled: ''
  }

}

export function getVariant(variant: Variant, disabled: Disabled, componentType: ComponentType): string {
  return disabled ? optionsVariants[componentType]['disabled'] : optionsVariants[componentType][variant] || '';

}

