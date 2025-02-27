import Img from '../Components/IMG';
import heros from '../assets/potrait.webp';
import Data from '../Data/Data';
import {useEffect, useState} from 'react';

export default function HeroImage() {
	const svgs = Data.hero.masks_svgs;
	console.log(svgs)
	const [svgIndex, setSvgIndex] = useState(0);

	useEffect(() => {
		if (!svgs) return;
		const intervalId = setInterval(() => {
			setSvgIndex((prevIndex) => (prevIndex + 1) % svgs.length);
		}, 4000);

		return () => clearInterval(intervalId);
	});
	if (!svgs) return;
	return (
		<>
			<div className={`flex relative w-full h-full  justify-center items-center `}>
				<div className="">
					{svgs.map((svg, idx) => {
						return (
							<Img
								key={idx}
								src={heros}
								alt="Hero Image"
								className="rounded-lg bg-contain bg-no-repeat h-[500px] w-[500px] transition-all duration-500 ease-in-out absolute top-0 left-0"
								style={{
									backgroundBlendMode: 'multiply',
									mask: `url(${svg}) center / cover`,
									opacity: idx == svgIndex ? 1 : 0,
								}}
							/>
						);
					})}
				</div>
			</div>
		</>
	);
}
