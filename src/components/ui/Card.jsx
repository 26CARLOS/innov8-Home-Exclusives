import React from 'react';

const Card = ({ title, description, imageUrl, children,className }) => {
  return (
    <div className={`max-w-sm rounded overflow-hidden shadow-lg bg-white ${className}`}>
      <div className="px-6 py-2 grid grid-cols-2 items-center">
        {title && <div className="font-bold text-xl text-center">{title}</div>}
        {imageUrl && <img className="scale-100 rounded-sm md:w-full h-full object-contain" src={imageUrl} alt="Card image" />}
      </div>
      <div className="px-2">
        {children}
      </div>
    </div>
  );
};

export default Card;