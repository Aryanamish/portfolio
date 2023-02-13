import React, {useEffect} from 'react';

import {Icon} from '@iconify/react';
import IMG from '../Components/IMG';

function Cert(props: {
	title: string;
	desc: string;
	link: string;
	image: string;
	next: Function;
	prev: Function;
	className?: string;
	animateClass?: string;
}) {
	useEffect(() => {
		const animate_class = 'animate__flipInX';
		document.querySelectorAll('.animate-title').forEach((e) => {
			e.classList.remove(animate_class);
			e.classList.add('opacity-0');
			setTimeout(() => {
				e.classList.remove('opacity-0');
				e.classList.add(animate_class);
			}, 100);
		});
	}, [props.title]);
	return (
		<div
			id={props.title}
			className={
				'flex bg-skin-fill-highlight items-center gap-10 rounded-lg flex-col-reverse lg:flex-row border-2 lg:mx-64 border-skin-fill-highlight-2 ' +
				props.className
			}>
			<div className="relative flex flex-col items-center lg:items-start max-w-2xl justify-center">
				<div className="m-8 ml-10 lg:h-96 h-52">
					<div
						className={
							props.animateClass +
							' animate__animated animate-title  pl-2 h-full flex flex-col items-start justify-center'
						}>
						<div className="mb-6">
							<span className="text-4xl text-skin-secondary font-extrabold">
								{props.title}
							</span>
						</div>
						<div className="">
							<span className="text-sm text-skin-secondary">
								{props.desc}
							</span>
						</div>
					</div>
					<div className="pt-10">{/* <Button.Action /> */}</div>
				</div>
				<div className="absolute flex justify-between items-end w-full pl-2">
					<div className="text-skin-secondary transition-all duration-300 cursor-pointer scale-110 w-8 h-8">
						<Icon
							onClick={() => {
								props.prev();
							}}
							icon="material-symbols:arrow-back-ios-new-rounded"
							className="w-full h-full hover:bg-white/50 rounded-full p-2"
						/>
					</div>

					<div className="text-skin-secondary transition-all duration-300 cursor-pointer scale-110 w-9 h-9">
						<Icon
							onClick={() => {
								props.next();
							}}
							icon="material-symbols:arrow-forward-ios-rounded"
							className="w-full h-full hover:bg-white/50 rounded-full p-2 "
						/>
					</div>
				</div>
			</div>
			<div className="hover:scale-125 transition-all bg-white p-1 m-8 rounded-md animate__animated animate-title ">
				<div className="lg:w-96 lg:h-96 flex justify-center items-center">
					<IMG src={props.image + ''} alt={props.title}>
						<div className="w-full h-full flex justify-center items-center flex-col gap-4">
							<div className="animate-spin inline-block w-8 h-8 border-4 border-x-0 rounded-full border-fill"></div>
						</div>
					</IMG>
				</div>
			</div>
		</div>
	);
}

export default Cert;
