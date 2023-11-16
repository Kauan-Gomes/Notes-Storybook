import { getVariant, Variant } from '../../../getVariantutils';

export type SpanColorProps = {
  variant:  Variant
  disabled: boolean
}


export default function SpanColors({variant='sem-cor', disabled = false}: SpanColorProps) {
  return (
    <button 
    disabled={disabled}
    className={` h-5 w-5 rounded-full ${getVariant(variant, disabled )}`}></button>
  )
}
