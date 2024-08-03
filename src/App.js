import logo from "./logo.svg";
import "./App.css";
import { Home } from "poc-home-module";
import { Deposits } from "poc-deposits-module";

function App() {
	return (
		<div className="App">
			<div>
				<Home />
				<Deposits />
			</div>
		</div>
	);
}

export default App;
