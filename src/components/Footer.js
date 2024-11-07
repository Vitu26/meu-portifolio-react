import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <Box sx={{ py: 3, backgroundColor: '#000', color: 'white', textAlign: 'center' }}>
      <Box>
        <IconButton color="inherit" href="https://github.com/Vitu26">
          <FaGithub />
        </IconButton>
        <IconButton color="inherit" href="https://linkedin.com/in/Vitu26">
          <FaLinkedin />
        </IconButton>
        <IconButton color="inherit" href="https://twitter.com/Vitu26">
          <FaTwitter />
        </IconButton>
      </Box>
      <Typography variant="body2" sx={{ mt: 1 }}>
        © 2024 Victor Loic. Todos os direitos reservados.
      </Typography>
    </Box>
  );
}

export default Footer;
