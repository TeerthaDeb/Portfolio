// src/components/Socials.js
import React from 'react';
import '../styles/socials.css';

const Socials = () => {
	return (
		<footer>
		  <p>
				Socials :
			</p>
			<ul id="SocialAccounts">
				<ul>
					<li><a href="https://www.facebook.com/teertha.deb.5" className="social-link"><i className="fab fa-facebook-f icon"></i></a></li>
					<li><a href="https://github.com/TeerthaDeb" className="social-link"><i className="fab fa-github icon"></i></a></li>
					<li><a href="https://www.linkedin.com/in/maharaj-teertha-deb/" className="social-link"><i className="fab fa-linkedin-in icon"></i></a></li>
					<li><a href="https://www.stopstalk.com/user/profile/Teertha_Deb" className="social-link"><i className="fas fa-globe icon"></i></a></li>
				</ul>
			</ul>
		</footer>
	  );
	};

export default Socials;
