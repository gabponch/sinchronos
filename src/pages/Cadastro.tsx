import { Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cadastro.css';

const Cadastro: React.FC = () => {

    const navigate = useNavigate();
    const [nomeCompleto, setNomeCompleto] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [error, setError] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (nomeCompleto && email && password) {
            if (password !== confirmPassword) {
                setError('As senhas não podem ser diferentes.');
                return;
            }
            const userData = { nomeCompleto, email, password };
            localStorage.setItem('user', JSON.stringify(userData));
            setError('');
            console.log('User data saved to localStorage:', userData);
            navigate("/login");
        } else {
            setError('Todos os campos não obrigatórios.');
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
            className="form-container-cadastro"
            onSubmit={handleSubmit}
        >
            <h2>Vamos começar?</h2>
            <div >
                <TextField
                    label=""
                    placeholder="Nome Completo"
                    value={nomeCompleto}
                    onChange={(e) => setNomeCompleto(e.target.value)}
                    className='white-input'
                />
            </div>
            <div>
                <TextField
                    label=""
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='white-input'
                />
            </div>
            <div>
                <TextField
                    id="password-input password"
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='white-input'
                />

                <TextField
                    id="confirm-password-input password"
                    type="password"
                    placeholder="Confirmar senha"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className='white-input'
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
                <Button variant="contained" type="submit" onClick={() => handleSubmit}>Cadastrar</Button>
            </div>
        </Box >
    );
}

export default Cadastro;