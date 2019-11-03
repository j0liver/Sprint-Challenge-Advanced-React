import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Players from './components/Players'
import * as rtl from '@testing-library/react';
import PlayerData from './components/PlayerData';
import { fireEvent } from '@testing-library/react';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


test('App renders without crashing', () => {
   rtl.render(<App />);
})

test('Players holds data', () => {
  const wrapper = rtl.render(<Players name='John Cena'/>)
  expect(wrapper.getByText(/John Cena/))
})

test('Test toggle', () => {
  const wrapper = rtl.render(<App />)
  const toggle = wrapper.getByLabelText('toggle')
  expect(toggle)
  rtl.fireEvent.click(toggle)
  const value = JSON.parse(window.localStorage.getItem('darkMode'))
  expect(value).toBe(false)
})
