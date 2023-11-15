import 'tailwindcss/tailwind.css';

export type Variant = 'sem-cor' | 'azul' | 'vermelho' | 'roxo' | 'verde' | 'amarelo' | 'cinza';
export type Disabled = boolean

export function getVariant(variant: Variant): string {
  switch (variant) {
    case 'sem-cor':
      return 'bg-white text-black border-2 font-semibold hover:bg-gray-500 hover:text-white';
    case 'azul':
      return 'bg-blue-400 text-white hover:bg-blue-900';
    case 'vermelho':
      return 'bg-red-400 text-white hover:bg-red-900';
    case 'roxo':
      return 'bg-purple-400 text-white hover:bg-purple-900';
    case 'verde':
      return 'bg-green-500 text-white hover:bg-green-900';
    case 'amarelo':
      return 'bg-yellow-500 text-white hover:bg-yellow-700';
    case 'cinza':
    default:
      return 'bg-gray-400 text-white hover:bg-gray-900';
  }
}