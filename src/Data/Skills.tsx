const Skills = {
	// remove this to remove the Sphere
	sphere: [
		'Python',
		'HTML5',
		'CSS3',
		'Tailwind CSS',
		'Javascript',
		'ReactJS',
		'Django',
		'Docker',
		'Kubernetes',
		'Cloud Computing',
		'SolidJs',
	],

	// Extra Skills that you want to mention
	// use iconify icon name or use the actual svg
	extra_skills: [
		// can have multiple section
		{
			text: 'I can code in',
			data: [
				// {
				// 	name: 'Custom name',
				// 	icon: <svg></svg>>,
				// },
				{
					name: 'Python',
					icon: 'vscode-icons:file-type-python',
				},
				{
					name: 'C++',
					icon: 'vscode-icons:file-type-cpp3',
				},
				{
					name: 'JavaScript',
					icon: 'skill-icons:javascript',
				},
				{
					name: 'Java',
					icon: 'skill-icons:java-dark',
				},
			],
		},
		{
			text: 'Platform I am familiar with',
			data: [
				{
					name: 'Git',
					icon: 'mdi:git',
				},
				{
					name: 'Docker',
					icon: 'skill-icons:docker',
				},
				{
					name: 'Kubernetes',
					icon: 'logos:kubernetes',
				},
				{
					name: 'GCP',
					icon: 'skill-icons:gcp-light',
				},
				{
					name: 'AWS',
					icon: 'logos:aws',
				},
				{
					name: 'Netlify',
					icon: 'skill-icons:netlify-light',
				},
			],
		},
	],
};
export default Skills;
