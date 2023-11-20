import SpanColors from "../../Atoms/SpanColors/SpanColors"
import { Variant } from '../../../getVariantutils';
import { useState } from "react";

export type ListSpanColorsProps = {
  setVariant: (variant:Variant) => void;
}

const cores: Variant[] = [
  'sem-cor',
  'azul',
  'vermelho',
  'roxo',
  'amarelo',
  'cinza',
  'verde'
]

export default function ListSpanColors({setVariant}: ListSpanColorsProps){
  const [activeVariant, setActiveVariant] = useState<Variant>('sem-cor');

  const handleButtonClick = (variant: Variant) => {
    setActiveVariant(variant);
    setVariant(variant)

    
  };

  return (
    <>
      <div className="flex gap-5">
        {cores.map((elemento) => (
          <SpanColors
            variant={elemento}
            key={elemento}
            disabled={false}
            onClick={() => handleButtonClick(elemento)}
            isActive={elemento === activeVariant}
          />
        ))}
      </div>
    </>
  );
}