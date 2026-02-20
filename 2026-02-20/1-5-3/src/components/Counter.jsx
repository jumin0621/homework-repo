import styled from "@emotion/styled";
import useCounterStore from "../stores/useCounterStore";

const Box = styled.div`
	border: 1px solid #ddd;
	border-radius: 10px;
	padding: 16px;
	width: min(420px, 100%);
`;

const Title = styled.h2`
	margin: 0 0 10px;
	font-size: 16px;
`;

const Count = styled.div`
	font-size: 32px;
	font-weight: 700;
	margin: 8px 0 14px;
`;

const Buttons = styled.div`
	display: flex;
	gap: 8px;
`;

const Button = styled.button`
	padding: 8px 12px;
	border: 1px solid #ccc;
	border-radius: 8px;
	background: #fff;
	cursor: pointer;

	&:active {
		transform: translateY(1px);
	}
`;

export default function Counter() {
	const count = useCounterStore((state) => state.count);
	const increment = useCounterStore((state) => state.increment);
	const decrement = useCounterStore((state) => state.decrement);
	const reset = useCounterStore((state) => state.reset);

	return (
		<Box>
			<Title>Counter (Zustand)</Title>
			<Count>{count}</Count>

			<Buttons>
				<Button type="button" onClick={increment}>
					+1
				</Button>
				<Button type="button" onClick={decrement}>
					-1
				</Button>
				<Button type="button" onClick={reset}>
					reset
				</Button>
			</Buttons>
		</Box>
	);
}
