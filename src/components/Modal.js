import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Button, Typography } from '@mui/material';
import { modalOverlayStyle, modalContentStyle, modalCloseButtonStyle, modalImageStyle } from './style/ModalStyles';

const Modal = ({ project, onClose }) => {
  const [imageUrl, setImageUrl] = useState(`https://raw.githubusercontent.com/${project.full_name}/main/screenshot.png`);

  useEffect(() => {
    const checkImage = async () => {
      try {
        // Tenta carregar a imagem principal
        const response = await fetch(imageUrl);
        if (!response.ok) {
          // Se a imagem não existir, define o fallback para o Open Graph
          setImageUrl(`https://opengraph.githubassets.com/1/${project.full_name}`);
        }
      } catch (error) {
        console.error("Erro ao carregar a imagem:", error);
      }
    };
    checkImage();
  }, [project.full_name, imageUrl]);

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" style={modalOverlayStyle}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={modalContentStyle}>
        <button className="modal-close" onClick={onClose} aria-label="Fechar modal" style={modalCloseButtonStyle}>
          X
        </button>
        <Typography variant="h5" component="h3">
          {project.name}
        </Typography>
        <Box
          component="img"
          src={imageUrl}
          alt={`Imagem do projeto ${project.name}`}
          style={modalImageStyle}
        />
        <Typography variant="body2" sx={{ marginTop: 2 }}>
          {project.description || 'Este repositório não possui uma descrição.'}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          href={`https://github.com/${project.full_name}`}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ marginTop: 3 }}
        >
          Acessar Repositório no GitHub
        </Button>
      </div>
    </div>
  );
}

export default Modal;
