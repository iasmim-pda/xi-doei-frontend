import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<div>
				<h1>My App</h1>
				<p>My app is running!</p>
			</div>
		</ThemeProvider>
	);
}

export default App;
