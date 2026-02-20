import styled from "@emotion/styled";
import { GlobalStyle } from "./styles/GlobalStyle";
import Counter from "./components/Counter";

const Page = styled.div`
	min-height: 100vh;
	padding: 40px 16px;
`;

const Container = styled.div`
	max-width: 900px;
	margin: 0 auto;

	h1,
	p {
		margin-bottom: 10px;
	}
`;
export default function App() {
	return (
		<>
			<GlobalStyle />
			<Page>
				<Container>
					<h1>Zustand Practice</h1>
					<p>count / increment / decrement / reset</p>
					<Counter />
				</Container>
			</Page>
		</>
	);
}
