import React from 'react';
import profilepic from './assets/images/image 2.svg';
import edit from './assets/icons/pencil.svg';



function ProfileDashboard({ profileInfo, onEditProfileClick, onNewPostClick }) {


    
  return (
    <div className="profile-card">
      <div className="profile-info">
        <div className="profile-picture">
          <img src={profileInfo.image} alt={profileInfo.name} className="avatar" />
        </div>
        <div className="details">
          <div className="bio">
            <h2>{profileInfo.name}</h2>
            <p className="title">{profileInfo.bio}</p>
          </div>
          <a href="#" className="edit-profile" onClick={onEditProfileClick}>
            <img src={edit} alt="pencil" />
            Edit Profile
          </a>
        </div>
      </div>
      <div className="btn-section">
        <button className="new-post" onClick={onNewPostClick}>
          + New Post
        </button>
      </div>
    </div>
  );
};


export default ProfileDashboard;
