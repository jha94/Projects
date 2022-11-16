import { useState } from "react";
import CommentForm from "./components/CommentForm";
import CommentList from "./components/CommentList";
function App() {
  const [comments, setComment] = useState([])
  return (
    <div data-testid='myrootdiv'>
      <h1>Testing Basics</h1>
      <input type='text' placeholder='type your name here' />
      <button>test button</button>
      <ul>
        <li>item 1</li>
        <li>item 2</li>
      </ul>
      {/* <CommentForm setComment={setComment}/>
      <CommentList allComments = {comments}/> */}
    </div>
  );
}

export default App;
