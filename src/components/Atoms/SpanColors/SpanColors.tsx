import { getVariant, Variant } from '../../../getVariantutils';

export type SpanColorProps = {
  variant:  Variant
}


export default function SpanColors({variant='sem-cor'}: SpanColorProps) {
  return (
    <button className={` cursor-pointer h-5 w-5 rounded-full ${getVariant(variant)}`}></button>
  )
}
