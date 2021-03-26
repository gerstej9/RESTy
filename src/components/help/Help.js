import React from 'react';

class Help extends React.Component {

  render(){
    return(
      <div>
        <h1>Welcom to the Resty help page</h1>
        <section>
          <p>To be able to use this page a user needs to enter an api into the input field and select which REST method you would like to utilize</p>
          <br></br>
          <p>The history list on the left hand side of the home page will allow you to see previous queries made, if you click on one it will auto-populate the input field and rest method.</p>
        </section>
        <section>
          <p>
          To use the history page, click on a a previous query from the list on the left hand side to see the results from that query in the right hand details section.
          </p>
          <br></br>
          <p>Conversely, if you click the button next to the previous query, you will be taken to the home page where the query will be ran </p>
        </section>
      </div>
      
    )
  }
}

export default Help;