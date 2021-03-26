import React from 'react';
import JSONPretty from 'react-json-pretty';
import './Main.scss';
import { If, isObjectEmpty} from '../If/If.js'




class Results extends React.Component{

render(){
  return(
    <div>
      <If condition={this.props.data.isLoading}>
        <div className="loader" data-testid = "loader">
        </div>
      </If>
      <If condition={this.props.data.error}>
        <div className ="App-Main" data-testid = "results">
              <p>Error: No results found</p>
        </div>
      </If>
      <If condition={isObjectEmpty(this.props.data.results)}>
        <div className ="App-Main" data-testid = "results">
          <p>Count</p>
          <JSONPretty id="json-pretty" data={this.props.data.count}></JSONPretty>  
          <p>Headers</p>
          <JSONPretty id="json-pretty" data={this.props.data.headers}></JSONPretty>  
          <p>Results</p>
          <JSONPretty id="json-pretty" data={this.props.data.results}></JSONPretty> 
        </div>
      </If>
    </div>
    )
  }
}

export default Results

