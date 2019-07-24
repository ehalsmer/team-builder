import React from 'react';
// import {BrowserRouter as Router} from 'react-router-dom'; // don't forget yarn add react-router-dom also
import { Form } from "semantic-ui-react"
import {useState} from 'react';

function MyForm(){
    return(
        <Form>
        <fieldset>
          <legend>Signup</legend>
          <div>
            <label for="username">
              Username
              <div>
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  placeholder="Enter your username"
                  // value={user.username}
                  // onChange={handleChange}
                />
              </div>
            </label>
          </div>
          <div>
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              // value={user.email}
              // onChange={handleChange}
            />
          </div>
          <div>
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Password"
              // onChange={handleChange}
              // value={user.password}
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