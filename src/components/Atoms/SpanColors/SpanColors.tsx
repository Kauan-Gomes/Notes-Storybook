
import { getVariant, Variant } from '../../../getVariantutils';

export type SpanColorProps = {
  variant: Variant
  disabled: boolean
  onClick: () => void; // Adiciona uma propriedade de clique
  isActive: boolean; // Adiciona uma propriedade de ativo
}


export default function SpanColors({
  variant = 'sem-cor',
  disabled = false,
  onClick,
  isActive=true,
}: SpanColorProps) {

  const componentType = 'span'

  return (
    <button
      type='button'
      onClick={onClick}
      disabled={disabled}
      className={` h-5 w-5 rounded-full ${isActive ? 'focus:outline-none focus:ring focus:border-blue-300' : ''} ${getVariant(variant, disabled, componentType)} `}
      >
    </button>
  )
}
