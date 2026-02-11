import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

export const LanguageContext = createContext(null);

const translations = {
	ko: {
		greetion: "안녕하세요",
		welcome: "환영합니다",
		changeLanguage: "언어변경",
	},
	en: {
		greeting: "Hello",
		welcome: "Welcome!",
		changeLanguage: "Change Language",
	},
};

export function LanguageProvider({ children }) {
	const [language, setLanguage] = useState("ko");
	const t = (key) => translations[language]?.[key] ?? key;
	const value = { language, setLanguage, t };

	return (
		<LanguageContext.Provider value={value}>
			{children}
		</LanguageContext.Provider>
	);
}

export function useLanguage() {
	const txt = useContext(LanguageContext);
	return txt;
}
