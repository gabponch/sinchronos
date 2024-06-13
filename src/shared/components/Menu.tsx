import { Button, Menu, MenuItem } from '@mui/material';
import { MouseEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Menu.css';
import logo from '../../assets/menu-principal.png';

interface MyComponentProps {
    classe: string
}

export default function ComponenteMenu(props: MyComponentProps) {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className='{props.classe}'>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <img src={logo} alt="Logo" className="menu-logo" />
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem className='menu-item' onClick={() => { handleClose(); navigate("/ponto"); }}>Inicio</MenuItem>
                <MenuItem className='menu-item' onClick={() => { handleClose(); navigate("/justificativa"); }}>Justificativa</MenuItem>
                <MenuItem className='menu-item' onClick={() => { handleClose(); navigate("/notificacoes"); }}>Notificações</MenuItem>
                <MenuItem className='menu-item' onClick={() => { handleClose(); navigate("/historico"); }}>Historico</MenuItem>
                <MenuItem className='menu-item' onClick={() => { handleClose(); navigate("/"); }}>Sair</MenuItem>
            </Menu>
        </div>
    )
}