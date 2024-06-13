import React, { useEffect } from 'react';
import { useStopwatch } from 'react-timer-hook';
import { useNavigate, useLocation } from 'react-router-dom';
import './Ponto.css';
import ComponenteMenu from '../shared/components/Menu';

const Ponto: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  const {
    seconds,
    minutes,
    hours,
    isRunning,
    start,
    pause,
    reset
  } = useStopwatch({ autoStart: false });

  const registrarPonto = () => {
    if (!isRunning) {
      start();
    } else {
      pause();
    }
  };

  const handleNavigate = () => {
    const currentState = {
      isRunning,
      seconds,
      minutes,
      hours,
    };
    pause();
    navigate('/confirmacao', { state: currentState });
  };

  useEffect(() => {
    if (state) {
      const { isRunning, seconds, minutes, hours } = state;
      reset(new Date(Date.now() - ((hours * 3600 + minutes * 60 + seconds) * 1000)), false);
      if (isRunning) {
        start();
      }
    }
  }, [state, reset, start]);

  const corrigirPonto = () => {
    navigate('/corrigir');
  };

  return (
    <div className='ponto-container'>
      <div className='ponto-header'>
        <h1 className='ponto-title'>Bom dia, {location.state?.nomeCompleto || 'Colaborador'}! ☺</h1>

        <div className='data-menu'>
          <h4 className='ponto-date'>Sexta-feira,</h4>
          <h4 className='ponto-date'>07 Junho 2024</h4>

          <ComponenteMenu classe='menu' />
        </div>
      </div>
      <div className='ponto-progress-container'>
        <div className='ponto-progress-bar' style={{ width: `${(hours / 8) * 100}%` }}></div>
        <h2 className='ponto-progress-text'>Trabalhando {hours}h {minutes}m {seconds}s</h2>
      </div>
      <h2 className='ponto-worked-hours'>Horas trabalhadas: <span>{hours}h</span></h2>
      <div className='ponto-buttons'>
        <button onClick={handleNavigate} className='ponto-button'>
          {isRunning ? 'Pausar' : 'Iniciar'}
        </button>
        <button onClick={corrigirPonto} className='ponto-button'>
          Corrigir
        </button>
      </div>
    </div>
  );
};

export default Ponto;
