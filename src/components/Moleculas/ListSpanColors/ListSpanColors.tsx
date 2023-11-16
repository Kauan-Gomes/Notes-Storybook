import SpanColors from "../../Atoms/SpanColors/SpanColors"
import { Variant } from '../../../getVariantutils';
import { useState } from "react";

const cores: { variant: Variant }[] = [
  { variant: 'sem-cor' },
  { variant: 'azul' },
  { variant: 'vermelho' },
  { variant: 'roxo' },
  { variant: 'verde' },
  { variant: 'amarelo' },
  { variant: 'cinza' }
];



export default function ModalAdd(){
  const [activeVariant, setActiveVariant] = useState('sem-cor');

  const handleButtonClick = (variant: Variant) => {
    setActiveVariant(variant);
  };

  return (
    <>
      <div className="flex gap-5">
        {cores.map((elemento) => (
          <SpanColors
            variant={elemento.variant}
            key={elemento.variant}
            disabled={false}
            onClick={() => handleButtonClick(elemento.variant)}
            isActive={elemento.variant === activeVariant}
          />
        ))}
      </div>
    </>
  );
}