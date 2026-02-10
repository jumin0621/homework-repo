import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "@emotion/styled";

const Wrap = styled.div`
	max-width: 980px;
	margin: 0 auto;
	padding: 32px 20px 48px;
	color: #e7eaf0;
`;

const Badge = styled.div`
	width: 18px;
	height: 18px;
	border-radius: 4px;
	background: #ff4d6d;
	box-shadow: 0 0 0 4px rgba(255, 77, 109, 0.12);
	margin-top: 6px;
`;

const TitleGroup = styled.div`
	display: grid;
	gap: 4px;
`;

const Kicker = styled.div`
	font-size: 14px;
	opacity: 0.9;
`;

const Title = styled.h1`
	margin: 0;
	font-size: 28px;
	line-height: 1.2;
`;

const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 16px;

	@media (max-width: 860px) {
		grid-template-columns: 1fr;
	}
`;

const Demo = styled.div`
	margin-top: 16px;
	background: #0f1117;
	border-radius: 12px;
	padding: 18px;
	background: ${(p) => (p.tone === "blue" ? "#0c2a4b" : "#141821")};
	border: 1px solid rgba(255, 255, 255, 0.08);
	box-shadow: 0 10px 24px rgba(0, 0, 0, 0.35);
`;

const DemoTop = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 12px;
	margin-bottom: 10px;
`;

const DemoTitle = styled.h3`
	margin: 0;
	font-size: 14px;
`;

const Pill = styled.div`
	font-size: 12px;
	padding: 6px 10px;
	border-radius: 999px;
	background: rgba(255, 255, 255, 0.08);
	border: 1px solid rgba(255, 255, 255, 0.08);
`;

const Count = styled.div`
	font-size: 52px;
	font-weight: 800;
	text-align: center;
	padding: 14px 0 6px;
`;

const BtnRow = styled.div`
	display: flex;
	gap: 10px;
	justify-content: center;
	padding: 10px 0 6px;
`;

const Btn = styled.button`
	padding: 10px 14px;
	border-radius: 10px;
	border: 1px solid rgba(255, 255, 255, 0.12);
	background: ${(p) => (p.variant === "ghost" ? "transparent" : "#1b2433")};
	color: #e7eaf0;
	cursor: pointer;
	min-width: 140px;

	&:hover {
		background: ${(p) =>
			p.variant === "ghost" ? "rgba(255,255,255,0.06)" : "#243149"};
	}

	&:disabled {
		opacity: 0.45;
		cursor: not-allowed;
	}
`;

export default function Counter() {
	function clamp(value, min, max) {
		if (value < min) return min;
		if (value > max) return max;
		return value;
	}

	function useCounter(options = {}) {
		const initailValue = options.initailValue ?? 0;
		const min = options.min ?? Number.NEGATIVE_INFINITY;
		const max = options.max ?? Number.POSITIVE_INFINITY;

		const [count, setCount] = useState(() => clamp(initailValue, min, max));
		const [initial, setInitial] = useState(() => clamp(initailValue, min, max));

		useEffect(() => {
			const nextInitial = clamp(initailValue, min, max);
			setInterval(nextInitial);
			setCount((prev) => clamp(prev, min, max));
		}, [initailValue, min, max]);

		const increment = () => {
			setCount((prev) => {
				if (prev >= max) return prev;
				return prev + 1;
			});
		};

		const decrement = () => {
			setCount((prev) => {
				if (prev <= min) return prev;
				return prev - 1;
			});
		};

		const reset = () => {
			setCount(initial);
		};

		return { count, increment, decrement, reset };
	}

	const { count, increment, decrement, reset } = useCounter({
		min: 0,
		max: 10,
		initialValue: 0,
	});

	return (
		<Wrap>
			<Demo>
				<DemoTop>
					<DemoTitle>Counter Hook</DemoTitle>
					<Pill>min: 0 / max: 10</Pill>
				</DemoTop>

				<Count>{count}</Count>

				<BtnRow>
					<Btn onClick={decrement} disabled={count <= 0}>
						Decrement
					</Btn>
					<Btn onClick={reset} variant="ghost">
						Reset
					</Btn>
					<Btn onClick={increment} disabled={count >= 10}>
						Increment
					</Btn>
				</BtnRow>
			</Demo>
		</Wrap>
	);
}
