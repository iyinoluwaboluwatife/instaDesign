import React from 'react';


function EditProfileModal({ isOpen, onClose, onSubmit,profileInfo }) {
  if (!isOpen) return null;

  return (
    <div  className={`modal ${isOpen ? 'show' : ''}`}  id="editProfile">
      <div className="modal-content">
        <h2>Edit Profile</h2>
        <form onSubmit={onSubmit}>
          <label htmlFor="name">Name:</label>
          <input required type="text" id="name" defaultValue={profileInfo.name}/>
          <label htmlFor="profileBio">Bio:</label>
          <textarea required id="profileBio" defaultValue={profileInfo.bio}/>
          <label htmlFor="profilepicture">Profile Picture:</label>
          <input  type="file" id="profileImage" />
          <div className="modal-buttons">
            <button className='closeButton' type="button" onClick={onClose}>
              Close
            </button>
            <button className='createButton' type="submit">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};


export default EditProfileModal;