import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import HeaderContainer from '../containers/header';
import FooterContainer from '../containers/footer';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';

export default function Signin() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isInvalid = password === '' || emailAddress === '';
  
  const handleSignin = (event) => {
    event.preventDefault();

    // run firebase now!
    firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then((result) => {
        // push to /browse
        history.push(ROUTES.BROWSE);
      })
      .catch((error) => {
        console.log(error.message);
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
            <Form.Title>Sign in</Form.Title>
            { error && <Form.Error>{error}</Form.Error>}

            <Form.Base onSubmit={handleSignin} method="POST">
              <Form.Input
                placeholder="Email address"
                value={emailAddress}
                onChange={({ target }) => setEmailAddress(target.value)}
              />
              <Form.Input
                placeholder="Password"
                type="password"
                value={password}
                onChange={({ target }) => setPassword(target.value)}
              />
              <Form.Submit disabled={isInvalid} type="submit">
                Sign in
              </Form.Submit>

            </Form.Base>
            <Form.Text>New to Netflix? <Form.Link to="/signup">Sign up!</Form.Link></Form.Text>
            <Form.TextSmall>Esta página utiliza Google reCAPTCHA para garantizar que no eres un robot.</Form.TextSmall>
          </Form.Section>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}