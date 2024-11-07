import React, { useState } from 'react';
import { Box, Avatar, Typography, Button, Modal, Divider } from '@mui/material';
import AnimatedBackground from './AnimatedBackground';
import ContactForm from './ContactForm';
import {
  IntroContainer,
  BackgroundContainer,
  ButtonContainer,
  ModalContainer,
  DescriptionContainer,
} from './style/IntroStyles';

const Intro = ({ profile }) => {
  const [open, setOpen] = useState(false);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = process.env.PUBLIC_URL + '/curriculoVictor.pdf';
    link.download = 'Victor_Loic_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);

  return (
    <IntroContainer>
      {/* Fundo animado */}
      <BackgroundContainer>
        <AnimatedBackground />
      </BackgroundContainer>

      {/* Conteúdo principal */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'center',
          gap: { xs: 2, md: 4 },
          zIndex: 1,
          padding: { xs: '1rem', md: '2rem' },
          maxWidth: '100vw',
        }}
      >
        {/* Foto e Informações */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 3,
            textAlign: 'center',
          }}
        >
          {/* Foto */}
          <Avatar
            src={profile?.avatar_url || '/default-avatar.png'}
            alt="Victor Loic"
            sx={{
              width: { xs: 100, sm: 120, md: 200 },
              height: { xs: 100, sm: 120, md: 200 },
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            }}
          />

          {/* Informações */}
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h5" component="h1" gutterBottom>
              {profile?.name || 'Victor Loic Lemos Viana'}
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{
                fontSize: { xs: '0.9rem', sm: '1rem', md: '1.2rem' },
              }}
            >
              Analista e desenvolvedor Front-end e mobile
            </Typography>
            <ButtonContainer>
              <Button
                variant="outlined"
                color="inherit"
                onClick={handleDownloadCV}
                sx={{ width: { xs: '100%', md: 'auto' } }}
              >
                Baixar CV
              </Button>
              <Button
                variant="outlined"
                color="inherit"
                onClick={handleOpenModal}
                sx={{ width: { xs: '100%', md: 'auto' } }}
              >
                Contato
              </Button>
            </ButtonContainer>
          </Box>
        </Box>

        {/* Divider */}
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            display: { xs: 'none', md: 'block' },
            backgroundColor: '#ddd',
            margin: { xs: 0, md: '0 2rem' },
          }}
        />

        {/* Descrição */}
        <DescriptionContainer
          sx={{
            marginTop: { xs: 2, md: 0 },
            maxWidth: { xs: '90%', sm: '85%', md: '600px' },
          }}
        >
          <Typography
            variant="body2"
            sx={{
              textAlign: 'justify',
              fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
              lineHeight: { xs: 1.4, sm: 1.6, md: 1.8 },
            }}
          >
            Desenvolvedor front-end e mobile, desenvolvo aplicações em React,
            JavaScript, Flutter, Dart, PHP. Comecei minha trajetória no
            desenvolvimento com projetos de extensão da faculdade, onde tive meu
            primeiro contato como desenvolvedor front-end. Veja minhas skills e
            projetos logo abaixo.
          </Typography>
        </DescriptionContainer>
      </Box>

      {/* Modal de Contato */}
      <Modal
        open={open}
        onClose={handleCloseModal}
        aria-labelledby="contact-modal"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ModalContainer>
          <ContactForm onClose={handleCloseModal} />
        </ModalContainer>
      </Modal>

    </IntroContainer>
  );
};

export default Intro;
