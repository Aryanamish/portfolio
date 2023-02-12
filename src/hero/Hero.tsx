import React, {Component} from 'react';
import Button from '../Components/Button';
import heros from '../assets/heros.png';

class Hero extends Component {
	render() {
		return (
			<div className="h-full w-full">
				<div className="flex flex-col lg:flex-row">
					<div className="flex flex-col flex-1 items-center lg:items-end justify-center">
						<div>
							<span className="text-skin-highlight text-xl">
								Hello,
							</span>
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
							<span className="text-skin-secondary">
								Scroll Down to Know more about me
							</span>
						</div>
						<div>
							<Button.Action
								onClick={() => {
									let a =
										document.querySelector('[href="#project"]');
									if (a instanceof HTMLElement) {
										a.click();
									}
								}}
							/>
						</div>
					</div>
					<div className="flex-1 md:pl-20">
						<img src={heros} alt="Logo" />
					</div>
				</div>
			</div>
		);
	}
}

export default Hero;
