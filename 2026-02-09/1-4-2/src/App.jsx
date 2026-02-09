import React from "react";
import styled from "@emotion/styled";
import { GlobalStyle } from "./styles/GlobalStyle";
import Stopwatch from "./components/Stopwatch";

const Layout = styled.div`
	min-height: 100vh;
	display: grid;
	place-items: center;
	padding: 28px;
`;
export default function App() {
	return (
		<>
			<GlobalStyle />
			<Layout>
				<Stopwatch />
			</Layout>
		</>
	);
}
