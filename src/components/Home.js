import React, { useState, useEffect } from "react";
import logo from "../logo.svg";
import "./Home.css";
// import { withAuthenticator } from "@aws-amplify/ui-react";
import { Jumbotron, Container, Card } from "react-bootstrap";
import { Auth } from "aws-amplify";

function Home() {
  const [username, setUsername] = useState(null);

  useEffect(() => {
    Auth.currentAuthenticatedUser({
      bypassCache: false, // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    })
      .then((user) => setUsername(Auth.user.attributes.email))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="Home">
      <Jumbotron fluid>
        <Container>
          <h1>Welcome {username}</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            nec dui iaculis, sagittis nunc id, pharetra lectus.
          </p>
        </Container>
      </Jumbotron>

      <h1>Skills Overview</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec
        dui iaculis, sagittis nunc id, pharetra lectus.
      </p>
      <br />
      <div className="row justify-content-md-center">
        <div className="col-md-auto">
          <Card bg="Light" style={{ width: "18rem" }} className="mb-2">
            <Card.Header>FrontEnd</Card.Header>
            <Card.Body>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum nec dui iaculis, sagittis nunc id, pharetra lectus.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-auto">
          <Card bg="Light" style={{ width: "18rem" }} className="mb-2">
            <Card.Header>Backend</Card.Header>
            <Card.Body>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum nec dui iaculis, sagittis nunc id, pharetra lectus.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-auto">
          <Card bg="Light" style={{ width: "18rem" }} className="mb-2">
            <Card.Header>Others</Card.Header>
            <Card.Body>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum nec dui iaculis, sagittis nunc id, pharetra lectus.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

// export default withAuthenticator(Home, true);
export default Home;
