import React from 'react';
import HeaderContainer from '../containers/header';
import { OptForm } from '../components';
import JumbotronContainer from '../containers/jumbotron';
import FooterContainer from '../containers/footer';
import FaqsContainer from '../containers/faqs';

export default function Home() {
  return (
    <>  
      <HeaderContainer>
        <OptForm>
          <OptForm.Input placeholder="Email address"/>
          <OptForm.Button>Try it now</OptForm.Button>
          <OptForm.Break></OptForm.Break>
          <OptForm.Text>Ready to watch? Enter your email and start your netflex account now</OptForm.Text>
        </OptForm>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  )
}