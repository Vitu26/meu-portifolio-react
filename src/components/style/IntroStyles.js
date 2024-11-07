import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const IntroContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100vh', // Altura total da viewport
  backgroundColor: 'black',
  color: 'white',
  textAlign: 'center',
  gap: theme.spacing(2),
  padding: theme.spacing(2),
  overflowX: 'hidden',
}));

export const BackgroundContainer = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: 0,
});

export const ButtonContainer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  width: '100%',
  justifyContent: 'center',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  '& button': {
    color: 'white',
    borderColor: 'white',
  },
}));

export const ModalContainer = styled(Box)(({ theme }) => ({
  width: '90%',
  maxWidth: 600,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[5],
}));

export const DescriptionContainer = styled(Box)(({ theme }) => ({
  marginLeft: theme.spacing(3),
  maxWidth: '600px',
  textAlign: 'left',
  [theme.breakpoints.down('md')]: {
    marginLeft: 0,
    textAlign: 'center',
  },
}));

export const VerticalDivider = styled(Box)(({ theme }) => ({
  width: '2px',
  height: 'auto',
  backgroundColor: 'white',
  color: 'white',
  margin: theme.spacing(0, 3),
}));
