import React from 'react';

function NewPostModal({ isOpen, onClose, onSubmit }){
  if (!isOpen) return null;

  return (
    
    <div className={`modal ${isOpen ? 'show' : ''}`} id="newPostModal">
      <div className="modal-content">
        <h2>Create New Post</h2>
        <form onSubmit={onSubmit}>
          <label htmlFor="postImage">Image:</label>
          <input required type="file" id="postImage" />
          <label htmlFor="postTitle">Title:</label>
          <input required type="text" id="postTitle" />
          <div className="modal-buttons">
            <button className='closeButton' type="button" onClick={onClose}>
              Close
            </button>
            <button className='createButton' type="submit">Create</button>
          </div>
        </form>
      </div>
    </div>
    
  );
};

export default NewPostModal;