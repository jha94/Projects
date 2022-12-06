import {fireEvent, render, screen} from '@testing-library/react';
import App from '../App'
import userEvent from '@testing-library/user-event'


test('Comment gets displyed after submitting', ()=>{
    render(<App/>)
    const checkbox = screen.getByLabelText('I agree with terms and conditions', {exact:false})
    const submitButton = screen.getByRole('button', {name:'Comment', exact:false});
    const commentInput = screen.getByPlaceholderText('write your comment', {exact:false});

    userEvent.type(commentInput, 'something')
    userEvent.click(checkbox)
    userEvent.click(submitButton)
    userEvent.type(commentInput, 'awesome')
    // userEvent.click(checkbox)
    userEvent.click(submitButton)

//    const commentLi = screen.getByText('something', {exact:false})
const commentLi = screen.getAllByRole('listitem')
//    expect(commentLi).toBeInTheDocument();
expect(commentLi.length).toBe(2)
})