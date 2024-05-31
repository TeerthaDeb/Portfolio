import React, {useState , useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./nav/Nav.js";
import About from "./about/About";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";
import "./styles/app.css";
import Background from "./background/Background.js";
import PlayerStats from "./playerStats/PlayerStats.js";
import Loader from "./loader/Loader.js";

const App = () => {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setIsLoading(false);
		}, 1000);

		return () => clearTimeout(timeout);
	}, []);

	if (isLoading) {
		return <Loader />;
	}

	return (
		<Router>
			<Nav />
			<Background />
			<Routes>
				<Route path="/" element={<About />} />
				<Route path="/Portfolio" element={<About />} />
				<Route path="/skills" element={<Skills />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="*" element = {<About />} />
			</Routes>
			<PlayerStats />
		</Router>
	);
};

export default App;