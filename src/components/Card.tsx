import React, { FC, ReactNode, useState } from 'react';

export enum CardVariant {
  outLined= 'outlined',
  primary= 'primary'
}

interface CardProps {
  width?: string;
  height?: string;
  variant: CardVariant;
  children?: ReactNode;
  onClick: (num: number) => void;
}

const Card: FC<CardProps> = ({ width, height, variant, onClick, children }) => {
  const [state, setState] = useState(0);
  return (
    <div style={{width, height, 
      border: variant === CardVariant.outLined ? '1px solid gray' : 'none',
      background: variant === CardVariant.primary ? 'gray' : 'none'
    }}
    onClick={() => onClick(state)}
    >
      {children}
    </div>
  )
}

export default Card;
