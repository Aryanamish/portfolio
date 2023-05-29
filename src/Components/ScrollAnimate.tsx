import React, {useEffect} from 'react';

function makeid(length: number) {
	let result = '';
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
	const charactersLength = characters.length;
	let counter = 0;
	while (counter < length) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
		counter += 1;
	}
	return result;
}

// toggleClass which will be toggled alternative to the animation class
function ScrollAnimate(props: {
	className?: string;
	children: any;
	animateClass: string;
	toggleClass?: string;
}) {
	const scroll_class = makeid(7);
	useEffect(() => {
		window.addEventListener('scroll', () => {
			let reveals = document.querySelectorAll('.' + scroll_class);
			for (let i = 0; i < reveals.length; i++) {
				let windowHeight = window.innerHeight;
				let elementTop = reveals[i].getBoundingClientRect().top;
				let elementVisible = 150;
				if (elementTop < windowHeight - elementVisible) {
					reveals[i].classList.add(props.animateClass);
					if (props.toggleClass)
						reveals[i].classList.remove(props.toggleClass);
				} else if (elementTop - 150 > windowHeight - elementVisible) {
					reveals[i].classList.remove(props.animateClass);
					if (props.toggleClass)
						reveals[i].classList.add(props.toggleClass);
				}
			}
			// window.dispatchEvent(new Event('scroll'));
		});
	});
	return (
		<div
			className={
				'animate__animated ' +
				scroll_class +
				' ' +
				props.className +
				' ' +
				props.toggleClass
			}>
			{props.children}
		</div>
	);
}

export default ScrollAnimate;
