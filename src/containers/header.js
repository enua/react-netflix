import React from 'react';
import * as ROUTES from '../constants/routes';
import { Header } from '../components';
import logo from '../logo.svg';

export default function HeaderContainer({children}) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} alt="Netflix" src={logo}></Header.Logo>
        <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign in</Header.ButtonLink>
      </Header.Frame>
        {children}
    </Header>
  )
}