import React from 'react';
import Card, { CardVariant } from './components/Card';

const App = () => {
  return (
    <div>
      <Card onClick={(num: number) => console.log('Click', num)} variant={CardVariant.primary} width='200px' height='200px'>
        <button>Кнопка</button>
        <div>Ура!</div>
      </Card>
    </div>
  )
}

export default App;
