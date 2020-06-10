import React, { useState, useEffect } from 'react';
import { Auth, Logger, Hub} from 'aws-amplify';
import { withAuthenticator } from "@aws-amplify/ui-react";
import { Container, Form, InputGroup, FormControl, Button, Alert } from 'react-bootstrap';

const logger = new Logger('Profile');



function Profile() {
    let [isLoggedIn, setUser] = useState(null);
    let [profile, setProfile] = useState(null);

    
    useEffect(() => {
        let updateUser = async (authState) => {
        let user;
          try {
            user = await Auth.currentAuthenticatedUser();
            setUser(user);
          } catch {
            setUser(null);
          }

          try {
            let data = await Auth.userAttributes(user);
            const profile = {};
            data.forEach(attr => profile[attr.Name] = attr.Value);
            setProfile(profile);
            console.log(profile);
          } catch {
            setProfile(null);
          }
        };

        Hub.listen("auth", updateUser);
        updateUser();
        return () => Hub.remove("auth", updateUser);
      }, []);
      
    return (
        <div className="container">
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">Username</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
                defaultValue={profile && profile.email}
                />
            </InputGroup>
        </div>
      );
}

export default withAuthenticator(Profile);
