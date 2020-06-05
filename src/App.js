import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut} from "@aws-amplify/ui-react";
import { Navbar,Nav, Jumbotron, Container, Card} from 'react-bootstrap'
import {Auth} from 'aws-amplify';


function App(){
  const [username, setUsername] = useState(null);

  useEffect(() => {
  
      Auth.currentAuthenticatedUser({
        bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    }).then(user => setUsername(Auth.user.attributes.email))
    .catch(err => console.log(err));
    
  });

    return (
      
      <div className="App">
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Navbar.Brand href="#home">GORILLA LOGIC APPLICATION DEV</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                
                <AmplifySignOut />
            </Navbar.Collapse>
        </Navbar>
        <Jumbotron fluid>
          <Container>
            <h1>Welcome {username}</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec dui iaculis, sagittis nunc id, pharetra lectus.
            </p>
          </Container>
        </Jumbotron>
        
          <h1>Skills Overview</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec dui iaculis, sagittis nunc id, pharetra lectus.</p>
          <br />
          <div className="row justify-content-md-center">
            <div className="col-md-auto">
              <Card bg="Light" style={{ width: '18rem' }} className="mb-2">
                <Card.Header>FrontEnd</Card.Header>
                <Card.Body>
                  <Card.Text>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec dui iaculis, sagittis nunc id, pharetra lectus.
                  </Card.Text>
                </Card.Body>
              </Card>
              </div>
              <div className="col-md-auto">
              <Card bg="Light" style={{ width: '18rem' }} className="mb-2">
                <Card.Header>Backend</Card.Header>
                <Card.Body>
                  <Card.Text>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec dui iaculis, sagittis nunc id, pharetra lectus.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-auto">
              <Card bg="Light" style={{ width: '18rem' }} className="mb-2">
                <Card.Header>Others</Card.Header>
                <Card.Body>
                  <Card.Text>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec dui iaculis, sagittis nunc id, pharetra lectus.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
       
      </div>
    );
  }

 

export default withAuthenticator(App, true);
