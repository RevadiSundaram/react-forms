import { useState, useRef } from "react";
import "./App.css";

function App() {
  const todoRef = useRef(null);
  const [todo, setTodo] = useState("");
  const [list, setList] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    todoRef.current.value = "";
    const val = { todo };
    setList((ls) => [...ls, val]);
  }

  return (
    <div className="App">
      <input
        ref={todoRef}
        value={todo}
        data-testid="input-id"
        onChange={(e) => setTodo(e.target.value)}
        name="todo"
      />
      <button data-testid="button-id" onClick={handleSubmit}>
        Add a todo
      </button>
      {console.log(todo.length)}

      {list.length > 0 &&
        list.map((item, index) => {
          return (
            <ul data-testid="ul-id" key={index}>
              <li>{item.todo}</li>
            </ul>
          );
        })}
    </div>
  );
}

export default App;
