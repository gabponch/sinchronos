
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Recuperar.css';
import { Box, Button, TextField, Typography } from '@mui/material';

const Recuperar: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setError('As senhas não podem ser diferentes.');
      return;
    }

    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      if (user && user.email === email) {
        user.password = newPassword;
        localStorage.setItem('user', JSON.stringify(user));
        alert('Senha alterada com sucesso!');
        navigate('/login');
      } else {
        setError('Usuário não encontrado.');
      }
    }
  };

  return (
    <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '35ch' },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'transparent',
        },
        '&:hover fieldset': {
          borderColor: 'transparent',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'transparent',
        },
      },
    }}
      noValidate
      autoComplete="off"
      className="form-container"
      onSubmit={handleSubmit}
    >
      <h2>Esqueci a senha</h2>

      <div>
        <TextField
          required
          placeholder="E-mail"
          className='input login'
          value={email}
          onChange={(e) => setEmail(e.target.value)}

        />
      </div>
      <div>
        <TextField
          required
          id="password-input password"
          type="password"
          placeholder="Senha"
          className='input login'
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </div>
      <div>
        <TextField
          required
          id="password-input password"
          type="password"
          placeholder="Confirmar senha"
          className='input login'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <div>
        {error && (
          <Typography color="error" variant="body2" className='mensagem-erro'>
            {error}
          </Typography>
        )}
      </div>
      <div>
        <Button variant="contained" type="submit" >Alterar</Button>
      </div>
    </Box>
  );
};

export default Recuperar;
