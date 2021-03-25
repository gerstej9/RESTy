
import './App.scss';
import React from 'react';
import Header from './components/header/Header.js'
import Form from './components/Form/Form.js'
import Results from './components/results/Results.js'
import Footer from './components/footer/Footer.js'
import History from './components/history/History.js'



class App extends React.Component{
  constructor(){
    super();
    this.state = {
      count: 0,
      results: [],
      headers: {},
      history: JSON.parse(localStorage.getItem('history')),
      input: '',
      rest: 'POST',
      isLoading: false,
    }
  }

  loadFunction = (status) =>{
    this.setState({
      isLoading: status,
    })
  }

  setLocalStorage = (status, data, url, method) => {
    if(status !== 404 || status !== 500){
      if(!localStorage.getItem('history')){
        let payload = JSON.stringify([{data: data, url: url, method: method}]);
        localStorage.setItem('history', payload );
      }else{
        let history = JSON.parse(localStorage.getItem('history'));
        history.push({data: data, url: url, method: method})
        localStorage.setItem('history', JSON.stringify(history))
      }
      this.setState({
        history: JSON.parse(localStorage.getItem('history')),
      })
    }
  }

  updateResults = (data, headers) => {
    this.setState({
      results: data.results,
      count: data.count,
      headers: headers,
        })
  }

  repopulateSearch = (e) => {
    console.log(e.target.textContent);
    let search = e.target.textContent;
    let components = search.split(' ');
    this.setState({
      input: components[1],
      rest: components[0],
    })
  }

  handleInputChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  handleRestChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    this.setState({
      rest: e.target.value
    })
  }

  render(){
    return (
      <div className="App">
        < Header/>
        <section >
        <Form loadFunction={this.loadFunction} handleRestChange={this.handleRestChange} handleInputChange={this.handleInputChange} setLocalStorage={this.setLocalStorage} updateResults={this.updateResults} data={this.state}/>
        <div className = 'main'>
          <History repopulateSearch={this.repopulateSearch} data={this.state} />
          <Results data={this.state}/>
        </div>
        </section>
        <Footer />
      </div>
    );
  }
}
export default App;
