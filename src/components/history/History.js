import React from 'react';
import './History.scss';

class History extends React.Component{
  render(){
    if(!this.props.data.history){
      return(
        <div className ="App-History" data-testid = "history">
        <h2>
          History
        </h2>
        </div>
      )
    }else{
      return(
        <div className ="App-History" data-testid = "history">
          <h2>
            History
          </h2>
          {this.props.data.history.map((poke,i) => <span onClick={this.props.repopulateSearch} key={i}>{poke.method} {poke.url}</span>)}
        </div>
      )
    }
  }
}



export default History;

