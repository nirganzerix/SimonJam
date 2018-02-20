import React from 'react';
import SimonShape from './SimonShape';

const SimonGame = () => {
  return (
    <div>
        <SimonShape color="red"/>
        <SimonShape color="blue"/>
        <br/>
        <SimonShape color="purple"/>
        <SimonShape color="green"/>
    </div>
  );
}

export default SimonGame;
