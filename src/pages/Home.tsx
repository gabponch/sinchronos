import { Button, Menu, MenuItem } from '@mui/material';
import { MouseEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import logo from '../assets/menu-principal.png';

export default function Home() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (path: string) => {
    handleClose();
    navigate(path);
  };

  return (
    <div className="home-container">
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} className="menu-button">
        <img src={logo} alt="Logo" className="menu-logo" />
      </Button>
      <Menu
        className="menu"
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleMenuItemClick("/login")}>Login</MenuItem>
        <MenuItem onClick={() => handleMenuItemClick("/cadastro")}>Cadastro</MenuItem>
      </Menu>
      
    </div>
  );
}
