import {useEffect} from 'react';
//@ts-expect-error this library dosent have typescript
import Typewriter from 'typewriter-effect/dist/core';
import Button from '../Components/Button';
import HeroImage from './HeroImage';
import Data from '../Data';

function Hero() {
	useEffect(() => {
		new Typewriter('#intro', {
			strings: Data.type_writer,
			autoStart: true,
			delay: 50,
			deleteSpeed: 50,
			loop: true,
		});
	});
	return (
		<div className="h-full w-full">
			<div className="flex flex-col lg:flex-row gap-20">
				<div className="flex flex-col flex-1 items-center lg:items-end justify-center">
					<div>
						<span className="text-skin-highlight text-xl">I'm ,</span>
					</div>
					<div>
						<span className="text-6xl lg:text-9xl text-skin-secondary">{Data.name.first_name}</span>
					</div>
					<div>
						<span className="text-6xl lg:text-9xl text-skin-secondary">{Data.name.last_name}</span>
					</div>
					<div>
						<span className="text-skin-secondary" id="intro">
							DSA, Machine Learning, Web Development
						</span>
					</div>
					<div className="mt-10">
						<Button.Action
							onClick={() => {
								const a = document.querySelector('[href="#project"]');
								if (a instanceof HTMLElement) {
									a.click();
								}
							}}
						/>
					</div>
				</div>
				<div className="justify-center flex-1 items-center  hidden lg:flex pr-10">
					<HeroImage />
				</div>
			</div>
		</div>
	);
}

export default Hero;
