import React, { useState } from 'react';
import ProfileDashboard from './profiledashboard.jsx';
import GridLayout from './gridlayout.jsx';
import EditProfileModal from './editprofile.jsx';
import NewPostModal from './newpostmodal.jsx';
import ImageModal from './imagemodal.jsx';
import logo from './assets/Logo.svg';
import profilepic from './assets/images/image 2.svg';
import image1 from "./assets/images/Vol-.Thoren.svg";
import image2 from "./assets/images/Restauurant.svg";
import image3 from "./assets/pexels-kassandre-pedro-8639743 1 (2).svg";
import image4 from "./assets/images/Long-Bridg.svg";
import image5 from "./assets/images/Tunnel-.svg";
import image6 from "./assets/images/Mountain-House.svg";


function App ()  {
  const [profileInfo, setProfileInfo] = useState({
    name: 'Bessie Coleman',
    bio: 'Civil Aviator',
    image: profilepic,
  });

  const [gridAssets, setGridAssets] = useState([
    { image: image1, title: "Val Thorens" },
    { image: image2, title: "Restaurant Terrace" },
    { image: image3 , title: "An Outdoor Cafe" },
    { image: image4, title: "A Very Long Bridge Over the Forest" },
    { image: image5 , title: "Tunnel with Morning Light" },
    { image: image6, title: "Mountain House" },
  ]);

  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);
  const [isNewPostModalOpen, setIsNewPostModalOpen] = useState(false);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const handleEditProfileClick = () => {
    setIsEditProfileModalOpen(true);
  };

  const handleNewPostClick = () => {
    setIsNewPostModalOpen(true);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsImageModalOpen(true);
  };

  const handleEditProfileSubmit = (e) => {
    e.preventDefault();
    let updatedProfile = {
       name: e.target.elements.name.value,
      bio: e.target.elements.profileBio.value,
      image: e.target.elements.profileImage.files[0] ? URL.createObjectURL(e.target.elements.profileImage.files[0]) : profileInfo.image}
   setProfileInfo(updatedProfile);
   setIsEditProfileModalOpen(false);
  };

  const handleNewPostSubmit = (e) => {
    e.preventDefault();
    let newPost ={ image: URL.createObjectURL(e.target.postImage.files[0]), 
      title: e.target.postTitle.value }
    setGridAssets([...gridAssets,newPost]);
    setIsNewPostModalOpen(false);
    e.target.reset();
  };

  return (
    <div className="main-container">
      <header>
        <img src={logo} alt="logo" />
      </header>
      <div className="body-container">
        <ProfileDashboard
          profileInfo={profileInfo}
          onEditProfileClick={handleEditProfileClick}
          onNewPostClick={handleNewPostClick}
        />
        <GridLayout gridAssets={gridAssets} onImageClick={handleImageClick} />
      </div>
      <EditProfileModal
        isOpen={isEditProfileModalOpen}
        onClose={() => setIsEditProfileModalOpen(false)}
        onSubmit={handleEditProfileSubmit}
        profileInfo={profileInfo}
      />
      <NewPostModal
        isOpen={isNewPostModalOpen}
        onClose={() => setIsNewPostModalOpen(false)}
        onSubmit={handleNewPostSubmit}
      />
      <ImageModal
        isOpen={isImageModalOpen}
        onClose={() => setIsImageModalOpen(false)}
        image={selectedImage}
      />
      <footer className="footer">
        <p>
          <span className="">2025 &copy; Spots</span><br />
          Circle 9, AltSchool Tinyuka.
        </p>
      </footer>
    </div>
  );
}

export default App
