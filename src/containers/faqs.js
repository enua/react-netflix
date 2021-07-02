import React from 'react';
import {Accordion, OptForm} from '../components';
import faqsData from '../fixtures/faqs.json';

export default function FaqsContainer() {
  return (
    <Accordion>
      <Accordion.Title>Frequently asked questions</Accordion.Title>
      {faqsData.map((item) => (
        <Accordion.Item key={item.id}>
          <Accordion.Header>{item.header}</Accordion.Header>
          <Accordion.Body>{item.body}</Accordion.Body>
        </Accordion.Item>
      ))}
      <OptForm>
        <OptForm.Input placeholder="Email address"/>
        <OptForm.Button>Try it now</OptForm.Button>
        <OptForm.Break></OptForm.Break>
        <OptForm.Text>Ready to watch? Enter your email and start your netflex account now</OptForm.Text>
      </OptForm>
    </Accordion>
  );
}