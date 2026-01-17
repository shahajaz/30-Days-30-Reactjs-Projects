import { useState } from "react";
import "./App.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"; 

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");
  const [editId, setEditId] = useState(null);

  const randomColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };

  // ADD & UPDATE TASK
  const handleAddTask = (e) => {
    e.preventDefault();

    if (editId !== null) {
      setTasks(
        tasks.map((task) =>
          task.id === editId ? { ...task, text: taskText } : task
        )
      );
      setEditId(null);
    } else {
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          text: taskText,
          completed: false,
          color: randomColor(),
        },
      ]);
    }

    setTaskText("");
  };

  // DELETE TASK
  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // EDIT TASK
  const handleEdit = (task) => {
    setTaskText(task.text);
    setEditId(task.id);
  };

  // SELECT / COMPLETE TASK
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  return (
    <div className="container">
      <h1>To-Do App</h1>

      <form onSubmit={handleAddTask}>
        <input
          type="text"
          placeholder="Enter task..."
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          required
        />
        <button type="submit">
          {editId ? "Update" : "Add"}
        </button>
      </form>

      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{ backgroundColor: task.color }}
            className={task.completed ? "completed" : ""}
          >
            <span onClick={() => toggleComplete(task.id)}>
              {task.text}
            </span>

            <div className="actions">
              <button onClick={() => handleEdit(task)}>Edit <FontAwesomeIcon icon="fa-solid/fa-pen"/></button>
              <button onClick={() => handleDelete(task.id)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;
