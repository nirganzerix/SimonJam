import React from 'react';
import SimonShape from './SimonShape';
import { RaisedButton } from 'material-ui';
import _ from 'lodash';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {startGame} from '../redux/actions/colorActions';


const SimonGame = ({startGame, gameColors, shapeColors}) => {

  const clickMe = () => {
      startGame();
  };

  return (
    <div>
    {
      _.map(shapeColors, function(shapeColor, index){
        if(index % 2 === 1) {
          return <span key={shapeColor}><SimonShape color={shapeColor} /><br/></span>
        }
        else {
          return <span key={shapeColor}><SimonShape color={shapeColor} /></span>
        }
      })
    }
      <RaisedButton onClick={()=>{clickMe()}}>Click Me!</RaisedButton>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({startGame}, dispatch);
}

const mapStateToProps = (store) => {
  return {
    gameColors: store.colorState.gameColors,
    shapeColors: store.colorState.shapeColors
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SimonGame);
