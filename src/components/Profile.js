import React, { useState, useEffect } from 'react';
import { Auth, Logger, Hub } from 'aws-amplify';
import { withAuthenticator } from "@aws-amplify/ui-react";
import { Container, Form, InputGroup, FormControl, Button, Alert } from 'react-bootstrap';

const logger = new Logger('Profile');

function Profile() {
  const [user, setUser] = useState(Auth.user);
  const [profile, setProfile] = useState();

  /* 
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
  */

  useEffect(() => {
    async function fetchData() {
      try {
        console.log('Getting current authenticated user...');
        const userInfo = await Auth.currentUserInfo()
        setUser(userInfo);
      } catch {
        setUser(null);
      }
    };

    // Verify if 'user' has an initial value,
    // if not, then fetch the user from AWS,
    // and once the user value is updated,
    // the useEffect will run again.
    // The profile is set only if the user has value.
    if (user == null) {
      fetchData();
      return;
    }

    setProfile(user.attributes);
  }, [user]);

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
          defaultValue={profile?.email}
        />
      </InputGroup>
    </div>
  );
}

export default Profile;
