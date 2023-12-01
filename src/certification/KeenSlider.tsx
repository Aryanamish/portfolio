import React, {useState} from 'react';
import {useKeenSlider} from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import {Icon} from '@iconify/react';
import IMG from '../Components/IMG';

const KeenSlider = (props: {
	data: {
		label: string;
		desc: string;
		link?: string;
		imagePath: string;
		provider?: string;
	}[];
}) => {
	const data = props.data;
	const [currentState, setCurrentState] = useState<number>(0);
	const [sliderRef, instanceRef] = useKeenSlider(
		{
			initial: 0,
			slideChanged(slider) {
				setCurrentState(slider.track.details.rel);
			},
		},
		[]
	);
	React.useEffect(() => {
		const timer = setInterval(() => {
			instanceRef.current?.moveToIdx((currentState + 1) % data.length);
		}, 4000);
		return () => {
			clearInterval(timer);
		};
	}, [currentState, data.length, instanceRef]);
	const doprevious = (e: React.MouseEvent<HTMLDivElement>) => {
		e.stopPropagation();
		instanceRef.current?.prev();
	};
	const donext = (e: React.MouseEvent<HTMLDivElement>) => {
		e.stopPropagation();
		instanceRef.current?.next();
	};
	const goto = (idx: number) => {
		setCurrentState(idx);
		instanceRef.current?.moveToIdx(idx);
	};
	return (
		<div className="w-[400px] sm:w-[500px] flex flex-col bg-white gap-4">
			<div ref={sliderRef} className="bg-white keen-slider">
				{data.map((item: any, index: number) => (
					<div
						className="keen-slider__slide w-full"
						key={index + item.label}>
						<div className="flex items-center justify-center w-full h-28 flex-col">
							<span className="font-bold text-xl">{item.label}</span>
							{item.provider && (
								<span className="text-lg text-slate-600">
									{item.provider}
								</span>
							)}
						</div>
						<div className="max-h-96 overflow-hidden border border-1 border-slate-300">
							<div className="flex transition-transform duration-500 ease-in-out">
								{item.link ? (
									<a
										href={item.link}
										target="_blank"
										rel="noopener noreferrer">
										<IMG
											key={index}
											src={item.imagePath}
											alt={item.label}
											className="w-full h-full"
										/>
									</a>
								) : (
									<IMG
										key={index}
										src={item.imagePath}
										alt={item.label}
										className="w-full h-full"
									/>
								)}
							</div>
						</div>
					</div>
				))}
			</div>
			<div className="flex flex-row justify-between mx-7 h-10">
				<div
					className="rounded-full hover:bg-slate-300 cursor-pointer p-1 h-8 w-8 flex justify-center items-center"
					onClick={doprevious}>
					<Icon
						icon="maki:arrow"
						hFlip={true}
						className={currentState === 0 ? 'text-slate-400' : ''}
					/>
				</div>
				<div className="flex flex-row gap-1 mt-3">
					{data.map((d, index) => {
						if (index === currentState) {
							return (
								<div
									key={index + d.label}
									className="rounded-full w-2 h-2 bg-blue-800 cursor-pointer"></div>
							);
						} else {
							return (
								<div
									key={index + d.label}
									className="rounded-full w-2 h-2 bg-slate-400 cursor-pointer"
									onClick={() => goto(index)}></div>
							);
						}
					})}
				</div>
				<div
					className={`rounded-full hover:bg-slate-300 cursor-pointer p-1 h-8 w-8 flex justify-center items-center`}
					onClick={donext}>
					<Icon
						icon="maki:arrow"
						className={
							currentState === data.length - 1 ? 'text-slate-400' : ''
						}
					/>
				</div>
			</div>
		</div>
	);
};

export default KeenSlider;
