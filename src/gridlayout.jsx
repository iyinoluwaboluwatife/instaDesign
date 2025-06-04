import React from 'react';
import Card from './card.jsx';

function GridLayout({ gridAssets, onImageClick }){
  return (
    <div className="grid-layout">
      <div id="card-container">
        {gridAssets.map((asset, index) => (
          <Card key={index} image={asset.image} title={asset.title} onImageClick={onImageClick} />
        ))}
      </div>
    </div>
  );
};

export default GridLayout;

