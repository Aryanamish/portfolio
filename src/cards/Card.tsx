import React, {useState} from 'react';
import {Icon} from '@iconify/react';
import Img from '../Components/IMG';
function Card(props: {
	number: string;
	domain: string;
	image: string;
	title: string;
	desc: React.ReactNode | string;
	github?: string;
	website?: string;
	cardZoomed: React.Dispatch<React.SetStateAction<boolean>>;
	state: boolean;
}) {
	const [showIcon, setShowIcon] = React.useState(false);
	const descRef = React.useRef<HTMLDivElement>(null);
	React.useEffect(() => {
		const textElement = descRef.current;
		function isEllipsisActive(e: HTMLDivElement) {
			const tolerance = 2; // In px. Depends on the font you are using
			return e.offsetWidth + tolerance < e.scrollWidth;
		}
		if (textElement) {
			console.log(isEllipsisActive(textElement));
			setShowIcon(!isEllipsisActive(textElement));
		}
	}, [props.desc]);
	const [mouseOver, setMouseOver] = useState(false);
	const [showMore, setShowMore] = useState(false);
	return (
		<div
			onMouseEnter={() => setMouseOver(true)}
			onMouseLeave={() => setMouseOver(false)}
			className="flex md:w-64 bg-skin-fill-highlight rounded-lg  transition-all backdrop-filter backdrop-blur-md">
			<div className="flex flex-col gap-3">
				<div className="p-4 pb-0">
					<div className="flex flex-col">
						<div>
							<span className="text-skin-highlight">{props.domain}</span>
						</div>
					</div>
					<div
						className={
							(mouseOver ? 'scale-105 duration-300  ' : ' ') +
							'bg-white flex justify-center items-center p-2 rounded-md transition-all h-50 '
						}>
						<Img src={props.image} alt="Logo" className="">
							<div className="w-full h-full flex justify-center items-center flex-col gap-4">
								<div className="animate-spin inline-block w-8 h-8 border-4 border-x-0 rounded-full border-fill"></div>
							</div>
						</Img>
					</div>
					<div className="flex flex-col gap-5">
						<div>
							<span className="text-2xl text-skin-secondary">{props.title}</span>
						</div>
					</div>
				</div>
				<div className="relative h-32 transition-all">
					<div className=" bg-skin-fill-highlight p-4 pt-0 rounded-md">
						<div className="flex flex-col ">
							<div
								ref={descRef}
								className={
									'text-sm text-skin-secondary font-extralight tracking-wider transition-all ' +
									(showMore
										? ' h-full'
										: 'line-clamp text-ellipsis overflow-hidden h-10 ')
								}>
								{props.desc}
							</div>
							<div className="flex justify-between">
								<div className="flex gap-3">
									{(() => {
										if (props.github) {
											return (
												<a
													className="w-9 h-9 mt-4"
													target="__blank"
													href={props.github}>
													<Icon
														icon="mdi:github"
														className="text-white w-full h-full hover:scale-125 transition-all hover:text-slate-300"
													/>
												</a>
											);
										}
									})()}
									{(() => {
										if (props.website) {
											return (
												<a
													className="w-9 h-9 mt-4"
													target="__blank"
													href={props.website}>
													<Icon
														icon="fluent-mdl2:website"
														className="text-white w-full h-full hover:scale-125 transition-all hover:text-slate-300"
													/>
												</a>
											);
										}
									})()}
								</div>
								<div
									className={
										'w-5 h-5 transition-all mt-5 text-secondary ' +
										(showMore ? 'rotate-180' : '')
									}
									onClick={() => setShowMore(!showMore)}>
									{showIcon ? (
										<Icon
											icon="ph:caret-double-down-bold"
											className="w-full h-full cursor-pointer"
										/>
									) : (
										<></>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Card;
