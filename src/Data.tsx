import portfolio from './assets/projects/portfolio.webp';
import foob_blog from './assets/projects/food_blog.webp';
import steganography from './assets/projects/steganography.webp';
import vorkinsta from './assets/projects/vorkinsta_chat.webp';
import work_hour_tracker from './assets/projects/attendance_tracking_system.webp';
import events_sathyabama from './assets/projects/event-sathyabama.webp';

import codingo from './assets/certificates/codingo.webp';
import digital_leader from './assets/certificates/cloud_digital_leader_nov_2025.webp';
import dev_wiz from './assets/certificates/dev_wiz.webp';
import nptel from './assets/certificates/programming_dsa_algo_nptel.webp';

// Mask svgs
import docker from './assets/mask_svg/docker-wordmark.svg';
import cpp from './assets/mask_svg/file-type-cpp2.svg';
import java from './assets/mask_svg/java.svg';
import python from './assets/mask_svg/python.svg';
import cloud from './assets/mask_svg/baseline-cloud.svg';

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
	type_writer: ['Full Stack Developer', 'Dev Ops', 'Data Structure'],
	masks_svgs: [python, cpp, java, docker, cloud],
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
				{
					name: 'AWS',
					icon: 'skill-icons:netlify-light',
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
			links: 'https://leetcode.com/aryanamish/',
		},
		{
			icon: 'simple-icons:geeksforgeeks',
			links: 'https://auth.geeksforgeeks.org/user/aryanamish/practice/',
		},
		{
			icon: 'mdi:email-outline',
			links: 'mailto:aryanamish2002+portfolio@gmail.com',
		},
	],
	projects: [
		{
			domain: 'Web Development',
			image: events_sathyabama,
			title: 'Event@Sathyabama',
			website: 'https://events.aryanamish.in',
			github: 'https://github.com/Events-Sathyabama/Events-Sathyabama',
			desc: (
				<>
					Developed a streamlined event management system for a college environment
					using <b>Next.js</b> for SEO and load time optimization. Backend powered by
					Django and Django Rest Framework, featuring secure <b>JWT-based login</b>.
					Revolutionized approval processes,
					<b> cutting approval times by 50%</b>. Implemented email notifications for
					effective communication and a one-click event application, resulting in a{' '}
					<b>40% increase in application volume</b>.
				</>
			),
		},
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
			title: 'Vorkinsta',
			desc: (
				<>
					I was engaged as a Full-Stack Developer to enhance the user experience of
					an Upwork-like website by adding a real-time chat feature. I leveraged{' '}
					<u>
						<b>Django</b>
					</u>{' '}
					and{' '}
					<u>
						<b>WebSocket</b>
					</u>{' '}
					to build the chat feature, which allowed users to communicate with each
					other in real-time. I was also responsible for designing the database
					schema to store chat messages and other related data.,
				</>
			),
		},
		{
			domain: 'Web Development',
			image: work_hour_tracker,
			title: 'Work Hour Tracker',
			desc: (
				<>
					It is a web-based platform designed to streamline the process of recording,
					tracking, and approving employee working hours. The main goal of this
					project is to create a simple and efficient system that makes it easy for
					employees to log their hours worked and for managers to approve or deny
					these hours.,
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
			label: 'Google Cloud Computing',
			desc: 'The Google Cloud Digital Leader Certificate is a professional certification program designed to demonstrate proficiency in Google Cloud technologies and solutions. It covers a range of topics including Google Cloud architecture, data and storage, security, application development and deployment, and machine learning.',
			link: 'https://www.credential.net/56ec8bbe-a535-4aae-b6fc-603fac685ab6',
			imagePath: digital_leader,
			provider: 'Google Cloud',
		},
		{
			label: 'Dev Wiz Hackathon',
			desc: 'Won second price in Dev Wiz Hackathon, which was conducted by Sathyabama Institute of Science and Technology.',
			link: 'https://certificate.givemycertificate.com/c/001a1d08-e863-4de6-9f41-b9e5774a532e',
			imagePath: dev_wiz,
			provider: 'Sathyabama Institute of science and Technology',
		},
		{
			label: 'Codingo',
			desc: 'Coding Contest Held in Sathyabama Institute of Technology, the contest was based on DSA questions.',
			link: 'https://drive.google.com/file/d/12z7n6cZeMlPuK6ueGW5fyKEDhEgBqLBp/view?usp=sharing',
			imagePath: codingo,
			provider: 'Sathyabama Institute of science and Technology',
		},
		{
			label: 'NPTEL - Datastructure and Algorithm',
			desc: 'This course covered essential topics such as algorithms, data structures, and programming concepts, and provided a solid foundation in developing efficient and optimized solutions.',
			link: 'https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL22CS70S2307126109013421',
			imagePath: nptel,
			provider: 'NPTEL',
		},
	],
};
export default Data;
