import React from "react";
import classNames from "classnames";
import "../styles/aboutMenu.css";

const AboutSubheading = ({ title, content, active, onClick, menuItem }) => {
	const subContainerClass = `sub-container-${menuItem}`;

	return (
		<div className={classNames(subContainerClass, { "active-subheading": active })}>
			{/\d/.test(title) ? (
				<h3 onClick={onClick} className="button" data-text="Awesome">
					<span className="actual-text">
						&nbsp;{title}&nbsp;
					</span>
					<span aria-hidden="true" className="hover-text">
						&nbsp;{title}&nbsp;
					</span>
				</h3>
			) : (
				<h3>{title}</h3>
			)}


			<div className="p-container">{content}</div>
		</div>
	);
};

export default AboutSubheading;
