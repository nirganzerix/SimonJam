import SimonGame from './components/SimonGame.jsx';
import React from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const simonTheme = getMuiTheme({
  fontFamily: 'Trebuchet MS, sans-serif',
  palette: {
    primary1Color: '#397103',
    primary2Color: '#6eb411',
    primary3Color: 'green',
    accent1Color: '#d51c0e',
    // accent2Color: grey100,
    // accent3Color: grey500,
    // textColor: darkBlack,
    // alternateTextColor: white,
    // canvasColor: white,
    // borderColor: grey300,
    // disabledColor: fade(darkBlack, 0.3),
    // shadowColor: fullBlack,
  }
})

class App extends React.Component {

  render () {
    return (
      <MuiThemeProvider muiTheme={simonTheme}>
        <SimonGame />
      </MuiThemeProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
