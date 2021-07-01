import React from 'react';
import jumbotronData from '../fixtures/jumbo.json';
import { Jumbotron } from '../components'

export default function JumbotronContainer() {
  return (
    <Jumbotron.Container>
      {jumbotronData.map((data) => (
        <Jumbotron key={data.id} direction={data.direction}>
          <Jumbotron.Pane>
            <Jumbotron.Title>{data.title}</Jumbotron.Title>
            <Jumbotron.SubTitle>{data.subTitle}</Jumbotron.SubTitle>
          </Jumbotron.Pane>
          <Jumbotron.Pane>
            <Jumbotron.Image src={data.image} alt={data.alt} />
          </Jumbotron.Pane>
        </Jumbotron>
      ))}
    </Jumbotron.Container>
  );
}