import React from 'react';
// import {BrowserRouter as Router} from 'react-router-dom'; // don't forget yarn add react-router-dom also
import MyForm from './Form';
import {useState} from 'react';
// import './App.css';
import "semantic-ui-css/semantic.min.css";

function App() {
  const [team, setTeam] = useState([{name: "", role: ""}])

  return (
    <div>
      <h1>Team</h1>
      {team.map(teamMember => <p>{teamMember.name}</p>)}
      <h1>Form</h1>
      <MyForm />
    </div>
  );
}

export default App;
