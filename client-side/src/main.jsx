import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthProvider } from "./context/authContext.jsx";
import { LoaderProvider } from "./context/loaderContext.jsx";
import { SearchProvider } from "./context/searchContext.jsx";
import { UserImageProvider } from "./context/userImageContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<AuthProvider>
		<UserImageProvider>
			<LoaderProvider>
				<SearchProvider>
					<App />
				</SearchProvider>
			</LoaderProvider>
		</UserImageProvider>
	</AuthProvider>
);
