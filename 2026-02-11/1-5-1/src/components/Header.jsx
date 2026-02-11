import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { css } from "@emotion/react";

export default function Header() {
	const { language, setLanguage, t } = useLanguage();

	const toggleLanguage = () => {
		setLanguage(language === "ko" ? "en" : "ko");
	};

	return (
		<header
			css={css`
				display: flex;
				gap: 12px;
				align-items: center;
				padding: 12px 0;
			`}
		>
			<strong>i18n</strong>
			<br />
			<button onClick={toggleLanguage}>
				{t("changeLanguage")} ({language})
			</button>
		</header>
	);
}
