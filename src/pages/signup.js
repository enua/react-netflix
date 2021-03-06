import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import HeaderContainer from '../containers/header';
import FooterContainer from '../containers/footer';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';

export default function Signup() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [firstName, setFirstName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isInvalid = firstName === '' || password === '' || emailAddress === '';
  
  const handleSignUp = function(event) {
    event.preventDefault();

    firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then((result) => 
        result.user
          .updateProfile({
            displayName: firstName,
            photoURL: Math.floor(Math.random() + 4) + 1,
          })
          .then(() => {
            history.push(ROUTES.BROWSE);
          })
      )
      .catch((error) => {
        setFirstName('');
        setEmailAddress('');
        setPassword('');
        setError(error.message);
      });
  }

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Section>
            <Form.Title>Sign up</Form.Title>
            { error && <Form.Error>{error}</Form.Error>}

            <Form.Base onSubmit={handleSignUp} method="POST">
              <Form.Input
                placeholder="Your name"
                value={firstName}
                onChange={({ target }) => setFirstName(target.value)}
              />
              <Form.Input
                placeholder="Your e-mail"
                value={emailAddress}
                onChange={({ target }) => setEmailAddress(target.value)}
              />
              
              <Form.Input
                placeholder="Password"
                value={password}
                onChange={({ target }) => setPassword(target.value)}
              />
              <Form.Submit disabled={isInvalid} type="submit">
                Sign up
              </Form.Submit>

            </Form.Base>
            <Form.Text>Do you have an account? <Form.Link to="/signin">Sign in</Form.Link></Form.Text>
            <Form.TextSmall>Esta p??gina utiliza Google reCAPTCHA para garantizar que no eres un robot.</Form.TextSmall>
          </Form.Section>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}