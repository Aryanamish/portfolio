// Images
import portfolio from '../assets/projects/portfolio.webp';
import foob_blog from '../assets/projects/food_blog.webp';
import steganography from '../assets/projects/steganography.webp';
import vorkinsta from '../assets/projects/vorkinsta_chat.webp';
import work_hour_tracker from '../assets/projects/attendance_tracking_system.webp';
import events_sathyabama from '../assets/projects/event-sathyabama.webp';
import coupontouch from '../assets/projects/coupon_touch.png';
import trippinai from '../assets/projects/trippinai.png';

const Projects = [
	{
		domain: 'Web Development',
		image: events_sathyabama,
		title: 'Event@Sathyabama',
		website: 'https://events.aryanamish.in',
		github: 'https://github.com/Events-Sathyabama/Events-Sathyabama',
		desc: (
			<>
				A college-specific event management system built with <b>Django</b>,{' '}
				<b>MySQL</b> and <b>JWT</b> for <b>17000+ students</b>, 1000+ faculty and
				administrators, with real-time tracking, streamlined event approvals and
				automated notifications. SEO-focused SSR with <b>Next.js</b> gave{' '}
				<b>50% faster load times</b>, 70% quicker event announcements and 60% more
				efficient approvals, increasing event participation by 45% across campuses.
				Approval mechanisms and single-click applications led to a{' '}
				<b>150% surge in application volume</b>.
				<br />
				<br />
				<b>Tech:</b> NextJS, TypeScript, Material UI, Tailwind CSS, REST APIs, JWT,
				Django, MySQL
			</>
		),
	},
	{
		domain: 'Artificial Intelligence',
		image: trippinai,
		title: 'TrippinAI',
		desc: (
			<>
				A <b>multi-agent conversational travel planner</b> with 5+ specialized
				agents that turns open-ended user preferences into personalized
				recommendations. It ranks options through a{' '}
				<b>7-stage non-compensatory pipeline</b> with a 5-level preference intensity
				scale and hard-constraint gating, so a strong score on one attribute can't
				hide a poor score on something the user cares about. A wrapper on{' '}
				<b>LangGraph</b> turns its rigid workflow into a dynamic multi-agent system
				with cross-agent communication,{' '}
				<b>cutting redundant pipeline runs by 60%</b> on follow-up queries.
				Structured trip-state memory replaces raw chat history to reduce
				hallucination, keeping context accurate past <b>30+ conversation turns</b>.
				<br />
				<br />
				<b>Tech:</b> NextJS, Python, LangGraph, FastAPI, PostgreSQL, Redis, Docker,
				Kubernetes
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
		image: coupontouch,
		title: 'CouponTouch',
		website: 'https://coupontouch.aryanamish.in/albayan/',
		github: 'https://github.com/Coupon-Touch/CouponTouch',
		desc: <>
		A full-stack coupon scratching system designed for digital marketing campaigns. 
		Users can scan a QR code, verify via phone number, complete payments, 
		and scratch a virtual coupon to reveal prizes. 
		The platform includes an admin panel for managing prizes, setting bias rules, 
		and tracking winners. 
		Built with <b>ReactJS</b>, <b>GraphQL</b>, <b>Node.js</b>, and <b>MongoDB</b>, and deployed using <b>Docker</b> on <b>Google Cloud Run</b>.
		</>
	},
	{
		domain: 'Web Development',
		image: portfolio,
		title: 'Personal Portfolio',
		github: 'https://github.com/Aryanamish/portfolio',
		desc: 'HTML, TailWind, JavaScript, EmailJs, ReactJs.',
	},
];

export default Projects;
