// src/components/style/ModalStyles.js
const modalOverlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  };
  
  const modalContentStyle = {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    width: '80%',
    maxWidth: '600px',
    position: 'relative',
    textAlign: 'center',
  };
  
  const modalCloseButtonStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    backgroundColor: 'transparent',
    border: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
  };
  
  const modalImageStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    marginBottom: '20px',
  };
  
  const repoLinkStyle = {
    display: 'inline-block',
    marginTop: '15px',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    borderRadius: '4px',
    textDecoration: 'none',
    fontWeight: 'bold',
    cursor: 'pointer',
  };
  
  export { 
    modalOverlayStyle, 
    modalContentStyle, 
    modalCloseButtonStyle, 
    modalImageStyle, 
    repoLinkStyle 
  };
  