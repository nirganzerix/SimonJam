import React from 'react';
import SimonShape from './SimonShape';
import { RaisedButton } from 'material-ui';
import _ from 'lodash';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {startGame, resetGame} from '../redux/actions/colorActions';
import Confetti from 'react-confetti'


const SimonGame = ({startGame, gameColors, shapeColors, resetGame}) => {

  const clickMe = () => {
      startGame()
  }

  const resetGameAction = () => {
      resetGame()
  }

  return (
    <div style={{width:'100%',height:'100%',textAlign:'center'}}>
      <div style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}}>
        <Confetti width={1000} height={1000} style={{width:'100%',height:'100%'}} recycle={false} gravity={1} numberOfPieces={50} friction={1}/>
      </div>
      <h1>John and Monica's Simon Says Game</h1>
      <h2>Endorsed by Hillary Clinton</h2>
      <div style={{border:'2px solid black', width:'600px', height:'50px', margin: '0 auto'}}>
        <span>You Suck</span>
      </div>
      {
        _.map(shapeColors, function(shapeColor, index){
          if(index % 2 === 1) {
            return <span key={shapeColor}><SimonShape color={shapeColor} index={index} /><br/></span>
          }
          else {
            return <span key={shapeColor}><SimonShape color={shapeColor} index={index} /></span>
          }
        })
      }
      <br/>
      <RaisedButton onClick={()=>{clickMe()}}>Click Me!</RaisedButton>
      &nbsp;&nbsp;
      <RaisedButton onClick={()=>{resetGameAction()}}>Reset</RaisedButton>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({startGame, resetGame}, dispatch);
}

const mapStateToProps = (store) => {
  return {
    gameColors: store.colorState.gameColors,
    shapeColors: store.colorState.shapeColors
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SimonGame);
