import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import './MapTime.css'
import { useNavigate } from 'react-router-dom';

const CurrentDate: React.FC = () => {

  const navigate = useNavigate();

  const handleReturn = () => {
    navigate('/ponto');
  };
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setCurrentDateTime(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return date.toLocaleDateString(undefined, options);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString();
  };

  return (
    <div className='content'>
      <div className='date'>{formatDate(currentDateTime)}</div>
      <div className='address'>Av. República do Líbano, 251 Riomar Trade Center Torre 2, 29º andar - Pina, Recife - PE</div>
      <div className='time'>{formatTime(currentDateTime)}</div>
      <Button variant="contained" type="submit" onClick={handleReturn} >Confirmar Ponto</Button>
    </div>
  );
};

export default CurrentDate;
