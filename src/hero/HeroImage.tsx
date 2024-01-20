import Img from '../Components/IMG';
import heros from '../assets/potrait.webp';
import Data from '../Data';
import {useEffect, useState} from 'react';

export default function HeroImage() {
	const svgs = Data.masks_svgs;
	const [svgIndex, setSvgIndex] = useState(0);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setSvgIndex((prevIndex) => (prevIndex + 1) % svgs.length);
		}, 4000);

		return () => clearInterval(intervalId);
	});

	const imageStyle = {
		backgroundBlendMode: 'multiply',
		mask: `url(${svgs[svgIndex]}) center / cover`,
	};
	return (
		<>
			<div className={`flex   justify-center items-center`}>
				<div>
					<Img
						src={heros}
						alt="Hero Image"
						className="rounded-lg bg-contain bg-no-repeat h-[500px] w-[500px] transition-all"
						style={imageStyle}
					/>
				</div>
			</div>
		</>
	);
}
