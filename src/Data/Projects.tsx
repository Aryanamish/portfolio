// Images
import portfolio from '../assets/projects/portfolio.webp';
import foob_blog from '../assets/projects/food_blog.webp';
import steganography from '../assets/projects/steganography.webp';
import vorkinsta from '../assets/projects/vorkinsta_chat.webp';
import work_hour_tracker from '../assets/projects/attendance_tracking_system.webp';
import events_sathyabama from '../assets/projects/event-sathyabama.webp';

const Projects = [
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
				I was engaged as a Full-Stack Developer to enhance the user experience of an
				Upwork-like website by adding a real-time chat feature. I leveraged{' '}
				<u>
					<b>Django</b>
				</u>{' '}
				and{' '}
				<u>
					<b>WebSocket</b>
				</u>{' '}
				to build the chat feature, which allowed users to communicate with each other
				in real-time. I was also responsible for designing the database schema to
				store chat messages and other related data.,
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
				tracking, and approving employee working hours. The main goal of this project
				is to create a simple and efficient system that makes it easy for employees
				to log their hours worked and for managers to approve or deny these hours.,
			</>
		),
	},
	{
		domain: 'Web Development',
		image: portfolio,
		title: 'Personal Portfolio',
		desc: 'HTML, TailWind, JavaScript, EmailJs, ReactJs.',
	},
];

export default Projects;
