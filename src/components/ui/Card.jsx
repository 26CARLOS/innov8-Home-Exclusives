import React from 'react';

const Card = ({ title, description, imageUrl, children,className }) => {
  return (
    <div className={`max-w-sm rounded overflow-hidden shadow-lg bg-white ${className}`}>
      {/* {imageUrl && <img className="w-full size-56" src={imageUrl} alt="Card image" />} */}
      <div className="px-6 py-4">
        {title && <div className="font-bold text-xl mb-2 text-center">{title}</div>}
        {description && <p className="text-gray-700 text-base">{description}</p>}
      </div>
      <div className="px-6 pt-4 pb-2">
        {children}
      </div>
    </div>
  );
};

export default Card;