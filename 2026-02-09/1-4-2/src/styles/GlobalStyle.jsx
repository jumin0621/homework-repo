import { Global, css } from "@emotion/react";

const globalStyles = css`
	* {
		box-sizing: border-box;
	}
	html,
	body {
		height: 100%;
	}
	body {
		margin: 0;
		font-family:
			system-ui,
			-apple-system,
			Segoe UI,
			Roboto,
			Arial,
			sans-serif;
		background: #0b1020;
		color: #e5e7eb;
	}
	button {
		font-family: inherit;
	}
`;

export const GlobalStyle = () => <Global styles={globalStyles} />;
