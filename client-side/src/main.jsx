import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthProvider } from "./context/authContext.jsx";
import { LoaderProvider } from "./context/loaderContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<AuthProvider>
		<LoaderProvider>
			<App />
		</LoaderProvider>
	</AuthProvider>
);
