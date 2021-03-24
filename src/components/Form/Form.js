import React from 'react';
import './Form.scss';


class Form extends React.Component{
  constructor(){
    super();
    this.state = {
      input: '',
      rest: 'GET',
    }
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

  handleSubmit = async (e) => {
    e.preventDefault();
    const req = await fetch(this.state.input,{
      method: this.state.rest,
    });
    console.log(req);
    const data = await req.json();
    console.log(data);
    const headers = req.headers;
    this.props.updateResults(data, headers);
  }
  

    render(){
      return(
        <div className = "App-Form">
          <form onSubmit={this.handleSubmit} className = "App-Url">
            <label>URL:</label>
            <input data-testid="form-input" onChange = {this.handleInputChange} type = "text" value = {this.state.input}/>
            <button>Submit</button>
          </form>
          <form className = "App-Rest">
            <button onClick = {this.handleRestChange} value = "GET">GET</button>
            <button onClick = {this.handleRestChange} value = "POST">POST</button>
            <button onClick = {this.handleRestChange} value = "PUT">PUT</button>
            <button onClick = {this.handleRestChange} value = "DELETE">DELETE</button>
          </form>
        </div>
      )
    }
};
export default Form;
