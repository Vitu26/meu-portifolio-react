import { styled } from '@mui/system';
import { Box } from '@mui/material';

export const CardContainer = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  cursor: 'pointer',
  padding: 16,
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', // Ajuste no sombreamento para maior suavidade
  borderRadius: 8,
  overflow: 'hidden',
  maxWidth: '100%',
  margin: '40px 20px', // Margem padrão para desktop
  [theme.breakpoints.down('md')]: {
    margin: '30px 15px', // Margem reduzida para tablets
    padding: 12, // Reduz o padding para tablets
  },
  [theme.breakpoints.down('sm')]: {
    margin: '20px 10px', // Margem menor para dispositivos móveis
    padding: 10, // Reduz o padding ainda mais para dispositivos móveis
  },
}));

export const CardImage = styled(Box)(({ theme }) => ({
  width: '100%',
  height: 200,
  objectFit: 'cover',
  borderRadius: 4,
  marginBottom: 16,
  [theme.breakpoints.down('md')]: {
    height: 180, // Reduz a altura da imagem em tablets
  },
  [theme.breakpoints.down('sm')]: {
    height: 150, // Reduz a altura da imagem em dispositivos móveis
  },
}));
