import React from "react";

function Footer() {
	return (
		<footer
			style={{
				textAlign: "center",
			}}
		>
			&copy;Shin Ju Min, {new Date().getFullYear()}
		</footer>
	);
}

export default Footer;
