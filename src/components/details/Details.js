import React from 'react';
import '../results/Main.scss';
import {If} from '../If/If.js';
import JSONPretty from 'react-json-pretty';


class Details extends React.Component{
  render(){
    // if(!this.props.data.history){
      return(
        <div className ="App-Main" data-testid = "details">
          <h1>Details</h1>
          <If condition={this.props.data}>
            <p>URL: {this.props.data.url}</p>
            <p>Method: {this.props.data.method}</p>
            <p>Results</p>
            <JSONPretty id="json-pretty" data={this.props.data.data}></JSONPretty> 
          </If>
        </div>
      )
    }
  }




export default Details;