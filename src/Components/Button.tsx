import {Icon} from '@iconify/react';
import React, {ReactNode, useState} from 'react';

function ButtonAction(props: any) {
	const [isMouseover, setIsMouseOver] = useState(false);
	return (
		<div
			onMouseEnter={() => setIsMouseOver(true)}
			onMouseLeave={() => setIsMouseOver(false)}
			onClick={props.onClick}
			className="flex button h-full w-full rounded-md cursor-pointer">
			<div className="bg-skin-highlight w-6 py-5 rounded-l-md"></div>
			<div className="bg-skin-secondary w-0 flex justify-start items-center relative">
				<div className="absolute bg-skin-fill w-[2px] h-full"></div>
				<div
					className={(() => {
						const animate =
							isMouseover === true || props.mouseOver
								? ' animate-bounce transition-all'
								: '';
						return (
							'rounded-full w-4 h-4 bg-skin-fill absolute left-[-7px]' +
							animate
						);
					})()}>
					<Icon
						className="scale-75 text-skin-secondary"
						icon="material-symbols:play-arrow"
					/>
				</div>
			</div>
			<div className="bg-skin-secondary px-5 rounded-r-md flex justify-center items-center">
				<span className="text-skin-fill font-bold">Learn More</span>
			</div>
		</div>
	);
}

function PillCircle(props: {onClick?: Function; text: ReactNode | string}) {
	const [isMouseOver, setIsMouseOver] = useState(false);

	return (
		<div
			onClick={(e) => {
				if (props.onClick) {
					return props.onClick(e);
				} else {
					return;
				}
			}}
			onMouseEnter={() => setIsMouseOver(true)}
			onMouseLeave={() => setIsMouseOver(false)}
			className="flex gap-5 bg-skin-highlight rounded-3xl h-10 w-fit justify-center items-center cursor-pointer">
			<div className="pl-3">
				<span className="font-bold">{props.text}</span>
			</div>
			<div
				className={
					(() => {
						return isMouseOver === true ? 'scale-110 ' : '';
					})() + 'p-1 h-full aspect-square'
				}>
				<div className="aspect-square h-full flex justify-center items-center bg-black rounded-full">
					<Icon
						icon="material-symbols:arrow-right-alt-rounded"
						className="text-white"
					/>
				</div>
			</div>
		</div>
	);
}

function Pill(props: {text: string | ReactNode; onClick?: Function}) {
	return (
		<div
			onClick={(evt) => {
				if (props.onClick) {
					return props.onClick(evt);
				} else {
					return;
				}
			}}
			className="bg-skin-highlight cursor-pointer hover:bg-skin-highlight/80 flex rounded-3xl p-4">
			<div>
				<span className="font-bold">{props.text}</span>
			</div>
		</div>
	);
}

const Button = {
	Action: ButtonAction,
	PillCircle: PillCircle,
	Pill: Pill,
};
export default Button;
