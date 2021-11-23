import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filteredTodos }) => {
  return (
    <>
      <div className="todo-container">
        <ul className="todo-list">
          {filteredTodos.map((todo) => (
            <Todo
              todos={todos}
              setTodos={setTodos}
              text={todo.text}
              key={todo.id}
              todo={todo}
            />
          ))}
        </ul>
      </div>
      {/* <div class="todo-container">
        <ul class="todo-list">
          <div class="todo">
            <li class="todo-item ">Running</li>
            <button class="complete-btn">
              <i class="fas fa-check"></i>
            </button>
            <button class="trash-btn">
              <i class="fas fa-times"></i>
            </button>
          </div>
          <div class="todo">
            <li class="todo-item ">Meeting</li>
            <button class="complete-btn">
              <i class="fas fa-check"></i>
            </button>
            <button class="trash-btn">
              <i class="fas fa-times"></i>
            </button>
          </div>
          <div class="todo">
            <li class="todo-item ">Dinner</li>
            <button class="complete-btn">
              <i class="fas fa-check"></i>
            </button>
            <button class="trash-btn">
              <i class="fas fa-times"></i>
            </button>
          </div>
        </ul>
      </div> */}
    </>
  );
};

export default TodoList;
