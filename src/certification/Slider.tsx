import {Icon} from '@iconify/react';
import React, {useState} from 'react';

const Slider = (props: {
	data: {
		label: string;
		desc: string;
		link: string;
		imagePath: string;
		provider: string;
	}[];
}) => {
	const data = props.data;
	const [currentState, setCurrentState] = useState<number>(0);

	const donext = () => {
		setCurrentState((currentState + 1) % data.length);
	};

	const doprevious = () => {
		let new_num = (currentState - 1) % data.length;
		if (new_num < 0) {
			new_num += data.length;
		}
		setCurrentState(new_num);
	};

	React.useEffect(() => {
		const timer = setInterval(() => {
			donext();
		}, 4000);
		return () => {
			clearInterval(timer);
		};
	});

	return (
		<div className="w-[400px] sm:w-[500px] flex flex-col bg-white gap-4">
			<div className="flex items-center justify-center w-full h-28 flex-col">
				<span className="font-bold text-xl">{data[currentState].label}</span>
				<span className="text-lg text-slate-600">
					{data[currentState].provider}
				</span>
			</div>
			<div className="max-h-96 overflow-hidden border border-1 border-slate-300">
				<div
					className="flex transition-transform duration-500 ease-in-out"
					style={{
						transform: `translateX(-${currentState * 100}%)`,
					}}>
					{data.map((item: any, index: number) => (
						<img
							key={index}
							src={item.imagePath}
							alt={item.label}
							className="w-full"
						/>
					))}
				</div>
			</div>
			<div className="flex flex-row justify-between mx-7 h-10">
				<div
					className="rounded-full hover:bg-slate-300 cursor-pointer p-1 h-8 w-8 flex justify-center items-center"
					onClick={doprevious}>
					<Icon icon="maki:arrow" hFlip={true} />
				</div>
				<div className="flex flex-row gap-1 mt-3">
					{data.map((d, index) => {
						if (index === currentState) {
							return (
								<div className="rounded-full w-2 h-2 bg-blue-800"></div>
							);
						} else {
							return (
								<div className="rounded-full w-2 h-2 bg-slate-400"></div>
							);
						}
					})}
				</div>
				<div
					className="rounded-full hover:bg-slate-300 cursor-pointer p-1 h-8 w-8 flex justify-center items-center"
					onClick={donext}>
					<Icon icon="maki:arrow" />
				</div>
			</div>
		</div>
	);
};

export default Slider;
