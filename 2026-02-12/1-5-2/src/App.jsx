import { useState } from "react";
import TodoList from "./components/TodoList";
import { useReducer } from "react";

function todoReducer(state, action) {
	switch (action.type) {
		case "ADD": {
			const text = action.payload.trim();
			if (!text) return state;

			const newTodo = {
				id: Date.now(),
				text,
				done: false,
			};

			return [newTodo, ...state];
		}

		case "DELETE": {
			const id = action.payload;
			return state.filter((todo) => todo.id !== id);
		}
		default:
			return state;
	}
}

const initialTodos = [
	{
		id: Date.now(),
		text: "React 공부하기",
		done: false,
	},
];

function App() {
	const [text, setText] = useState("");
	const [todos, dispatch] = useReducer(todoReducer, initialTodos);

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch({ type: "ADD", payload: text });
		setText("");
	};

	const handleDelete = (id) => {
		dispatch({ type: "DELETE", payload: id });
	};

	return (
		<>
			<div className="page">
				<div className="card">
					<form className="todo-form" onSubmit={handleSubmit}>
						<input
							className="todo-input"
							value={text}
							onChange={(e) => setText(e.target.value)}
							placeholder="할 일을 입력하세요"
						/>
						<button className="todo-add" type="submit">
							추가
						</button>
					</form>

					<TodoList todos={todos} onDelete={handleDelete} />
				</div>
			</div>
		</>
	);
}

export default App;
