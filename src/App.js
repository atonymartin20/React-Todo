import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import './components/TodoComponents/Todo.css';

class App extends React.Component {
	// you will need a place to store your state in this component.
	// design `App` to be the parent component of your application.
	// this component is going to take care of state, and any change handlers you need to work with your state

	state = {
		todos: [
			{
				task: 'Organize Garage',
				id: 1528817077286,
				completed: false
			},
			{
				task: 'Bake Cookies',
				id: 1528817084358,
				completed: false
			},
		]
	}
	// - All of your `handler` functions should live here on `<App />`.

	addItem = (event) => {
		event.preventDefault();
		if(this.state.task !== '') {
			const task = this.state.task;
			const id = Date.now();
			const nextToDo = {
				task: task,
				id: id,
				completed: false,
			};
			console.log(nextToDo);
			let todos = this.state.todos;
			todos.push(nextToDo);
			this.setState ( {
				todos: todos,
				task: '',
			});
		}
	};

	handleClick = (todoId) => {
		this.setState({
			todos: this.state.todos.map(todo => {
				if (todo.id === todoId) {
					return {
						task: todo.task,
						id: todo.id,
						completed: !todo.completed,
					}
				}
				else {
					return todo;
				}
			})
		})
	};

	handleInput = (event) => {
		this.setState({
		  task: event.target.value
		});
	  };
	
	clearCompleted = (event) => {
		event.preventDefault();
		let todoArr = [...this.state.todos].filter(todo => !todo.completed);
		this.setState({ todos: todoArr})
	}

	render() {
		return (
			<div className="container">
				<div className='App'>
					<h1>Todo List: MVP</h1>
					<TodoList 
						todos = {this.state.todos}
						handleClick = {this.handleClick}
					/>
					<TodoForm 
						task={this.state.task} 
						addItem={this.addItem} 
						handleInput={this.handleInput}
						clearCompleted ={this.clearCompleted}
					/>
				</div>
			</div>
		);
	}
}

export default App;
