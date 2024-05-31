import React from "react";
import { Link, useLocation } from "react-router-dom";
import astronautHelmet from "../assets/astronaut-helmet.png";
import deadEye from "../assets/dead-eye.png";
import stack from "../assets/stack.png";
import envelope from "../assets/envelope.png";
import "../styles/nav.css";

export default function Nav() {
	const location = useLocation();

	const getNavPositionClass = () => {
		switch (location.pathname) {
			case "/":
				return "nav-about";
			case "/skills":
				return "nav-skills";
			case "/projects":
				return "nav-projects";
			case "/contact":
				return "nav-contact";
			case "/Portfolio":
				return "ABOUT";
			default:
				return "";
		}
	};

	const navPositionClass = getNavPositionClass();

	const isCurrentPage = (navClass) => {
		return navClass === navPositionClass;
	};

	const renderNavLink = (to, imgSrc, altText, navClass) => {
		const isCurrent = isCurrentPage(navClass);
		const linkClass = isCurrent ? "nav-link current" : "nav-link";

		return (
			<Link to={to} className={linkClass}>
				<img src={imgSrc} alt={altText} />
				<p className="section_name">{altText}</p>

			</Link>
		);
	};

	return (
		<nav className={`nav ${navPositionClass}`}>

			{renderNavLink(
				"/",
				astronautHelmet,
				"About",
				"nav-about"
			)}
			{renderNavLink("/skills", deadEye, "Skills", "nav-skills")}
			{renderNavLink("/projects", stack, "Projects", "nav-projects")}
			{renderNavLink("/contact", envelope, "Contact", "nav-contact")}
		</nav>
	);
}
