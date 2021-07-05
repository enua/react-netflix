import React from 'react';
import { OptForm, Feature } from '../components';
import HeaderContainer from '../containers/header';
import JumbotronContainer from '../containers/jumbotron';
import FooterContainer from '../containers/footer';
import FaqsContainer from '../containers/faqs';


export default function Home() {
  return (
    <>  
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited films, TV programmes and more.</Feature.Title>
          <Feature.SubTitle>Watch any time. Cancel at any time.</Feature.SubTitle>
          <OptForm>
            <OptForm.Input placeholder="Email address"/>
            <OptForm.Button>Try it now</OptForm.Button>
            <OptForm.Break></OptForm.Break>
            <OptForm.Text>Ready to watch? Enter your email and start your netflex account now</OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  )
}