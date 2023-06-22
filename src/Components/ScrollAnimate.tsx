import React, {useEffect, useRef, useState} from 'react';

function ScrollAnimate(props: {
	className?: string;
	children: any;
	animateClass: string;
	toggleClass?: string;
	disabled?: boolean;
}) {
	const scrollElement = useRef<HTMLDivElement>(null);
	const [isInView, setIsInView] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (!scrollElement.current || props.disabled) return;

			const top = scrollElement.current.getBoundingClientRect().top;
			const windowHeight =
				window.innerHeight || document.documentElement.clientHeight;

			// Check if the element is in the viewport
			if (top <= windowHeight) {
				setIsInView(true);
			} else {
				setIsInView(false);
			}
		};

		// Attach scroll event listener
		window.addEventListener('scroll', handleScroll);

		// Cleanup the event listener on unmount
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [props.disabled]);

	const elementClassName = props.className || '';
	const animateClassName = props.animateClass || '';
	const toggleClassName = props.toggleClass || '';

	const finalClassName = `${elementClassName} ${
		isInView ? animateClassName : toggleClassName
	}`;

	return (
		<div ref={scrollElement} className={finalClassName}>
			{props.children}
		</div>
	);
}

export default ScrollAnimate;
