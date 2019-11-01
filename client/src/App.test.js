import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import * as rtl from '@testing-library/react';


// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });


test('App renders without crashing', () => {
  rtl.render(<App />);
})

test('app class has data'), () => {
  const wrapper = rtl.render(<App />)
  expect(wrapper.getByText(/Alex Morgan/))
}
