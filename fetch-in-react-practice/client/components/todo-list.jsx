import React from 'react';

function Todo(props) {
  const todo = props.todo;
  const idAttr = `todo${todo.id}`;
  const taskClass = todo.isCompleted
    ? 'form-check-label is-completed'
    : 'form-check-label';
  return (
    <li className="list-group-item">
      <div className="form-check">
        <input
          id={idAttr}
          type="checkbox"
          checked={todo.isCompleted}
          className="form-check-input"
          onChange={() => props.toggleCompleted(todo.id)}/>
        <label className={taskClass} htmlFor={idAttr}>
          { props.todo.task }
        </label>
      </div>
    </li>
  );
}

function TodoList(props) {
  return (
    <ul className="list-group shadow-sm">
      {
        props.todos.map(todo => {
          return (
            <Todo
              key={todo.id}
              todo={todo}
              toggleCompleted={props.toggleCompleted}/>
          );
        })
      }
    </ul>
  );
}

export default TodoList;
