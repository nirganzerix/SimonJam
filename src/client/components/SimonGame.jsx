import React from 'react';
import SimonShape from './SimonShape';
import { RaisedButton } from 'material-ui';
import _ from 'lodash';


const SimonGame = () => {

  const startGame = () => {
      const squares = document.getElementsByClassName("simon-shape");
      console.log(squares);
      //setTimeout(function(){},500);
  };

  return (
    <div>
        <SimonShape color="red"/>
        <SimonShape color="blue"/>
        <br/>
        <SimonShape color="purple"/>
        <SimonShape color="green"/>
        <br/>
        <RaisedButton onClick={()=>{startGame()}}>Click Me!</RaisedButton>
    </div>
  );
}

export default SimonGame;
