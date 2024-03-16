import Sphere from './Sphere';
import ExtraSkills from './ExtraSkills';
import Data from '../Data/Data';

function Skills() {
	return (
		<>
			<div className="flex flex-col gap-10">
				<Sphere items={Data.skills?.sphere || []} />

				{Data.skills?.extra_skills?.map((e, idx) => {
					const d = [];
					for (let i = 0; i < e.data.length; i++) {
						d.push(e.data[i].icon);
					}
					if (d.length > 0)
						return (
							<ExtraSkills key={e.text + String(idx)} text={e.text} icons={d} />
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
