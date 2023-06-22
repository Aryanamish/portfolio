import React, {useEffect} from 'react';
//@ts-expect-error
import Typewriter from 'typewriter-effect/dist/core';
import Button from '../Components/Button';
import heros from '../assets/heros.png';
import IMG from '../Components/IMG';

function Hero() {
	useEffect(() => {
		new Typewriter('#intro', {
			strings: ['Data Structure', 'Machine Learning', 'Web Development'],
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
						<span className="text-6xl lg:text-9xl text-skin-secondary">
							Aryan
						</span>
					</div>
					<div>
						<span className="text-6xl lg:text-9xl text-skin-secondary">
							Amish
						</span>
					</div>
					<div>
						<span className="text-skin-secondary" id="intro">
							DSA, Machine Learning, Web Development
						</span>
					</div>
					<div className="mt-10">
						<Button.Action
							onClick={() => {
								let a = document.querySelector('[href="#project"]');
								if (a instanceof HTMLElement) {
									a.click();
								}
							}}
						/>
					</div>
				</div>
				<div className="justify-center items-center  hidden lg:flex pr-10">
					<IMG
						src={heros}
						alt="Logo"
						className="lg:w-[577px] lg:h-[600px] h-96 w-96 lg-flex"
						loading_text="logo.png..."
					/>
					{/* <img src={heros} alt="Logo" /> */}
				</div>
			</div>
		</div>
	);
}

export default Hero;
