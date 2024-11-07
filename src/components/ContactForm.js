import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Box, TextField, Button, Typography, Link, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const ContactForm = ({ onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [confirmationMessage, setConfirmationMessage] = useState({ text: '', type: '' });

  const handlePhoneChange = (e) => {
    const rawValue = e.target.value.replace(/\D/g, ''); // Remove tudo que não é dígito
    const formattedValue = rawValue.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3'); // Formata o valor
    setPhone(formattedValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !phone || !message) {
      setConfirmationMessage({ text: 'Por favor, preencha todos os campos.', type: 'error' });
      return;
    }

    const templateParams = {
      from_name: name,
      reply_to: email,
      phone,
      message,
      to_email: 'loic.lemos@gmail.com', // Seu próprio e-mail para receber a mensagem principal
    };

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID, // Usando variável do .env
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID, // Usando variável do .env
        templateParams,
        process.env.REACT_APP_EMAILJS_USER_ID // Usando variável do .env
      )
      .then(
        (response) => {
          setConfirmationMessage({ text: 'Mensagem enviada com sucesso!', type: 'success' });
          setName('');
          setEmail('');
          setPhone('');
          setMessage('');
        },
        (error) => {
          setConfirmationMessage({ text: 'Ocorreu um erro ao enviar a mensagem.', type: 'error' });
        }
      );
  };

  return (
    <Box
      id="contact"
      sx={{
        maxWidth: 600,
        mx: 'auto',
        p: 4,
        bgcolor: '#f9f9f9',
        borderRadius: 2,
        boxShadow: 3,
        position: 'relative', // Para posicionar o botão de fechar
      }}
    >
      {/* Botão para fechar */}
      <IconButton
        onClick={onClose}
        sx={{
          position: 'absolute',
          top: 8,
          right: 8,
        }}
      >
        <CloseIcon />
      </IconButton>

      <Typography variant="h4" align="center" gutterBottom>
        Contato
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nome"
          variant="outlined"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextField
          label="Telefone"
          variant="outlined"
          fullWidth
          margin="normal"
          type="tel"
          value={phone}
          onChange={handlePhoneChange}
          required
        />
        <TextField
          label="Mensagem"
          variant="outlined"
          fullWidth
          margin="normal"
          multiline
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2, py: 1.5 }}
        >
          Enviar
        </Button>
      </form>
      {confirmationMessage.text && (
        <Typography
          align="center"
          sx={{
            mt: 2,
            color: confirmationMessage.type === 'success' ? 'green' : 'red', // Cor verde para sucesso, vermelho para erro
            fontWeight: 'bold',
          }}
        >
          {confirmationMessage.text}
        </Typography>
      )}
      <Link
        href={`https://wa.me/5583986627934?text=Olá, Victor! Gostaria de entrar em contato e pois tenho uma ideia de uma aplicação.`}
        target="_blank"
        rel="noopener noreferrer"
        sx={{ display: 'block', textAlign: 'center', mt: 2, color: 'primary.main', fontWeight: 'bold' }}
      >
        Enviar mensagem via WhatsApp
      </Link>
    </Box>
  );
};

export default ContactForm;
