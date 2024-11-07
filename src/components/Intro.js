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
          gap: 4,
          zIndex: 1, // Garante que o conteúdo esteja sobre o fundo
          padding: '2rem',
        }}
      >
        {/* Container para foto e informações */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'center',
            gap: 4,
          }}
        >
          {/* Foto */}
          <Avatar
            src={profile?.avatar_url || '/default-avatar.png'}
            alt="Victor Loic"
            sx={{
              width: { xs: 150, md: 200 },
              height: { xs: 150, md: 200 },
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            }}
          />

          {/* Informações */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: { xs: 'center', md: 'flex-start' },
              textAlign: { xs: 'center', md: 'left' },
              gap: 2,
            }}
          >
            <Typography variant="h4" component="h1" gutterBottom>
              {profile?.name || 'Victor Loic Lemos Viana'}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Analista e desenvolvedor Front-end e mobile
            </Typography>
            <ButtonContainer>
              <Button variant="outlined" color="inherit" onClick={handleDownloadCV}>
                Baixar CV
              </Button>
              <Button variant="outlined" color="inherit" onClick={handleOpenModal}>
                Contato
              </Button>
            </ButtonContainer>
          </Box>
        </Box>

        {/* Divider vertical */}
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            backgroundColor: '#ddd',
            margin: { xs: '1rem 0', md: '0 2rem' }, // Ajuste de margem para mobile e desktop
          }}
        />

        {/* Coluna 3: Descrição */}
        <DescriptionContainer>
          <Typography
            variant="body2"
            sx={{ textAlign: 'justify', lineHeight: 1.8 }}
          >
            Desenvolvedor front-end e mobile, desenvolvo aplicações em React,
            JavaScript, Flutter, Dart, PHP. Comecei minha trajetória no
            desenvolvimento com projetos de extensão da faculdade, onde tive meu
            primeiro contato como desenvolvedor front-end. No segundo semestre,
            já estava ministrando workshops. No semestre seguinte, fui professor
            de programação web para alunos do ensino fundamental 2 na escola
            Severino Patrício. E depois dessas experiências, comecei como
            desenvolvedor web front-end e mobile atuando no planejamento, desenvolvimento e manutenção de aplicações web e mobile.
            Veja minhas skills e projetos logo abaixo.
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
          <ContactForm />
        </ModalContainer>
      </Modal>
    </IntroContainer>
  );
};

export default Intro;
