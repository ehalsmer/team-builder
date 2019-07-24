import React from 'react';
// import {BrowserRouter as Router} from 'react-router-dom'; // don't forget yarn add react-router-dom also
import { List, Container, Button, Header } from 'semantic-ui-react';
import MyForm from './Form';
import {useState} from 'react';
// import './App.css';
import "semantic-ui-css/semantic.min.css";

function App() {
  const [team, setTeam] = useState([]);
  const [toEdit, setToEdit] = useState('');
  // console.log('toEdit', toEdit);

  function onSubmit(teamMember){
    console.log('submitted')
    setTeam([...team, teamMember])
  }

  return (
    <Container>
      <Header as='h1'>Team</Header>
      <Container>
        <List celled>
          {team.map(teamMember => 
            <List.Item>
              <List.Header>
              {/* <List.Icon name="user"/> */}
              {teamMember.name}
              <Button style={{display: 'inline', margin: '10px'}} compact size='mini' onClick={()=>setToEdit(teamMember)}>Edit</Button>
              </List.Header>
              <List.Content>
              {teamMember.role}
              </List.Content>
              <List.Content>
              {teamMember.email}
              </List.Content>
            </List.Item>
            )}
        </List>
      </Container>
      <Header as="h2">Add Team Member:</Header>
      <MyForm toEdit={toEdit} onSubmit={onSubmit}/>
    </Container>
  );
}

export default App;
