import React, { useState } from "react";

function TodoList({ todos, onDelete }) {
	return (
		<ul className="todo-list">
			{todos.map((todo) => (
				<li className="todo-item" key={todo.id}>
					<span className="todo-text">{todo.text}</span>
					<button className="todo-delete" onClick={() => onDelete(todo.id)}>
						삭제
					</button>
				</li>
			))}
		</ul>
	);
}

export default TodoList;
