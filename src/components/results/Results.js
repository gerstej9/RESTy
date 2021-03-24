import React from 'react';
import JSONPretty from 'react-json-pretty';
import './Main.scss';





export default function Results(props){
  return(
    <div className ="App-Main">
      <p>Count</p>
      <JSONPretty id="json-pretty" data={props.data.count}></JSONPretty>  
      <p>Headers</p>
      <JSONPretty id="json-pretty" data={props.data.headers}></JSONPretty>  
      <p>Results</p>
      <JSONPretty id="json-pretty" data={props.data.results}></JSONPretty> 
      {/* Pretty JSON prevented test from working */}
      {/* {props.data.results.map((poke,i) => <span key={i}>{poke.name}</span>)} */}
    </div>
  )
}

