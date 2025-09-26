// components/common/Card.tsx
import React from 'react';
import { CardProps } from '../../interfaces';

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 border hover:shadow-lg transition-shadow duration-200">
      <h2 className="text-xl font-semibold mb-3">{title}</h2>
      <p className="text-gray-700">{content}</p>
    </div>
  );
};

export default Card;
