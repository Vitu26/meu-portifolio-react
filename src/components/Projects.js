import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography, CircularProgress, Box } from '@mui/material';
import Slider from 'react-slick';
import ProjectCard from './ProjectCard';
import Modal from './Modal';
import { ProjectsContainer, Title } from './style/ProjectsStyles';

//slider show da react-slick
const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 600,
  slidesToShow: 3, // Número de slides visíveis
  slidesToScroll: 1, // Quantidade de slides rolados por vez
  autoplay: true,
  autoplaySpeed: 3000,
  centerMode: false, // Desativa o modo centralizado
  centerPadding: '0px',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1, // Rola um slide por vez
        dots: true, // Garante pontos corretos
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      },
    },
  ],
};


const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/Vitu26/repos');

        // Embaralha os repositórios e pega os primeiros 6
        const shuffledRepos = response.data.sort(() => 0.5 - Math.random()).slice(0, 6);
        setRepos(shuffledRepos);
      } catch (error) {
        console.error('Erro ao buscar repositórios:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchRepos();
  }, []);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <ProjectsContainer>
      <Typography variant="h4" component={Title}>
        Meus Projetos
      </Typography>
      {loading ? (
        <CircularProgress color="primary" />
      ) : (
        <Box sx={{ width: '100%' }}>
          <Slider {...sliderSettings}>
            {repos.map((repo) => (
              <ProjectCard key={repo.id} repo={repo} onClick={() => handleOpenModal(repo)} />
            ))}
          </Slider>
        </Box>
      )}

      {selectedProject && <Modal project={selectedProject} onClose={handleCloseModal} />}
    </ProjectsContainer>
  );
};

export default Projects;
