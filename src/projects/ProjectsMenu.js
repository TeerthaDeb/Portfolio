import React, { Component } from "react";
import classNames from "classnames";
import projects from "./projectsData";
import "../styles/projectsMenu.css";

export default class ProjectsMenu extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeProject: 1,
		};
	}

	handleProjectClick = (project) => {
		this.setState({
			activeProject: project,
		});
	};

	renderContent = (projects) => {
		return projects.map((project, index) => (
			<div key={index} className={`project-sub-container-${index + 1}`}>
				<h3>{project.title}</h3>
				<img src={project.image} alt={project.title}></img>
				<div>{project.description}</div>
				<div className="link-container">
					<a href={project.github} target="_blank" rel="noopener noreferrer">
						Source Code
					</a>
					<a href={project.demo} target="_blank" rel="noopener noreferrer">
						DEMO
					</a>
				</div>
			</div>
		));
	};

	render() {
		const { activeProject } = this.state;
		const projectItems = ["PROJECT ONE", "PROJECT TWO", "PROJECT THREE"];

		return (
			<div className="project-menu">
				<div className="project-items-container">
					{projectItems.map((item, index) => (
						<div
							key={index}
							className={classNames("project-item", {
								activeProject: activeProject === index + 1,
							})}
							onClick={() => this.handleProjectClick(index + 1)}
						>
							<div className="container">
								<div className="radio-wrapper">
									<input type="radio" id="value-1" name="btn" className="input" />
									<div className="btn">
										<span aria-hidden="true">_</span>{item}
										<span aria-hidden="true" className="btn__glitch"></span>
										<label className="number">{index}</label>
									</div>
								</div>
								
							</div>
						</div>
					))}
				</div>
				<div className="project-sub-container">
					{this.renderContent([projects[activeProject]])}
				</div>
			</div>
		);
	}
}