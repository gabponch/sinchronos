import { Box, Button, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login: React.FC = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      if (user.email === email && user.password === password) {
        setError('');
        console.log('Login successful!');
        navigate("/ponto", { state: { nomeCompleto: user.nomeCompleto } });
      } else {
        setError('E-mail ou senha inválidos.');
      }
    } else {
      setError('Nenhum usuário encontrado.');
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
      <h2>Entrar</h2>

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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
        <p><a href="/recuperar-senha">Esqueci a senha</a></p>
      </div>
      <div>
        <Button variant="contained" type="submit" onClick={() => handleSubmit}>Entrar</Button>
      </div>

      <div className='primeiro-acesso'>
        <p>Primeiro acesso?&nbsp;<a href="" onClick={() => navigate("/cadastro")}>Cadastre-se aqui</a></p>
      </div>

    </Box>


  );
}

export default Login;