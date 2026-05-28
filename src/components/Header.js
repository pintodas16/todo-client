import { useState } from "react";
import DoubleTick from "../assests/images/double-tick.png";
import NotesImg from "../assests/images/notes.png";
import PlusImg from "../assests/images/plus.png";
import { added, allCompleted, clearCompleted } from "../redux/todos/action";
import { useDispatch,useSelector } from "react-redux";
function Header() {
  const todos = useSelector((state) => state.todos);
  console.log(todos,'todos in header');
  const dispatch = useDispatch();
  const [input, setInput] = useState();
  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(added(input));
    setInput("");
  };
  const compleAllTaskHandler = () => {
    dispatch(allCompleted());
  };
  const clearAllCompletedHandler = () => {
    dispatch(clearCompleted());
  };
  return (
    <div>
      <form
        className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
        onSubmit={submitHandler}
      >
        <img src={NotesImg} className="w-6 h-6" alt="Add todo" />
        <input
          type="text"
          placeholder="Type your todo"
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
          value={input}
          onChange={inputHandler}
        />
        <button
          type="submit"
          className={`appearance-none w-8 h-8 bg-[url('${PlusImg}')] bg-no-repeat bg-contain`}
        ></button>
      </form>

      {todos.length > 0 && (
        <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li
          className="flex space-x-1 cursor-pointer"
          onClick={compleAllTaskHandler}
        >
          <img className="w-4 h-4" src={DoubleTick} alt="Complete" />
          <span>Complete All Tasks</span>
        </li>
        <li className="cursor-pointer" onClick={clearAllCompletedHandler}>
          Clear completed
        </li>
      </ul>
      )}

      {/* <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li
          className="flex space-x-1 cursor-pointer"
          onClick={compleAllTaskHandler}
        >
          <img className="w-4 h-4" src={DoubleTick} alt="Complete" />
          <span>Complete All Tasks</span>
        </li>
        <li className="cursor-pointer" onClick={clearAllCompletedHandler}>
          Clear completed
        </li>
      </ul> */}
    </div>
  );
}
export default Header;
