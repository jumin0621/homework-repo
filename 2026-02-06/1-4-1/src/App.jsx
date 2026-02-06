import { useState } from "react";
import ShoppingCart from "./components/ShoppingCart";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div className="page">
				<ShoppingCart />
			</div>
		</>
	);
}

export default App;
