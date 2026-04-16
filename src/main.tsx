import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./styles/index.scss";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "./theme.ts";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<App />
			</ThemeProvider>
		</BrowserRouter>
	</StrictMode>,
);
