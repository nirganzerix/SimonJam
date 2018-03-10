import React from 'react';
import SimonShape from './SimonShape';
import { RaisedButton } from 'material-ui';
import _ from 'lodash';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {startGame} from '../redux/actions/colorActions';


const SimonGame = ({startGame, gameColors}) => {

  const clickMe = () => {
      startGame();
  };

  return (
    <div>
        <SimonShape color="red"/>
        <SimonShape color="blue"/>
        <br/>
        <SimonShape color="purple"/>
        <SimonShape color="green"/>
        <br/>
        <RaisedButton onClick={()=>{clickMe()}}>Click Me!</RaisedButton>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({startGame}, dispatch);
}

const mapStateToProps = (store) => {
  return {gameColors: store.colorState.gameColors};
}

export default connect(mapStateToProps, mapDispatchToProps)(SimonGame);
