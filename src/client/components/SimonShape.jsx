import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addColor} from '../redux/actions/colorActions';

const SimonShape = ({color, addColor}) => {
  const addInput = () => {
    addColor(color);
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
  return bindActionCreators({addColor}, dispatch);
}

const mapStateToProps = (store) => {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(SimonShape);
