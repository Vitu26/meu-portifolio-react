import React, { useState } from 'react';
import { Typography, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-scroll';
import {
  StyledAppBar,
  StyledToolbar,
  MenuButton,
  NavLinksDesktop,
  NavLink,
  DrawerContent,
} from './style/HeaderStyles';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle da abertura do menu
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsOpen(open);
  };

  // Lista de navegação
  const navLinks = [
    { id: 'intro', label: 'Inicio' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projetos' },
  ];

  return (
    <header>
      <StyledAppBar position="fixed">
        <StyledToolbar>
          {/* Navegação para desktop */}
          <NavLinksDesktop>
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.id}
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                component={NavLink}
              >
                {link.label}
              </Link>
            ))}
          </NavLinksDesktop>

          {/* Botão para menu móvel */}
          <MenuButton edge="end" color="inherit" aria-label="Abrir menu" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </MenuButton>
        </StyledToolbar>
      </StyledAppBar>

      {/* Navegação móvel */}
      <Drawer
        anchor="right"
        open={isOpen}
        onClose={toggleDrawer(false)}
        role="dialog"
        aria-label="Menu de navegação"
      >
        <DrawerContent onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
          <List>
            {navLinks.map((link) => (
              <ListItem button key={link.id}>
                <Link
                  to={link.id}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-70}
                  component={NavLink}
                  onClick={() => setIsOpen(false)}
                >
                  <ListItemText primary={link.label} />
                </Link>
              </ListItem>
            ))}
          </List>
        </DrawerContent>
      </Drawer>
    </header>
  );
};

export default Header;
