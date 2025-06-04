import React from 'react';
import { FaHeart } from "react-icons/fa";
import { useState } from 'react';

function Card ({ image, title, onImageClick }){
    const [liked, setLiked] = useState(false);

    const handleImageClick = () => {
      onImageClick(image);
  };
     const handleLikeClick = () => {
      setLiked(!liked);
  };

  return (
    <div className="card">
      <img src={image} alt={title} className="card-img" onClick={handleImageClick} />
      <div className="card-label">
        <p>{title}</p>
         <FaHeart className={`like-button ${liked ? 'liked' : ''}`} 
          onClick={handleLikeClick} ></FaHeart> 
        
      </div>
    </div>
  );
};

export default Card;

