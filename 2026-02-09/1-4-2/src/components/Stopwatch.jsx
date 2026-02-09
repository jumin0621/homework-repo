import { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";

const Card = styled.section`
	width: min(560px, 92vw);
	padding: 56px 40px 44px;
	border-radius: 14px;
	border: 1px solid rgba(255, 255, 255, 0.1);
	background: linear-gradient(
		180deg,
		rgba(20, 32, 55, 0.95),
		rgba(12, 18, 33, 0.95)
	);
	box-shadow: 0 30px 80px rgba(0, 0, 0, 0.55);
	text-align: center;
`;

const TimeText = styled.h1`
	margin: 0 0 26px;
	font-size: clamp(52px, 7vw, 72px);
	letter-spacing: 0.06em;
	font-weight: 800;
	color: #fff;
`;

const ButtonRow = styled.div`
	display: flex;
	gap: 16px;
	justify-content: center;
	margin-bottom: 18px;
`;

const BaseButton = styled.button`
	min-width: 110px;
	padding: 12px 18px;
	border-radius: 999px;
	border: none;
	font-weight: 700;
	cursor: pointer;
	transition:
		transform 0.05s ease,
		opacity 0.15s ease,
		filter 0.15s ease;

	&:active {
		transform: translateY(1px);
	}

	&:disabled {
		opacity: 0.5;
		cursor: not-allowed;
		filter: grayscale(0.2);
	}
`;

const PrimaryButton = styled(BaseButton)`
	background: #1f7aff;
	color: #fff;
`;

const DangerButton = styled(BaseButton)`
	background: #7a2b35;
	color: #e9e9e9;
`;

const ResetLink = styled.button`
	margin-top: 8px;
	padding: 8px 10px;
	background: transparent;
	border: none;
	color: rgba(255, 255, 255, 0.55);
	text-decoration: underline;
	text-underline-offset: 4px;
	cursor: pointer;

	&:hover {
		color: rgba(255, 255, 255, 0.75);
	}
`;

export default function Stopwatch() {
	function pad2(n) {
		return String(n).padStart(2, "0");
	}

	function formatTime(cs) {
		const minutes = Math.floor(cs / 6000);
		const seconds = Math.floor(cs / 100) % 60;
		const centis = cs % 100;
		return `${pad2(minutes)}:${pad2(seconds)}:${pad2(centis)}`;
	}

	const [time, setTime] = useState(0);
	const [isRunning, setIsRunning] = useState(false);
	const intervalRef = useRef(null);

	const start = () => {
		if (intervalRef.current) return;
		setIsRunning(true);
		intervalRef.current = window.setInterval(() => {
			setTime((t) => t + 1);
		}, 10);
	};

	const stop = () => {
		if (!intervalRef.current) return;
		clearInterval(intervalRef.current);
		intervalRef.current = null;
		setIsRunning(false);
	};

	const reset = () => {
		if (intervalRef.current) {
			clearInterval(intervalRef.current);
			intervalRef.current = null;
		}
		setIsRunning(false);
		setTime(0);
	};

	useEffect(() => {
		return () => {
			if (intervalRef.current) clearInterval(intervalRef.current);
		};
	}, []);

	return (
		<Card>
			<TimeText>{formatTime(time)}</TimeText>

			<ButtonRow>
				<PrimaryButton onClick={start} disabled={isRunning}>
					Start
				</PrimaryButton>
				<DangerButton onClick={stop} disabled={!isRunning}>
					Stop
				</DangerButton>
			</ButtonRow>

			<ResetLink type="button" onClick={reset}>
				Reset Timer
			</ResetLink>
		</Card>
	);
}
