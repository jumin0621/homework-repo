import React from "react";
import styled from "@emotion/styled";
import { GlobalStyle } from "./styles/GlobalStyle";
import Counter from "./components/Counter";

export default function App() {
	return (
		<>
			<GlobalStyle />
			<Counter />
		</>
	);
}
