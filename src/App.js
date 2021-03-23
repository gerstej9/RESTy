
import './App.scss';
import React from 'react';
import Header from './components/header/Header.js'
import Form from './components/Form/Form.js'
import Footer from './components/footer/Footer.js'



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
        </div>
        <div>
          <Form />
        </div>
      <Footer />
      </div>
    );
  }
}
export default App;
