import React from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentDidMount() {
    this.getAllTodos();
  }

  getAllTodos() {
    fetch('/api/todos')
      .then(response => response.json())
      .then(data => {
        this.setState({
          todos: data
        });
      })
      .catch(error => console.error(error.message));
  }

  addTodo(newTodo) {
    const resOptions = {
      method: 'POST',
      body: JSON.stringify(newTodo),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    fetch('/api/todos', resOptions)
      .then(response => response.json())
      .then(data => {
        this.setState({
          todos: this.state.todos.concat(data)
        });
      })
      .catch(error => console.error(error.message));
  }

  toggleCompleted(todoId) {
    for (let i = 0; i < this.state.todos.length; i++) {
      if (this.state.todos[i].id === todoId) {
        const todoStatus = {
          isCompleted: !this.state.todos[i].isCompleted
        };

        const resOptions = {
          method: 'PATCH',
          body: JSON.stringify(todoStatus),
          headers: {
            'Content-Type': 'application/json'
          }
        };
        fetch(`/api/todos/${todoId}`, resOptions)
          .then(response => response.json())
          .then(data => {
            const newTodoList = this.state.todos.slice();
            newTodoList.splice(i, 1, data);
            this.setState({
              todos: newTodoList
            });
          })
          .catch(error => console.error(error.message));
      }
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="React Todo" />
            <TodoForm onSubmit={this.addTodo} />
            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
