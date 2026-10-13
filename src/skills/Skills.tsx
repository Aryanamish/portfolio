import Sphere from './Sphere';
import ExtraSkills from './ExtraSkills';
import Data from '../Data/Data';

function Skills() {
	return (
		<>
			<div className="flex flex-col gap-6 lg:gap-8">
				<Sphere items={Data.skills?.sphere || []} />

				{Data.skills?.extra_skills?.map((e, idx) => {
					if (e.data.length > 0)
						return (
							<ExtraSkills key={e.text + String(idx)} text={e.text} icons={e.data} />
						);
					else return <></>;
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
