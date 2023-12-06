import React from 'react';
import HotelCard from './HotelCard';
import './HotelPage.css'

const HotelsPage = () => {
  const hotels = [
    {
      id: 1,
      name: 'Example Hotel 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Example Hotel 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      name: 'Example Hotel 3',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'https://via.placeholder.com/150',
    }
  ];

  return (
    <div className="hotels-page">
      <h1>Hotel Page</h1>
      <div className="hotel-list">
        {hotels.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </div>
  );
};

export default HotelsPage;
