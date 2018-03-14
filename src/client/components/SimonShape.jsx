import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import {connect, select} from 'react-redux'
import {bindActionCreators} from 'redux'
import {addColor, resetGame} from '../redux/actions/colorActions'
import {isUserCorrect} from '../redux/selectors/index'

const SimonShape = ({color, addColor, isCorrect, index, resetGame}) => {
  const addInput = () => {
    addColor(index)
    if(isCorrect){
      console.log('CORRECT')
    } else {
      console.log('YOU SUCK')
      resetGame()
    }
  }

  return (
    <RaisedButton
      className="simon-shape"
      label="button"
      labelStyle={{display:'none'}}
      backgroundColor={color}
      onClick={()=>{addInput()}}
      style={{boxShadow:'none'}}
      buttonStyle={{height:'200px',border:'5px solid black', borderRadius: '10%', boxSizing: 'border-box', boxShadow: '2px 2px #888888'}}
      overlayStyle={{height:'200px', boxSizing: 'border-box'}}
      >
    </RaisedButton>
  );
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({addColor, resetGame}, dispatch);
}

const mapStateToProps = (store) => {
  return {isCorrect: isUserCorrect(store)};
}

export default connect(mapStateToProps, mapDispatchToProps)(SimonShape);
