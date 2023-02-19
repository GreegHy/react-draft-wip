import React from 'react';

function AnimalCard({ name, image }) {
  return (
    <div
      style={{
        border: '3px solid',
        borderRadius: '1em',
        backgroundColor: '#FFC5F3',
      }}
    >
      <h1 className="name">{name}</h1>
      <p>{image}</p>
      {/* <p>
        <button>+</button>
        0 
        <button>-</button>
      </p> */}
    </div>
  );
}

export default AnimalCard;
