import {fireEvent, render, screen} from '@testing-library/react';
import CommentFrom from '../components/CommentForm'
import userEvent from '@testing-library/user-event'
// describe('test cases related to button', ()=>{
//     // test('ncvbn', ()=>{})
//     // test('ncvbn', ()=>{})
// })



test('Initial Conditions', ()=>{
    render(<CommentFrom/>)
    const commentInput = screen.getByRole('textbox');
    expect(commentInput).toBeInTheDocument()
    const checkbox = screen.getByLabelText('I agree with terms and conditions', {exact:false})
    expect(checkbox).toBeInTheDocument()
    const submitButton = screen.getByRole('button', {name:'Comment', exact:false});
    expect(submitButton).toBeDisabled();
})

test('Enable submit button on type and checkbox click', ()=>{
    render(<CommentFrom/>)
    const checkbox = screen.getByLabelText('I agree with terms and conditions', {exact:false})
    const submitButton = screen.getByRole('button', {name:'Comment', exact:false});
    const commentInput = screen.getByPlaceholderText('write your comment', {exact:false});

    // fireEvent.change(commentInput, {target:{value:'something'}})
    userEvent.type(commentInput, 'something')
    // fireEvent.click(checkbox)
    userEvent.click(checkbox)
    expect(submitButton).toBeEnabled();
    // fireEvent.click(checkbox)
    userEvent.click(checkbox)
    expect(submitButton).toBeDisabled();

})