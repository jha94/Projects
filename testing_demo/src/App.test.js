import { render, screen, logRoles } from '@testing-library/react';
import App from './App';
// test or it is global function provided by jest. both are same
test('test 1', ()=>{

  //render the component first of all
   render(<App/>);
  logRoles(screen.getByTestId('myrootdiv'))
  //check if test button is there in App component or not
  // geByRole :- if we can find element using role that means our accesible is more accessible to everyone
  // like blind people who use screen reader
  const buttonElement = screen.getByRole('button', {name:'Test Button', exact:false})
  // toBeInTheDocument is in jest-dom
  expect(buttonElement).toBeInTheDocument();
  // const checkbox = screen.getAllByLabelText()
})



