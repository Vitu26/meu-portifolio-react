import { styled } from '@mui/system';
import { Box } from '@mui/material';

export const ProjectsContainer = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginTop: '3rem',
  padding: '2rem',
  backgroundColor: '#fff',
  minHeight: '400px', // Garante um mínimo de altura
  [theme.breakpoints.down('sm')]: {
    padding: '1rem', // Ajusta padding para telas menores
  },
}));

export const Title = styled(Box)(({ theme }) => ({
  fontWeight: 'bold',
  color: '#333',
  marginBottom: '2.5rem',
  fontSize: '2rem',
  [theme.breakpoints.down('md')]: {
    fontSize: '1.8rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.5rem',
  },
}));

export const CardContainer = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  cursor: 'pointer',
  padding: 16,
  margin: '20px auto', // Centraliza e ajusta margens
  maxWidth: '90%',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  borderRadius: 8,
  overflow: 'hidden',
  [theme.breakpoints.down('md')]: {
    margin: '15px auto',
    padding: 12,
  },
  [theme.breakpoints.down('sm')]: {
    margin: '10px auto',
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
    height: 180,
  },
  [theme.breakpoints.down('sm')]: {
    height: 150,
  },
}));
