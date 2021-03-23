import React from 'react';

class Main extends React.Component{
  constructor(){
    super();
    this.state = {
      people: ['jacob'],
      input = ''
    }
  }



  addPersonWithBinding = () => {
    this.setState({
      people: [...this.state.people, 'Jacob'],
    })
  }

  handleChange = (e) => {
    console.log(e.target.value);
    this.setStart({
      input: e.target.value
    })
  }

    render(){
      return(
        <ul>
          <p>People</p>
          {this.state.people.map((person) => <li>{person}</li>)}
          <form>
            <input onChange = {this.handleChange} type = "text" value = {this.state.input}/>
          </form>
          <button onClick = {this.addPersonWithBinding}></button>
        </ul>
      )
    }
};

export default Main;
