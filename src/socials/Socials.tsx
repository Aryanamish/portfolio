import {Icon} from '@iconify/react';
import React, {useState} from 'react';
import Layout from './Layout';
import Data from '../Data';

function Socials() {
	let mouse_over = [];
	for (let i = 0; i < Data.socials.length; i++) {
		mouse_over.push(false);
	}

	const [isMouseOver, setIsMouseOver] = useState(mouse_over);

	return (
		<Layout>
			<div className="flex flex-col lg:flex-row px-10 h-full w-full">
				<div className="justify-center items-center flex flex-grow lg:flex-grow-0">
					<span className="text-3xl font-bold text-skin-secondary lg:text-4xl w-64">
						You Can Find Me Here:
					</span>
				</div>
				<div className="flex justify-center items-center gap-3 flex-grow">
					{Data.socials.map((e, idx) => {
						return (
							<a
								key={e.links + String(idx)}
								onMouseEnter={(e) => {
									let mouse_over = [];
									for (let i = 0; i < Data.socials.length; i++) {
										mouse_over.push(false);
									}
									mouse_over[idx] = true;
									setIsMouseOver(mouse_over);
								}}
								onMouseLeave={(e) => {
									let mouse_over = [];
									for (let i = 0; i < Data.socials.length; i++) {
										mouse_over.push(false);
									}
									setIsMouseOver(mouse_over);
								}}
								href={e.links}
								target="_blank"
								rel="noreferrer"
								className="hover:scale-125 transition-all duration-500">
								<div className="w-10 h-10 text-secondary">
									<Icon
										icon={e.icon}
										className={
											'transition-all w-full h-full' +
											' ' +
											(() => {
												return isMouseOver[idx] === true
													? 'animate-bounce'
													: '';
											})()
										}
									/>
								</div>
							</a>
						);
					})}
				</div>
			</div>
		</Layout>
	);
}

export default Socials;