import React from 'react';
import { useContent } from '../hooks';

export default function Browse() {
  // TODO: series and the films
  const { series } = useContent('series');
  const { films } = useContent('films');
  console.log(series);
  console.log(films);
  // TODO: slides
  // TODO: pass it to the browse container

  return (
    <p>browse</p>
  );
}