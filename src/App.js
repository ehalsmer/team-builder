import React from 'react';
// import {BrowserRouter as Router} from 'react-router-dom'; // don't forget yarn add react-router-dom also
import { List } from 'semantic-ui-react';
import MyForm from './Form';
import {useState} from 'react';
// import './App.css';
import "semantic-ui-css/semantic.min.css";

function App() {
  const [team, setTeam] = useState([])

  function onSubmit(teamMember){
    console.log('submitted')
    setTeam([...team, teamMember])
  }

  return (
    <div>
      <h1>Team</h1>
      <List>
        {team.map(teamMember => 
          <List.Item>
            <List.Header>
            {teamMember.name}
            </List.Header>
            <List.Content>
            {teamMember.role}
            </List.Content>
          </List.Item>
          )}
      </List>
      <h1>Form</h1>
      <MyForm onSubmit={onSubmit}/>
    </div>
  );
}

export default App;
