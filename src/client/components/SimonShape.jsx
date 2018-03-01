import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const SimonShape = ({color}) => {
  const addInput = () => {
    console.log('hit button');
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

export default SimonShape;
