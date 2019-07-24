import React from 'react';
// import {BrowserRouter as Router} from 'react-router-dom'; // don't forget yarn add react-router-dom also
import { Form } from "semantic-ui-react"
import {useState, useEffect} from 'react';

function MyForm(props){
    console.log(props);

    const [teamMember, setTeamMember] = useState({name: "", email: "", role: ""})

    useEffect(()=>{
      // console.log('toEdit is', props.toEdit)
      setTeamMember(props.toEdit);
    },[props.toEdit])

    function handleChange(event){
      const newTeamMember = { ...teamMember, [event.target.name]: event.target.value };
      console.log(newTeamMember);
      setTeamMember(newTeamMember);
    }

    function handleSubmit(event){
      // console.log('oops')
      event.preventDefault();
      const onSubmit = props.onSubmit; 
      onSubmit(teamMember); // Calling function in App.js
    }

    return(
        <Form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Signup</legend>
          <div>
            <label>
              Name
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={teamMember.name}
                  onChange={handleChange}
                />
              </div>
            </label>
          </div>
          <div>
            <label>Role</label>
            <input
              type="text"
              name="role"
              placeholder="Enter role"
              value={teamMember.role}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={teamMember.email}
              onChange={handleChange}
            />
          </div>
          <button type="submit">
            Submit
          </button>
        </fieldset>
      </Form>
    )
}

export default MyForm;