import React from 'react';
import { render } from 'react-dom';
import 'normalize.css';
import App from './app';
import { Styles } from './styles/styles';

render(<><Styles /><App /></>, document.getElementById('root'));