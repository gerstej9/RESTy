import React from 'react';
import './History.scss';
import {If} from '../If/If.js'
import { NavLink } from 'react-router-dom';

class History extends React.Component{
  render(){
    // if(!this.props.data.history){
      return(
        <div className ="App-History" data-testid = "history">
        <h2>
          History
        </h2>
        <If condition={this.props.page}>
          {this.props.data.history.map((poke,i) => <div key={i}><span onClick={this.props.historyClick}>{poke.method} {poke.url}</span> <NavLink onClick={this.props.repopulateSearch} activeClassName="selected" to="/" >Re-Run</NavLink></div>)}
        </If>
        <If condition={!this.props.page}>
          {this.props.data.history.map((poke,i) => <span onClick={this.props.repopulateSearch} key={i}>{poke.method} {poke.url}</span>)}
        </If>

        </div>
      )
    }
  }




export default History;

