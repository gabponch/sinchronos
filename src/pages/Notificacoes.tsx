import React from 'react';
import ComponenteMenu from '../shared/components/Menu';
import Notificacao from '../shared/components/Notificacao';
import './Notificacoes.css';

const Notificacoes: React.FC = () => {

  const notifications = [
    { titulo: 'Não esqueça de bater o ponto!', texto: 'Hoje, às 08:00!' },
    { titulo: 'Atenção! Você atrasou 10 minutos.', texto: 'Você atrasou 10 minutos para bater o ponto hoje.' },
    { titulo: 'Não esqueça de bater o ponto antes de ir embora!', texto: 'Hoje, às 18:00!' },
  ];

return (
  <div>
    <div className='barra-menu'>
      <h1>Notificações</h1>
      <ComponenteMenu classe='menu' />
    </div>
    <div className='notificacoes'>
      <Notificacao notifications={notifications} />
    </div>
  </div>

);
};

export default Notificacoes;
