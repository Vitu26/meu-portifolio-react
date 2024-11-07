import React from 'react';
import { Typography } from '@mui/material';
import { CardContainer, CardImage } from './style/ProjectsStyles';

const ProjectCard = ({ repo, onClick }) => (
  <CardContainer onClick={onClick}>
    <CardImage
      component="img"
      src={`https://raw.githubusercontent.com/Vitu26/${repo.name}/main/screenshot.png`}
      alt={repo.name}
      onError={(e) => {
        e.target.onerror = null; // Evita loop de erro
        e.target.src = `https://opengraph.githubassets.com/1/Vitu26/${repo.full_name}`;
      }}
    />
    <Typography variant="h6">{repo.name}</Typography>
    <Typography variant="body2" color="textSecondary">
      {repo.description || 'Projeto sem descrição disponível'}
    </Typography>
  </CardContainer>
);

export default ProjectCard;
