
import './App.scss';
import React from 'react';
import Header from './components/header/Header.js'
import Form from './components/Form/Form.js'
import Results from './components/results/Results.js'
import Footer from './components/footer/Footer.js'



class App extends React.Component{
  constructor(){
    super();
    this.state = {
      count: 0,
      results: [],
      headers: {},

    }
  }

  updateResults = (data, headers) => {
    this.setState({
      results: data.results,
      count: data.count,
      headers: headers,
        })
  }

  render(){
    return (
      <div className="App">
        < Header/>
        <Form updateResults={this.updateResults}/>
        <Results data={this.state}/>
        <Footer />
      </div>
    );
  }
}
export default App;
