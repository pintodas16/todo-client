import Todo from "./Todo";
import { useSelector } from "react-redux";
function TodoList() {
  const todos = useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filters);

  return (

    <> {todos.length > 0 ? (
      <>
      <hr className  ="mt-4" />
       <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {todos
        .filter((todo) => {
          const { status } = filters;
          switch (status) {
            case "complete":
              return todo.completed;
            case "incomplete":
              return !todo.completed;
            default:
              return true;
          }
        })
        .filter((todo) => {
          const { colors } = filters;
          if (colors.length > 0) {
            return colors.includes(todo?.color);
          }
          return true;
        })
        .map((todo) => (
          <Todo todo={todo} key={todo.id} />
        ))}
      </div>
      <hr class="mt-4" />
      </>
    ): (
      <div className="my-5 text-center text-gray-700 text-sm">No todos found! Please add a new todo.</div>
    )} </>

    

 
   
  );
}
export default TodoList;
