import React, { useState, useEffect } from 'react';
import { Box, Divider } from '@mui/material';
import axios from 'axios';
import Header from './components/Header';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  const [profile, setProfile] = useState(null);
  const [readmeContent, setReadmeContent] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = process.env.REACT_APP_GITHUB_TOKEN;

        // Requisição para o perfil do GitHub
        const profileResponse = await axios.get('https://api.github.com/users/Vitu26', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProfile(profileResponse.data);

        // Requisição para o conteúdo do README
        const readmeResponse = await axios.get('https://api.github.com/repos/Vitu26/Vitu26/readme', {
          headers: {
            Accept: 'application/vnd.github.v3.raw',
            Authorization: `Bearer ${token}`,
          },
        });
        setReadmeContent(readmeResponse.data);
      } catch (error) {
        console.error('Erro ao buscar o perfil ou README:', error);
      }
    };

    fetchProfile();
  }, []);

  return (
    <Box sx={{ paddingTop: 0, overflowX: 'hidden' }} id="intro">
      <Header />
      {profile && <Intro profile={profile} />}
      <Box sx={{ px: 1, pt: 2 }}>
        <Divider sx={{ my: 2 }} />
        <Box id="skills">
          <Skills />
        </Box>
        <Divider sx={{ my: 2 }} />
        <Box id="projects">
          <Projects />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
