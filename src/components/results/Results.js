import React from 'react';
import JSONPretty from 'react-json-pretty';
import './Main.scss';




class Results extends React.Component{

  render(){
    if(this.props.data.isLoading){
      return <div className="loader" data-testid = "loader"></div>
    }
    if(!this.props.data.results[0]){
      return <div className ="App-Main" data-testid = "results"></div>
    }
    else{
      return(
        <div className ="App-Main" data-testid = "results">
          <p>Count</p>
          <JSONPretty id="json-pretty" data={this.props.data.count}></JSONPretty>  
          <p>Headers</p>
          <JSONPretty id="json-pretty" data={this.props.data.headers}></JSONPretty>  
          <p>Results</p>
          <JSONPretty id="json-pretty" data={this.props.data.results}></JSONPretty> 
          <div className="loader"></div>
        </div>
      )
    }
  }
}

export default Results

