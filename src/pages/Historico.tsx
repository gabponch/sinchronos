import React from 'react';
import './Historico.css';
import ComponenteMenu from '../shared/components/Menu';

const Historico: React.FC = () => {
  const dados = Array.from({ length: 7 }, (_, i) => ({
    data: `2024-06-${String(i + 2).padStart(2, '0')}`,
    ponto: Math.random() > 0.2,
  }));

  return (
    <div>
      <div className='barra-menu'>
        <h1>Histórico</h1>
        <ComponenteMenu nome="menu" classe='menu' />
      </div>
      <div className='historico'>
        <div className='historico-lista'>
          {dados.map((item, index) => (
            <div key={index} className='historico-dados'>
              Data: {item.data}, Ponto: {item.ponto ? 'Batido' : 'Não batido'}
            </div>
          ))}
        </div>
      </div>
    </div>

  );
};

export default Historico;
