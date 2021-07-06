import React from 'react';
import { useContent } from '../hooks';
import { selectionFilter } from '../utils/selection-filter';

export default function Browse() {
  // series and the films
  const { series } = useContent('series');
  const { films } = useContent('films');

  // slides
  const slides = selectionFilter({ series, films });
  console.log(slides)
  
  // TODO: pass it to the browse container

  return (
    <p>browse</p>
  );
}