import { styled } from '@mui/system';
import { Box } from '@mui/material';

export const ProjectsContainer = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginTop: '3rem',
  padding: '2rem',
  backgroundColor: '#fff',
}));

export const Title = styled(Box)(({ theme }) => ({
  fontWeight: 'bold',
  color: '#333',
  marginBottom: '2.5rem',
  fontSize: '2rem',
  [theme.breakpoints.down('md')]: {
    fontSize: '1.8rem', // Ajusta o tamanho para tablets
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.5rem', // Ajusta o tamanho para dispositivos móveis
  },
}));

export const CardContainer = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  cursor: 'pointer',
  padding: 16,
  margin: '40px 18px', // Margem padrão para desktop
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  borderRadius: 8,
  overflow: 'hidden',
  maxWidth: '100%',
  [theme.breakpoints.down('md')]: {
    margin: '30px 12px', // Margem reduzida para tablets
    padding: 12,
  },
  [theme.breakpoints.down('sm')]: {
    margin: '20px 8px', // Margem ainda menor para dispositivos móveis
    padding: 10,
  },
}));

export const CardImage = styled(Box)(({ theme }) => ({
  width: '100%',
  height: 200,
  objectFit: 'cover',
  borderRadius: 4,
  marginBottom: 16,
  [theme.breakpoints.down('md')]: {
    height: 180, // Altura reduzida para tablets
  },
  [theme.breakpoints.down('sm')]: {
    height: 150, // Altura ainda menor para dispositivos móveis
  },
}));
