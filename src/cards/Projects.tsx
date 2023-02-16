import React from 'react';
import Card from './Card';
import Data from '../Data';

function Projects() {
	return (
		<div>
			<div className="flex gap-x-4 gap-y-10 flex-wrap justify-center">
				{Data.projects.map((e, idx) => {
					return (
						<Card
							key={e.title + String(idx)}
							number={String(idx + 1)}
							domain={e.domain}
							image={e.image}
							title={e.title}
							desc={e.desc}
							github={e.github}
							website={e.website}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default Projects;
