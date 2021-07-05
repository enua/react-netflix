import React, { useState } from 'react';
import HeaderContainer from '../containers/header';
import FooterContainer from '../containers/footer';
import { Form } from '../components';

export default function Signin() {
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isInvalid = password === '' || emailAddress === '';
  const handleSignin = (event) => {
    event.preventDefault();

    // TODO: run firebase now!
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
                autoComplete
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