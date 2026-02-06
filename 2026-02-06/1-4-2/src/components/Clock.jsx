import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

function Clock() {
	const [now, setNow] = useState(new Date());
	const [isRunning, setIsRunning] = useState(true);

	const timeText = now.toLocaleTimeString("ko-KR", {
		hour: "numeric",
		minute: "2-digit",
		second: "2-digit",
		hour12: true,
	});

	useEffect(() => {
		if (!isRunning) return;

		const id = setInterval(() => {
			setNow(new Date());
		}, 1000);

		return () => clearInterval(id);
	}, [isRunning]);

	const handleToggle = () => {
		setIsRunning((prev) => !prev);
	};

	return (
		<div className="card">
			<div className="label">CURRENT TIME</div>

			<div className="time">{timeText}</div>

			<button
				className={`btn ${isRunning ? "stop" : "start"}`}
				onClick={handleToggle}
			>
				{isRunning ? "STOP" : "START"}
			</button>

			<div className={`status ${isRunning ? "on" : "off"}`}>
				<span className="dot" />
				{isRunning ? "Timer is running" : "Timer is stopped"}
			</div>
		</div>
	);
}

export default Clock;
