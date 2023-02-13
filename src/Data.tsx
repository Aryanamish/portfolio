import portfolio from './assets/projects/portfolio.png';
import foob_blog from './assets/projects/food_blog.png';
import steganography from './assets/projects/steganography.png';
import vorkinsta from './assets/projects/vorkinsta_chat.png';
import work_hour_tracker from './assets/projects/attendance_tracking_system.png';

import codingo from './assets/certificates/codingo.png';
import digital_leader from './assets/certificates/cloud_digital_leader_nov_2025.png';
import dev_wiz from './assets/certificates/dev_wiz.png';
import nptel from './assets/certificates/programming_dsa_algo_nptel.jpg';

const Data = {
	skills: [
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
	extra_skills: [
		{
			text: 'I can code in',
			data: [
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
			],
		},
	],
	socials: [
		{
			icon: 'bi:linkedin',
			links: 'https://www.linkedin.com/in/aryan-amish/',
		},
		{
			icon: 'academicons:stackoverflow-square',
			links: 'https://stackoverflow.com/users/9817070/wetler',
		},
		{
			icon: 'carbon:logo-github',
			links: 'https://github.com/Aryanamish',
		},
		{
			icon: 'simple-icons:leetcode',
			links: 'https://leetcode.com/aryanammish/',
		},
		{
			icon: 'simple-icons:geeksforgeeks',
			links: 'https://auth.geeksforgeeks.org/user/aryanamish/practice/',
		},
	],
	projects: [
		{
			domain: 'Web Development',
			image: foob_blog,
			title: 'Food Blog',
			github: 'https://github.com/Aryanamish/dev_wiz_hackthon',
			desc: 'A fully functional food blog website built with Django, HTML, CSS, BootStrap, MySQL, featuring an intuitive and user-friendly admin panel for managing content and website settings. Enjoy delicious recipes, cooking tips and articles with a seamless browsing experience.',
		},

		{
			domain: 'Computer Security',
			image: steganography,
			title: 'Steganography',
			github: 'https://github.com/Aryanamish/Steganography',
			website: 'https://aryanamish.github.io/Steganography/',
			desc: 'A JavaScript Implementation of Steganography using HTML, JavaScript, TailWind. It hides a secret message inside an image file which later can be decoded and seen.',
		},
		{
			domain: 'Web Development',
			website: 'https://www.vorkinsta.com/',
			image: vorkinsta,
			title: 'Vorkinsta (Upwork-like Website)',
			desc: (
				<>
					I was engaged as a Full-Stack Developer to enhance the user
					experience of an Upwork-like website by adding a real-time chat
					feature. I leveraged{' '}
					<u>
						<b>Django</b>
					</u>{' '}
					and{' '}
					<u>
						<b>WebSocket</b>
					</u>{' '}
					to build the chat feature, which allowed users to communicate
					with each other in real-time. I was also responsible for
					designing the database schema to store chat messages and other
					related data.,
				</>
			),
		},
		{
			domain: 'Web Development',
			image: work_hour_tracker,
			title: 'Work Hour Tracker',
			desc: (
				<>
					It is a web-based platform designed to streamline the process of
					recording, tracking, and approving employee working hours. The
					main goal of this project is to create a simple and efficient
					system that makes it easy for employees to log their hours worked
					and for managers to approve or deny these hours.,
				</>
			),
		},
		{
			domain: 'Web Development',
			image: portfolio,
			title: 'Personal Portfolio',
			desc: 'HTML, TailWind, JavaScript, EmailJs, ReactJs.',
		},
	],

	certificates: [
		{
			title: 'Google Cloud Computing',
			desc: 'The Google Cloud Digital Leader Certificate is a professional certification program designed to demonstrate proficiency in Google Cloud technologies and solutions. It covers a range of topics including Google Cloud architecture, data and storage, security, application development and deployment, and machine learning.',
			link: 'https://link',
			image: digital_leader,
		},
		{
			title: 'Dev Wiz Hackathon',
			desc: 'Won second price in Dev Wiz Hackathon, which was conducted by Sathyabama Institute of Science and Technology.',
			link: 'https://link',
			image: dev_wiz,
		},
		{
			title: 'Codingo',
			desc: 'Coding Contest Held in Sathyabama Institute of Technology, the contest was based on DSA questions.',
			link: '',
			image: codingo,
		},
		{
			title: 'NPTEL - Datastructure and Algorithm',
			desc: 'This course covered essential topics such as algorithms, data structures, and programming concepts, and provided a solid foundation in developing efficient and optimized solutions.',
			link: 'https://link',
			image: nptel,
		},
	],
};
export default Data;
