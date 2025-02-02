import React from 'react';
import { actors } from '../data';

const Actors = () => {
  console.log(actors)
  return (
    <div>
      <h1>Actors Page</h1>
      {
        actors.map( actor => {
          return (
            <div> 
              <h2>Name: {actor.name} </h2>
              Movies: {actor.movies.map( movie => 
                <ul>
                  <li>{movie}</li>
                </ul>)}
            </div>
        )})
      }
    </div>
  );
};

export default Actors;
