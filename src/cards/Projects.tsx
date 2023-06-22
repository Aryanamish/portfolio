import React from 'react';
import Cards2 from './Cards2';
import Data from '../Data';

function Projects(props: {setZoomed: Function}) {
	return (
		<div>
			<div className="flex gap-x-4 gap-y-10 flex-wrap justify-center">
				{/* <Cards2 /> */}
				{Data.projects.map((e, idx) => {
					return (
						<Cards2
							cardZoomed={props.setZoomed}
							key={e.title + String(idx)}
							number={String(idx + 1)}
							domain={e.domain}
							image={e.image}
							title={e.title}
							desc={e.desc}
							github={e.github}
							website={e.website}
							state={false}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default Projects;
