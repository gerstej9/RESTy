
import './App.scss';
import React from 'react';
import Header from './components/header/Header.js'
import Main from './components/main/Main.js'



// function App() {
//   return (
//     <div className="App">
//       <header className = "App-header">
//         Here is a header
//       </header>
//     </div>
//   );
// }

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      number: 1
    }
  }
  log(number){
    console.log('hey from component');
    this.setState({number: number + 1})
  }

  render(){
    return (
      <div className="App">
        < Header/>
        <div>
          Here is a header
          <button onClick = {() => {this.log(this.state.number)}}>Howdy {this.state.number} </button>
        </div>
      <Main />
      </div>
    );
  }
}
export default App;
