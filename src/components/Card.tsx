import React, { FC, ReactNode } from 'react';

export enum CardVariant {
  outLined= 'outlined',
  primary= 'primary'
}

interface CardProps {
  width?: string;
  height?: string;
  variant: CardVariant;
  children?: ReactNode;
  onClick: () => void;
}

const Card: FC<CardProps> = ({ width, height, variant, onClick, children }) => {
  return (
    <div style={{width, height, 
      border: variant === CardVariant.outLined ? '1px solid gray' : 'none',
      background: variant === CardVariant.primary ? 'gray' : 'none'
    }}
    onClick={onClick}
    >
      {children}
    </div>
  )
}

export default Card;
