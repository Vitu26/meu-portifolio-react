import { styled } from '@mui/system';
import { Box } from '@mui/material';

// Estilo para o contêiner do componente Skills
export const SkillsContainer = styled(Box)({
  textAlign: 'center',
  marginTop: '1.5rem',
  padding: '2rem 1rem', // Ajusta o espaçamento interno
  backgroundColor: '#fff',
});

// Estilo para o título
export const Title = styled(Box)({
  fontWeight: 'bold',
  color: '#333',
  marginBottom: '1rem', // Menor espaçamento com os chips
});

// Estilo para os chips das habilidades
export const StyledChip = styled(Box)(({ theme }) => ({
  display: 'inline-block',
  padding: '10px 16px', // Padding ajustado para menor tamanho
  border: '2px solid #333',
  color: '#333',
  borderRadius: '8px', // Mais arredondado
  fontSize: '1rem', // Fonte menor para encaixar mais chips
  fontWeight: '500',
  transition: '0.2s ease-in-out', // Transição mais rápida
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#000',
    color: '#fff',
    transform: 'scale(1.05)', // Reduz o efeito de escala no hover
    boxShadow: '0px 3px 8px rgba(0, 0, 0, 0.15)', // Sombra mais leve
  },
  [theme.breakpoints.down('sm')]: {
    padding: '8px 12px',
    fontSize: '0.9rem',
  },
}));

// Estilo para o contêiner de habilidades
export const SkillsGrid = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center', // Centraliza todos os chips
  gap: theme.spacing(1.5), // Menor espaçamento entre chips
}));
