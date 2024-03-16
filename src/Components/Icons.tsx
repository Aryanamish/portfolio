import {Icon} from '@iconify/react';
import {useEffect, useState} from 'react';

const TerminateAnimation: {[key: string]: () => void} = {};

function makeid(length: number) {
	let text = '';
	const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

	for (let i = 0; i < length; i++)
		text += possible.charAt(Math.floor(Math.random() * possible.length));

	return text;
}

const Icons = (props: {
	className?: string;
	icon: string | React.ReactElement<HTMLElement>;
	iconClass?: string;
	animate?: string;
	animateIcon?: string;
	id?: string;
}) => {
	const [key] = useState(makeid(20));
	const [isMouseOver, setIsMouseOver] = useState(false);

	useEffect(() => {
		TerminateAnimation[key] = () => {
			setIsMouseOver(false);
		};
	}, [key]);

	const mouseEnter = () => {
		for (const key in TerminateAnimation) {
			TerminateAnimation[key]();
		}
		setIsMouseOver(true);
	};
	const mouseLeave = () => {
		for (const key in TerminateAnimation) {
			TerminateAnimation[key]();
		}
	};
	return (
		<div
			id={props.id}
			onMouseEnter={mouseEnter}
			onMouseLeave={mouseLeave}
			className={
				(isMouseOver === true ? props.animate || '' : '') + ' ' + props.className
			}>
			<div
				className={
					(isMouseOver === true ? props.animateIcon || '' : '') +
					' ' +
					props.iconClass
				}>
				{typeof props.icon === 'string' ? (
					<Icon icon={props.icon} className="w-full h-full" />
				) : (
					props.icon
				)}
			</div>
		</div>
	);
};

export default Icons;
