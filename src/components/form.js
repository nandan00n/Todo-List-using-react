import React from 'react';

const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            {text: inputText, completed: false, id: Math.random()*1000}
        ]);
        setInputText("");
    }

    const statusHandler = (e) => {
        setStatus(e.target.value)
    }


    return (
      <>
        <form>
          <input
            type="text"
            className="todo-input"
            value={inputText}
            onChange={inputTextHandler}
          />
          <button
            type="submit"
            className="todo-button"
            onClick={submitTodoHandler}
          >
            Submit
          </button>
        </form>
        {/* <div class="todo-container">
          <ul class="todo-list">
            <div class="todo">
              <li class="todo-item "></li>
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

export default Form;