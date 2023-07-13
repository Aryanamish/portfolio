import React, {useState} from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import Button from '../Components/Button';
import emailjs from '@emailjs/browser';
import Loader from '../Components/Loader';
import EmailJs from '../email';
import {Icon} from '@iconify/react';
interface FormData {
	name: string;
	email: string;
	subject: string;
	message: string;
}

const Form = (props: {className: string}) => {
	const contactForm = React.useRef<HTMLFormElement>(null);
	const [emailError, setEmailError] = React.useState(false);
	const [success, setSuccess] = React.useState(false);
	const validationSchema = Yup.object().shape({
		name: Yup.string().required('Name is required'),
		email: Yup.string()
			.required('Email is required')
			.email('Invalid email format'),
		subject: Yup.string().required('Subject is required'),
		message: Yup.string().required('Message is required'),
	});

	const formik = useFormik<FormData>({
		initialValues: {
			name: '',
			email: '',
			subject: '',
			message: '',
		},
		validationSchema,
		onSubmit: (values) => {
			if (!contactForm.current) return;
			setSendingMail(true);
			setEmailError(false);
			emailjs
				.sendForm(
					EmailJs.SERVICE_ID,
					EmailJs.YOUR_TEMPLATE_ID,
					contactForm.current,
					EmailJs.PUBLIC_KEY
				)
				.then(
					(result) => {
						console.log('Success: ', result.text);
						setSendingMail(false);
						setEmailError(false);
						setSuccess(true);
						formik.resetForm();
					},
					(error) => {
						console.log('Error: ', error.text);
						setSendingMail(false);
						setSuccess(false);
						setEmailError(true);
					}
				);
		},
	});

	const [sendingMail, setSendingMail] = React.useState<Boolean>(false);
	const {values, touched, errors, handleChange, handleSubmit} = formik;

	return (
		<>
			{sendingMail === true && (
				<div className="absolute w-full h-full bg-black/60 flex justify-center items-center">
					<Loader />
				</div>
			)}
			{success === true && (
				<div
					className="absolute w-full h-full bg-black/60 flex justify-center items-center flex-col gap-20"
					onClick={() => setSuccess(false)}>
					<div className="bg-skin-highlight rounded-full p-2">
						<Icon
							icon="mdi:success-bold"
							className=" text-skin-secondary"
							width={60}
						/>
					</div>
				</div>
			)}
			<div className={'flex flex-col gap-3 ' + props.className}>
				<div
					className={
						'text-highlight text-lg w-full ' +
						(emailError ? 'opacity-100' : 'opacity-0')
					}>
					"The message could not be sent successfully. Please reach out to
					me at 'aryanamish385@gmail.com'"
				</div>
				<form
					onSubmit={handleSubmit}
					className="flex flex-col gap-6"
					ref={contactForm}>
					<div className="flex flex-row gap-3 justify-end">
						<div className="flex flex-col w-full">
							<input
								type="text"
								id="name"
								name="name"
								value={values.name}
								onChange={handleChange}
								placeholder="Full Name"
								className={
									'focus:outline-highlight w-full text-2xl bg-gray-200 rounded-md placeholder:text-2xl p-3 shadow-sm ' +
									(touched.name && errors.name
										? 'border-red-700 border-2'
										: '')
								}
							/>
							{touched.name && errors.name && (
								<span className="error-message text-skin-highlight">
									{errors.name}
								</span>
							)}
						</div>
						<div className="flex flex-col w-full">
							<input
								type="email"
								id="email"
								name="email"
								value={values.email}
								placeholder="E-mail"
								onChange={handleChange}
								className={
									'focus:outline-highlight w-full text-2xl bg-gray-200 rounded-md placeholder:text-2xl p-3 shadow-sm ' +
									(touched.email && errors.email
										? 'border-red-700 border-2'
										: '')
								}
							/>
							{touched.email && errors.email && (
								<span className="error-message text-skin-highlight">
									{errors.email}
								</span>
							)}
						</div>
					</div>

					<div className="flex flex-col">
						<input
							type="text"
							id="subject"
							name="subject"
							value={values.subject}
							placeholder="Subject"
							onChange={handleChange}
							className={
								'focus:outline-highlight w-full text-2xl bg-gray-200 rounded-md placeholder:text-2xl p-3 shadow-sm ' +
								(touched.subject && errors.subject
									? 'border-red-700 border-2'
									: '')
							}
						/>
						{touched.subject && errors.subject && (
							<span className="error-message text-skin-highlight">
								{errors.subject}
							</span>
						)}
					</div>
					<div className="flex flex-col">
						<textarea
							id="message"
							name="message"
							value={values.message}
							placeholder="Message"
							onChange={handleChange}
							className={
								'focus:outline-highlight w-full h-56 text-2xl bg-gray-200 rounded-md placeholder:text-2xl p-5 shadow-sm resize-none scrollBarStyle-TextArea ' +
								(touched.message && errors.message
									? 'border-red-700 border-2'
									: '')
							}></textarea>
						{touched.message && errors.message && (
							<span className="error-message text-skin-highlight">
								{errors.message}
							</span>
						)}
					</div>
					<div className="flex justify-center items-center">
						<button
							type="submit"
							className="hidden"
							id="send_email"></button>
						<Button.Pill
							onClick={() => {
								document.getElementById('send_email')?.click();
							}}
							text={
								<>
									Contact Me
									<span className="pl-2 text-xs text-black/80">
										~ it's free
									</span>
								</>
							}
						/>
					</div>
				</form>
			</div>
		</>
	);
};

export default Form;
