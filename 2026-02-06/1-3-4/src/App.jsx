import { useState } from "react";
import TodoList from "./components/TodoList";

function App() {
	const [text, setText] = useState("");
	const [todos, setTodos] = useState([
		{
			id: Date.now(),
			text: "React 공부하기",
		},
	]);

	const handleAdd = () => {
		const value = text.trim();
		if (!value) return; // ✅ 유효성 검사: 빈 텍스트 방지

		const newTodo = {
			id: Date.now(), // ✅ Key: 고유 ID
			text: value,
		};

		setTodos((prev) => [newTodo, ...prev]); // 위에 추가
		setText(""); // 입력창 비우기
	};

	const handleDelete = (id) => {
		setTodos((prev) => prev.filter((todo) => todo.id !== id));
	};

	const handleSubmit = (e) => {
		e.preventDefault(); // 폼 제출 새로고침 방지
		handleAdd();
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
