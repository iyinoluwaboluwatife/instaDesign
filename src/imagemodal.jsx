import React from 'react';

function ImageModal({ isOpen, onClose, image }){
  if (!isOpen) return null;

  let handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={`modal ${isOpen ? 'show' : ''}`} onClick={handleOverlayClick}>
      <div className="modal-content preview-content">
        <img src={image} alt="Full view" />
      </div>
    </div>
  );
};

export default ImageModal;