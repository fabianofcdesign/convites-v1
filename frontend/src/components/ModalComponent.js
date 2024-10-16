import React from 'react';
import './ModalComponent.css';

const ModalComponent = ({ open, handleClose, children }) => {
  if (!open) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Novo Aniversariante</h2>
        {children}
        <button className="close-button" onClick={handleClose}>Fechar</button>
      </div>
    </div>
  );
};

export default ModalComponent;
