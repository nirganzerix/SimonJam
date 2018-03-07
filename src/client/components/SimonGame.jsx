import React from 'react';
import SimonShape from './SimonShape';
import { RaisedButton } from 'material-ui';
import _ from 'lodash';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addGameColor} from '../redux/actions/colorActions';


const SimonGame = ({addGameColor, gameColors}) => {

  const startGame = () => {
      addGameColor('blue');
      console.log(gameColors);
      /*const shapes = document.getElementsByClassName('simon-shape');
      console.log(shapes);
      _.each(gameColors, function(gColor){
        let flashShape = _.find(shapes, function(shape){
          return shape.children[0].style.backgroundColor === gColor;
        });
        flashShape.children[0].style.backgroundColor = 'white';
        setTimeout(function(){
          flashShape.children[0].style.backgroundColor = 'blue';
        },500);
      });*/
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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({addGameColor}, dispatch);
}

const mapStateToProps = (store) => {
  return {gameColors: store.colorState.gameColors};
}

export default connect(mapStateToProps, mapDispatchToProps)(SimonGame);
