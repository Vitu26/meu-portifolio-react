import { styled } from '@mui/material/styles';
import { AppBar, Toolbar, IconButton, Box, Typography } from '@mui/material';

// **1. Header Principal**
export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#000',
  width: '100%',
  overflowX: 'hidden',
}));

// **2. Toolbar - Centraliza os links no centro**
export const StyledToolbar = styled(Toolbar)(() => ({
  display: 'flex',
  justifyContent: 'center', // Centraliza os links no centro
  alignItems: 'center',
  minHeight: '64px',
}));

// **3. Botão para Mobile**
export const MenuButton = styled(IconButton)(({ theme }) => ({
  display: 'block',
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
  color: 'white',
}));

// **4. Links para Desktop**
export const NavLinksDesktop = styled(Box)(({ theme }) => ({
  display: 'none', // Não exibe em telas pequenas
  cursor: 'pointer',
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    gap: theme.spacing(4), // Espaçamento entre os links
  },
}));

// **5. Estilização de um único link (NavLink)**
export const NavLink = styled('a')(({ theme }) => ({
  color: 'white', // Texto branco
  cursor: 'pointer', // Cursor de mãozinha
  textDecoration: 'none', // Remove o sublinhado
  fontSize: '1rem',
  '&:hover': {
    textDecoration: 'none', // Mantém sem sublinhado ao passar o mouse
    opacity: 0.8, // Efeito de hover
  },
}));

// **6. Conteúdo do Drawer (Menu Mobile)**
export const DrawerContent = styled(Box)(({ theme }) => ({
  width: 250,
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(2),
  overflowX: 'hidden',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1),
  },
}));
