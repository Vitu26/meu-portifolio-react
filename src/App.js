import React, { useState, useEffect } from 'react';
import { Box, Divider } from '@mui/material';
import axios from 'axios'; 
import Header from './components/Header'; 
import Footer from './components/Footer';
import Intro from './components/Intro'; 
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  // Estado para armazenar os dados do perfil do GitHub.
  const [profile, setProfile] = useState(null);

  // Estado para armazenar o conteúdo do arquivo README do repositório.
  const [readmeContent, setReadmeContent] = useState('');

  // Hook useEffect para realizar uma ação assim que o componente é montado.
  useEffect(() => {
    // Função assíncrona para buscar os dados do perfil e README do GitHub.
    const fetchProfile = async () => {
      try {
        // Token de autenticação para acessar a API do GitHub.
        const token = process.env.REACT_APP_GITHUB_TOKEN;

        // Requisição para obter os dados do perfil do usuário no GitHub.
        const profileResponse = await axios.get('https://api.github.com/users/Vitu26', {
          headers: { Authorization: `Bearer ${token}` }, // Header para autenticação.
        });
        setProfile(profileResponse.data); // Atualiza o estado com os dados do perfil.

        // Requisição para obter o conteúdo do arquivo README do repositório do usuário.
        const readmeResponse = await axios.get('https://api.github.com/repos/Vitu26/Vitu26/readme', {
          headers: {
            Accept: 'application/vnd.github.v3.raw', // Define o formato da resposta como texto bruto.
            Authorization: `Bearer ${token}`, // Header para autenticação.
          },
        });
        setReadmeContent(readmeResponse.data); // Atualiza o estado com o conteúdo do README.
      } catch (error) {
        // Caso ocorra um erro durante as requisições, ele será exibido no console.
        console.error('Erro ao buscar o perfil ou README:', error);
      }
    };

    fetchProfile(); // Chama a função para buscar os dados.
  }, []); // O array vazio indica que o efeito será executado apenas uma vez, na montagem do componente.

  return (
    <Box sx={{ paddingTop: 0, overflowX: 'hidden' }} id="intro">
      {/* Componente do cabeçalho */}
      <Header />
      
      {/* Exibe o componente Intro apenas se os dados do perfil estiverem disponíveis */}
      {profile && <Intro profile={profile} />}
      
      {/* Container principal com padding e separações */}
      <Box sx={{ px: 1, pt: 2 }}>
        <Divider sx={{ my: 2 }} /> {/* Linha divisória entre seções */}
        
        {/* Seção de habilidades */}
        <Box id="skills">
          <Skills />
        </Box>
        
        <Divider sx={{ my: 2 }} /> {/* Linha divisória entre seções */}
        
        {/* Seção de projetos */}
        <Box id="projects">
          <Projects />
        </Box>
      </Box>
      
      {/* Componente do rodapé */}
      <Footer />
    </Box>
  );
}

export default App;
