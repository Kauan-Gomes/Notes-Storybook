import SpanColors from "../../Atoms/SpanColors/SpanColors"
import { Variant } from '../../../getVariantutils';

const cores: { variant: Variant }[] = [
  { variant: 'sem-cor' },
  { variant: 'azul' },
  { variant: 'vermelho' },
  { variant: 'roxo' },
  { variant: 'verde' },
  { variant: 'amarelo' },
  { variant: 'cinza' }
];


const listSpanColors = () => {
    return (
      <div className="flex gap-5">
        {cores.map((elemento) => (
          <SpanColors variant={elemento.variant} key={elemento.variant} disabled={false} />
        ))}
      </div>
    );
  };
  
  export default listSpanColors;