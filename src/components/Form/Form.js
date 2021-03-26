import React from 'react';
import './Form.scss';


class Form extends React.Component{

  handleSubmit = async (e) => {
    e.preventDefault();
    this.props.loadFunction(true);
    const req = await fetch(this.props.data.input,{
      method: this.props.data.rest,
    });
    try{
      const data = await req.json();
      const headers = req.headers;
      this.props.updateResults(data, headers);
      this.props.setLocalStorage(req.status, data, this.props.data.input, this.props.data.rest )
      this.props.isError(false);
    }
    catch(e){
      console.log(e);
      this.props.updateResults({results:{}, count: 0}, null);
      this.props.isError(true);
    }
    this.props.loadFunction(false);
  }
  

    render(){
      return(
        <div className = "App-Form">
          <form onSubmit={this.handleSubmit} className = "App-Url">
            <label>URL:</label>
            <input data-testid="form-input" onChange = {this.props.handleInputChange} type = "text" value = {this.props.data.input}/>
            <button>Submit</button>
          </form>
          <form className = "App-Rest">
            <button onClick = {this.props.handleRestChange} value = "GET">GET</button>
            <button onClick = {this.props.handleRestChange} value = "POST">POST</button>
            <button onClick = {this.props.handleRestChange} value = "PUT">PUT</button>
            <button onClick = {this.props.handleRestChange} value = "DELETE">DELETE</button>
          </form>
        </div>
      )
    }
};
export default Form;
