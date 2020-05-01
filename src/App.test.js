import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
// import "./setupTests"

// configure({adapter: new Adapter()})

describe('First react component test with Enzyme', () => {
   
  it('renders without crashing', () => {
      shallow(<App />)
   });
});