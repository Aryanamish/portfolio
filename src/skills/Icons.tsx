import {Icon} from '@iconify/react';
import {useState} from 'react';

const Icons = (props: {
	className?: string;
	icon: string;
	iconClass?: string;
	animate?: string;
	animateIcon?: string;
	id?: string;
}) => {
	const [isMouseOver, setIsMouseOver] = useState(false);
	return (
		<div
			id={props.id}
			onMouseEnter={() => {
				setIsMouseOver(true);
				// console.log('isMouseOver: ' + isMouseOver);
			}}
			onMouseLeave={() => {
				setIsMouseOver(false);
				// console.log('isMouseOver ' + isMouseOver);
			}}
			className={
				(isMouseOver === true ? props.animate || '' : '') + ' ' + props.className
			}>
			<Icon
				icon={props.icon}
				className={
					(isMouseOver === true ? props.animateIcon || '' : '') +
					' ' +
					props.iconClass
				}
			/>
		</div>
	);
};

export default Icons;
