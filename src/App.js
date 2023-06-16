import React, { useState, useEffect } from 'react';
import ActorDetails from './actor_detail.js';
import './App.css';

const ActorList = () => {
  const [actors, setActors] = useState([]);
  const [selectedActor, setSelectedActor] = useState(null);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);
  const [showList, setshowList] = useState(true);

  useEffect(() => {
    fetch('https://swapi.dev/api/people')
      .then(response => response.json())
      .then(data => {
        setActors(data.results);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const handleDetailClick = (actor) => {
    setSelectedActor(actor);
    setshowList(false);
  };

  if (loading) {
    return <h1><center>Loading...</center></h1>;
  }

  if (error) {
    return <h1><center>Error: {error}</center></h1>;
  }

  const Card = ({ actor, onDetailClick }) => {
    if (!actor || !showList) {
      return null;
    }
    return (
      <div className="actor-card">
        <h2>{actor.name}</h2>
        <p>Height: {actor.height}</p>
        <p>Birth Year: {actor.birth_year}</p>
        <button id="toggle" onClick={() => onDetailClick(actor)}>Detail</button>
      </div>
    );
  };

  return (
    <div>
        {!selectedActor && (
            <h1 className='title'>Actor List</h1>
        )}
      <div className="actor-list">
        {actors.map(actor => (
          <Card
            key={actor.name}
            actor={actor}
            onDetailClick={handleDetailClick}
          />
        ))}
      </div>
     
      {selectedActor && <ActorDetails actor={selectedActor} />}
    </div>
  );
};

export default ActorList;
