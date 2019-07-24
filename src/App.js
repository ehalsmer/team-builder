import React from 'react';
// import {BrowserRouter as Router} from 'react-router-dom'; // don't forget yarn add react-router-dom also
import { List, Container, Button, Header } from 'semantic-ui-react';
import MyForm from './Form';
import EditForm from './EditForm'
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

  function editMember(member){
      console.log('previous state?', toEdit);
      console.log('Editing state:', member);
      const teamMinusOld = team.filter((member)=>member.name !== toEdit.name)
      setTeam([...teamMinusOld, member])
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
              <Button 
                style={{display: 'inline', margin: '10px'}} 
                compact 
                size='mini' 
                onClick={()=>setToEdit(teamMember)}>
                  Edit
              </Button>
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
      <Header as="h2">Forms:</Header>
      <MyForm editMember={editMember} onSubmit={onSubmit}/>
      <EditForm toEdit={toEdit} editMember={editMember}/>
    </Container>
  );
}

export default App;
