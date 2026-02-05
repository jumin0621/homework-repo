import { useState } from "react";
import ProfileCard from "./components/ProfileCard";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div className="page">
				<ProfileCard name="Shin Ju Min" role="Frontend Dev" loves={0} />
			</div>
		</>
	);
}

export default App;
