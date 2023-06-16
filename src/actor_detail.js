import React from 'react';
import './App.css'

const ActorDetails = ({ actor, handleDetailClick }) => {
  return (
    <div className="actor-details">
      <h2 className='title'>Actor Details</h2>
      <p>Name: {actor.name}</p>
      <p>Height: {actor.height}</p>
      <p>Birth Year: {actor.birth_year}</p>
      <p>Hair_color: {actor.hair_color}</p>
      <p>Eye_color: {actor.eye_color}</p>
      <p>Gender: {actor.gender}</p>
      <p>
        Films:
        {actor.films.map((film, index) => (
          <span key={index} className="film">{film}</span>
        ))}
      </p>      
      <p>Vehicles: {actor.vehicles}</p>
      <p>URL: {actor.url}</p>
    </div>
  );
};

export default ActorDetails;