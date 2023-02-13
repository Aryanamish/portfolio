import React, {useState} from 'react';
import {Icon} from '@iconify/react';
function Card(props: {
	number: String;
	domain: string;
	image: string;
	title: string;
	desc: any;
	onClick?: Function;
	github?: string;
	website?: string;
}) {
	const [mouseOver, setMouseOver] = useState(false);
	return (
		<div
			onMouseEnter={() => setMouseOver(true)}
			onMouseLeave={() => setMouseOver(false)}
			className="flex w-64 bg-skin-fill-highlight p-4 rounded-md  transition-all">
			<div className="flex flex-col gap-3">
				<div className="flex flex-col">
					<div>
						<span className="text-skin-highlight">{props.domain}</span>
					</div>
				</div>
				<div
					className={
						(mouseOver ? 'scale-105 duration-300 ' : ' ') +
						'bg-white flex justify-center items-center p-2 rounded-md transition-all'
					}>
					<img src={props.image} alt="project" />
				</div>
				<div className="flex flex-col">
					<div>
						<span className="text-2xl text-skin-secondary">
							{props.title}
						</span>
					</div>
					<div>
						<div className="text-xs text-skin-secondary ">
							{props.desc}
						</div>
					</div>
				</div>
				{/* <div className="relative pt-4">
					<div className="absolute bg-skin-fill rounded-md p-1">
						<Button.Action
							mouseOver={mouseOver}
							onClick={props.onClick}
						/>
					</div>
				</div> */}
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
			</div>
		</div>
	);
}

export default Card;
