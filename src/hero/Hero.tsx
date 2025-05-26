import { useEffect } from 'react';
//@ts-expect-error this library dosent have typescript
import Typewriter from 'typewriter-effect/dist/core';
import Button from '../component/Button';
import HeroImage from './HeroImage';
import Data from '../Data/Data';
import Resume from '../resume/Resume';

function Hero() {
	useEffect(() => {
		if (Data.hero.type_writer)
			new Typewriter('#intro', {
				strings: Data.hero.type_writer,
				autoStart: true,
				delay: 50,
				deleteSpeed: 50,
				loop: true,
			});
	});
	return (
		<div className="h-full w-full">
			<div className="flex flex-col lg:flex-row gap-20">
				<div className="flex flex-col flex-1 items-center lg:items-center">
					<div>
						<h1 className="text-skin-highlight text-xl">I'm ,</h1>
					</div>
					<div>
						<h1 className="text-6xl lg:text-9xl text-skin-secondary">
							{Data.hero.first_name}
						</h1>
					</div>
					<div>
						<h1 className="text-6xl lg:text-9xl text-skin-secondary">
							{Data.hero.last_name}
						</h1>
					</div>
					<div>
						<h2 className="text-lg lg:text-md text-skin-secondary">
							{Data.hero.description}
						</h2>
					</div>
					<div>
						<h3 className="text-skin-secondary" id="intro">
							{Data.hero.type_writer?.join(', ')}
						</h3>
					</div>
					<div className="mt-10">
						<Resume>

							<Button.Action
								text="Resume"

							/>
						</Resume>
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
