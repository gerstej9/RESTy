
import './App.scss';
import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './components/header/Header.js'
import Form from './components/Form/Form.js'
import Results from './components/results/Results.js'
import Footer from './components/footer/Footer.js'
import History from './components/history/History.js'
import Help from './components/help/Help.js'
import Details from './components/details/Details.js'



class App extends React.Component{
  constructor(){
    super();
    this.state = {
      count: 0,
      results: [],
      headers: {},
      history: JSON.parse(localStorage.getItem('history')) || [],
      input: '',
      rest: 'GET',
      isLoading: false,
      error: false,
      details: false,
    }
  }

  historyClick = (e) =>{
    console.log(e.target);
    let search = e.target.textContent;
    let components = search.split(' ');
    for(let i = 0; i< this.state.history.length; i++){
      if(this.state.history[i].url === components[1] && this.state.history[i].method === components[0]){
        let results = this.state.history[i];
        console.log(results.data);
        this.setState({
          details: results,
        })
      }
    }
  }

  isError = (status) => {
    this.setState({
      error: status
    })
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

  repopulateSearchFromHistory = (e) => {
    console.log(e.target.parentElement.textContent);
    let search = e.target.parentElement.textContent
    let components = search.split(' ');
    for(let i = 0; i< this.state.history.length; i++){
      if(this.state.history[i].url === components[1] && this.state.history[i].method === components[0]){
        let results = this.state.history[i];
        console.log(results.data);
        this.setState({
          results: results.data,
        })
      }
    }
    this.setState({
      input: components[1],
      rest: components[0],
    })
  }


  repopulateSearch = (e) => {
    console.log(e.target.parentElement.textContent);
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
        <BrowserRouter>
        < Header/>
          <Switch>
            <Route path="/history">
              <div className="main">
                <History historyClick={this.historyClick} repopulateSearch={this.repopulateSearchFromHistory} data={this.state} page={'history'}/>
                <Details data={this.state.details} />
              </div>
            </Route>
            <Route path="/help">
              <Help />
            </Route>
            <Route path="/">
            <section >
            <Form isError={this.isError} loadFunction={this.loadFunction} handleRestChange={this.handleRestChange} handleInputChange={this.handleInputChange} setLocalStorage={this.setLocalStorage} updateResults={this.updateResults} data={this.state}/>
            <div className = 'main'>
              <History repopulateSearch={this.repopulateSearch} data={this.state} page={false} />
              <Results loadFunction={this.loadFunction} data={this.state}/>
            </div>
            </section>
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
