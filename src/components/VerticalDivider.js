import React from 'react';
import { Box } from '@mui/material';

const VerticalDivider = () => {
  return (
    <Box
      sx={{
        width: '2px', // Espessura da linha
        height: '100%', // Altura da linha (ajuste conforme necessário)
        backgroundColor: '#fff', // Cor do divisor
        margin: '0 16px', // Espaçamento horizontal em volta do divisor
      }}
    />
  );
};

export default VerticalDivider;
