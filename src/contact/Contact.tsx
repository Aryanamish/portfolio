import {useState} from 'react';
import Form from './Form';
import LetsTalk from './LetsTalk';

function Contact() {
	const [addForm, setAddForm] = useState(false);
	return (
		<div className="flex relative justify-center items-center bg-white/10 p-10 rounded-xl md:mx-36">
			<Form
				className={
					addForm === false
						? 'opacity-0 -z-10'
						: 'animate__fadeInLeft animation-duration-300 animate__animated'
				}
			/>
			<LetsTalk
				className={
					addForm === false
						? 'absolute'
						: 'animate__zoomOut animate__animated hidden'
				}
				onClick={() => {
					setAddForm(true);
				}}
			/>
		</div>
	);
}

export default Contact;
