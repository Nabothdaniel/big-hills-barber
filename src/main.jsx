import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import {store} from './store/store.js'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./pages/Home.jsx";






const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
			path:'/',
			element:<Home/>
			},
		],
	},
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
	<Provider store={store}>
	<RouterProvider router={router} />
	<ToastContainer/>
	</Provider>
	</StrictMode>
);
