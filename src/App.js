import "./App.css";
import { Home } from "poc-home-module";
import { Deposits } from "poc-deposits-module";

function App() {
	return (
		<div className="App">
			<div>
				<div style={{ marginBottom: 100 }}>
					<Home />
				</div>
				<div>
					<Deposits />
				</div>
			</div>
		</div>
	);
}

export default App;
