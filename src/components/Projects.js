import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography, CircularProgress } from '@mui/material';
import Slider from 'react-slick';
import ProjectCard from './ProjectCard';
import Modal from './Modal';
import { ProjectsContainer, Title } from './style/ProjectsStyles';

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  centerMode: true, // Ativa o modo centralizado
  centerPadding: '40px', // Define o espaçamento entre os cards
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        centerPadding: '20px',
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        centerPadding: '10px',
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

        // Embaralha os repositórios e pega os primeiros 4
        const shuffledRepos = response.data.sort(() => 0.5 - Math.random()).slice(0, 4);
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
        <Slider {...sliderSettings}>
          {repos.map((repo) => (
            <ProjectCard key={repo.id} repo={repo} onClick={() => handleOpenModal(repo)} />
          ))}
        </Slider>
      )}

      {selectedProject && (
        <Modal project={selectedProject} onClose={handleCloseModal} />
      )}
    </ProjectsContainer>
  );
};

export default Projects;
