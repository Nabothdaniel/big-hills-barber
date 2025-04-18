import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const handleLoad = () => setIsLoading(false);

		//Ensures the loader dissappears in time

		if (document.readyState === 'complete') {
			setIsLoading(false);
		}
		// add eventlistener is window is not ready
		window.addEventListener('load', handleLoad)



		return () => window.removeEventListener('load', handleLoad);
	}, []);
	return (

		<>
			{isLoading ? (
				<h1>loading......</h1>
			) : (
				<main className="bg-primary w-screen h-screen custom-scrollbar">
					<div className=" m-auto">
						<Header />
						<Outlet />
						<Footer/>
					</div>
				</main>
			)}
		</>


	);
}

export default App;
