import React from "react";
import { GlobalStyle } from "./styles/GlobalStyle";
import { LanguageProvider, useLanguage } from "./contexts/LanguageContext";
import Header from "./components/Header";

function Content() {
	const { t } = useLanguage();
	return (
		<>
			<p>{t("greetion")}</p>
			<p>{t("welcome")}</p>
		</>
	);
}

export default function App() {
	return (
		<>
			<GlobalStyle />
			<LanguageProvider>
				<Header />
				<Content />
			</LanguageProvider>
		</>
	);
}
