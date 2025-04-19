import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loader from "./components/utils/Loader";

//animate on scroll lib
import AOS from 'aos';
import 'aos/dist/aos.css';

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

	useEffect(() => {
		AOS.init({
			duration: 800, // animation duration
			easing: 'ease-in-out', // easing pattern
			once: true, // only animate once
		});
		AOS.refresh();
	}, []);
	return (

		<>
			{isLoading ? (
				<Loader />
			) : (
				<main className="bg-primary w-screen h-screen custom-scrollbar">
					<div className=" m-auto">
						<Header />
						<Outlet />
						<Footer />
					</div>
				</main>
			)}
		</>


	);
}

export default App;
