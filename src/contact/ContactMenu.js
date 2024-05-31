import React, { useState } from "react";
import emailjs from "emailjs-com";
import DOMPurify from "dompurify";
import SocialLinks from "./Socials";
import ReCAPTCHA from 'react-google-recaptcha';

export default function ContactMenu() {
	const initialState = {
		name: "",
		email: "",
		message: "",
	};

	const [formData, setFormData] = useState(initialState);
	const [errors, setErrors] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	const [isSent, setIsSent] = useState(false);
	// For Captcha.
	const [captchaValue, setCaptchaValue] = useState(null);

	/**
	 * The function `handleCaptchaChange` sets the value of a captcha input field.
	 * @param value - The `value` parameter in the `handleCaptchaChange` function represents the new value
	 * of the Captcha input that the user has entered. This value will be used to update the Captcha value
	 * in the application state.
	 */
	const handleCaptchaChange = (value) => { // for Captcha Value
		setCaptchaValue(value);
	}

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const validateErrors = validateForm();
		if (Object.keys(validateErrors).length > 0) {
			setErrors(validateErrors);
			return;
		}

		/* The code block  is
		checking if the `captchaValue` is falsy (null or empty). If the `captchaValue` is falsy, it means
		that the user has not completed the Captcha verification process, so an alert message is displayed
		to prompt the user to verify that they are not a robot. The `return;` statement is used to exit
		the function and prevent the form submission if the Captcha verification is not completed. This
		helps ensure that the form submission is only allowed after the user has successfully completed
		the Captcha verification. */
		if (!captchaValue) {
			alert("Please verify you are not a robot.");
			return;
		}

		setIsLoading(true);

		const { name, email, message } = formData;

		const sanitizedData = {
			name: "Name: " + DOMPurify.sanitize(name),
			email: "Email: " + DOMPurify.sanitize(email),
			message: "Message: " + DOMPurify.sanitize(message),
		};

		console.log(name, email, message);

		const serviceID = "service_lmyyzqb"; // process.env.REACT_APP_EMAILJS_SERVICE_ID;
		const templateID = "template_if6u5xf"; // process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
		const userID = "Ar8nf6LYSNg_UyRYq";  // process.env.REACT_APP_EMAILJS_USER_ID;



		emailjs
			.send(serviceID, templateID, sanitizedData, userID)
			.then((response) => {
				console.log("Email is sent successfully!", response.text);
				setFormData(initialState);
				setErrors({});
				setIsSent(true);
			})
			.catch((error) => {
				console.error("Email sending failed", error);
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	const validateForm = () => {
		const { name, email, message } = formData;
		const errors = {};

		if (!name.trim()) {
			errors.name = "Name is required";
		}

		if (!email.trim()) {
			errors.email = "Email is required";
		} else if (!isValidEmail(email)) {
			errors.email = "Invalid email format";
		}

		if (!message.trim()) {
			errors.message = "Message is required";
		}

		return errors;
	};

	const isValidEmail = (value) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(value);
	};

	return (
		<>
			<div className="contact-menu">
				{!isSent && (
					<form onSubmit={handleSubmit} className="form">
						<div className="form-group">
							<label htmlFor="name">Name:</label>
							<input
								type="text"
								id="name"
								name="name"
								value={formData.name}
								onChange={handleChange}
								className={errors.name ? "error" : ""}
								disabled={isLoading}
							/>
							{errors.name && (
								<span className="error-message">{errors.name}</span>
							)}
						</div>
						<div className="form-group">
							<label htmlFor="email">Email:</label>
							<input
								type="email"
								id="email"
								name="email"
								value={formData.email}
								onChange={handleChange}
								className={errors.email ? "error" : ""}
								disabled={isLoading}
							/>
							{errors.email && (
								<span className="error-message">{errors.email}</span>
							)}
						</div>
						<div className="form-group">
							<label htmlFor="message">Message:</label>
							<textarea
								id="message"
								name="message"
								value={formData.message}
								onChange={handleChange}
								className={errors.message ? "error" : ""}
								disabled={isLoading}
							></textarea>
							{errors.message && (
								<span className="error-message">{errors.message}</span>
							)}
						</div>
						<ReCAPTCHA
							sitekey="6Lc0D-kpAAAAAMQs5fMluz8ck_SV8CcmK8PlVN2G"
							onChange={handleCaptchaChange}
						/>
						<button type="submit" className="btn-submit" disabled={isLoading}>
							{isLoading ? "SENDING..." : "Send"}
						</button>
					</form>
				)}
				{isSent && (
					<div className="success-message">
						<h1>SUCCESS!</h1>
						<p>Your message has been successfully sent!</p>
					</div>
				)}


			</div>
			<SocialLinks />
		</>
	);
}
