import React from 'react';
import './App.css';

class App extends React.Component {

state = {
  logins: [],
}

componentDidMount() {
  this.getLogins();
}

getLogins = _ => {
  fetch('http://localhost:5000')
  .then(response => response.json())
  .then(({ data }) => {
    console.log(data);
  })
  .catch(err => console.error(err));
}

renderLogin = ({ Id, MobileUserId }) => <div key={Id}>{MobileUserId}</div>

  render() {
const { logins } = this.state;
  return (
    <div className="App">
      strona
      {logins.map(this.renderLogin)}
    </div>
  );
  }
}

export default App;
