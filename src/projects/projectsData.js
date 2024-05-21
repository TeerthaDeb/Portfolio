import projectOne from "../assets/project-1.png";
import projectTwo from "../assets/project-2.png";
import projectThree from "../assets/project-3.png";

const projects = {
	1: {
		title: "Jarvis - Your Personal Desktop Assistant",
		image: projectOne,
		description: (
			<>
				<p>
					Jarvis is your personal Desktop Assistant and is capable of executing your command just by listening.
				</p>
			</>
		),
		github: "https://github.com/TeerthaDeb/Jarvis-AI",
		demo: "https://netlify.com",
	},
	2: {
		title: "Le Vieux StLaurent Website",
		image: projectTwo,
		description: (
			<>
				<p>
					Developed a responsive website for my uncle's restaurant, resulting in a 22% increase in customers and easy online menu access.
				</p>
			</>
		),
		github: "https://github.com/WebFusion01/le-vieux-st-laurent.github.io/",
		demo: "https://webfusion01.github.io/le-vieux-st-laurent.github.io/index.html",
	},
	3: {
		title: "Full Stack Advanced Bank Management Website",
		image: projectThree,
		description: (
			<>
				<p>
					Developed a full stack bank management website using MySQL, Express, Node.js, HTML, CSS, and JavaScript.
				</p>
			</>
		),
		github: "https://github.com/TeerthaDeb/Advanced-Bank-Management-System--FullStack-",
		demo: "https://netlify.com",
	},
};

export default projects;
