import React, { useState } from 'react';
import { Typography, Tooltip, useMediaQuery, useTheme } from '@mui/material';
import { SkillsContainer, Title, StyledChip, SkillsGrid } from './style/SkillsStyles';

const skills = [
  { name: 'Dart/Flutter', description: 'Desenvolvimento multiplataforma, com esse conhecimento posso desenvolver aplicações web e mobile com apenas um código, diminuindo o tempo de entrega. Tenho foco no mobile.' },
  { name: 'PHP', description: 'Para desenvolver o backend de algumas aplicações utilizo o PHP.' },
  { name: 'JavaScript', description: 'Focado em front-end, o JS é imprescindível para o desenvolvimento e para o aprendizado de bibliotecas e frameworks.' },
  { name: 'HTML/CSS', description: 'Estruturação e estilização de páginas web.' },
  { name: 'React', description: 'Biblioteca JavaScript para construção de interfaces.' },
  { name: 'Laravel', description: 'Framework PHP para desenvolvimento web robusto.' },
  { name: 'Git/GitHub', description: 'Controle de versão e colaboração em projetos.' },
  { name: 'Scrum', description: 'Metodologia ágil para gerenciamento de projetos.' },
  { name: 'Firebase', description: 'Serviços de backend para autenticação, banco de dados, etc.' },
  { name: 'MySQL', description: 'Sistema de gerenciamento de banco de dados relacional.' },
  { name: 'UI/UX Design', description: 'Design de interfaces e experiência do usuário.' },
];

const Skills = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [openTooltip, setOpenTooltip] = useState(null);

  const handleTooltipOpen = (index) => {
    setOpenTooltip(index);
  };

  const handleTooltipClose = () => {
    setOpenTooltip(null);
  };

  return (
    <SkillsContainer>
      <Typography variant="h4" gutterBottom component={Title}>
        Minhas Habilidades
      </Typography>
      <SkillsGrid>
        {skills.map((skill, index) => (
          <Tooltip
            key={index}
            title={
              <Typography sx={{ fontSize: isMobile ? '1rem' : '1.2rem' }}>
                {skill.description}
              </Typography>
            }
            arrow
            open={isMobile ? openTooltip === index : undefined}
            onClose={handleTooltipClose}
            disableHoverListener={isMobile}
          >
            <StyledChip
              onClick={() =>
                isMobile ? handleTooltipOpen(index) : undefined
              }
            >
              {skill.name}
            </StyledChip>
          </Tooltip>
        ))}
      </SkillsGrid>
    </SkillsContainer>
  );
};

export default Skills;
