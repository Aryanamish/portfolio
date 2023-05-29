import React from 'react';
import Sphere from './Sphere';
import ExtraSkills from './ExtraSkills';
import Data from '../Data';

function Skills() {
	return (
		<>
			<div className="flex flex-col gap-10">
				<Sphere />

				{Data.extra_skills.map((e) => {
					let d = [];
					for (let i = 0; i < e.data.length; i++) {
						d.push(e.data[i].icon);
					}
					return <ExtraSkills key={e.text} text={e.text} icons={d} />;
				})}
			</div>
		</>
	);
}

export default Skills;

/* <div className="flex justify-center items-center w-16 h-16">
						<Icon
							icon="vscode-icons:file-type-python"
							className="w-full h-full"
						/>
					</div>
					<div className="flex justify-center items-center w-16 h-16">
						<Icon
							icon="vscode-icons:file-type-cpp3"
							className="w-full h-full"
						/>
					</div>
					
					<div className="flex justify-center items-center w-16 h-16">
						<Icon
							icon="skill-icons:javascript"
							className="w-full h-full"
						/>
					</div>
					<div className="flex justify-center items-center w-16 h-16">
						<Icon
							icon="skill-icons:java-dark"
							className="w-full h-full"
						/>
					</div> */
