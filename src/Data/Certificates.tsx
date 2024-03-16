// Certificates
import codingo from '../assets/certificates/codingo.webp';
import digital_leader from '../assets/certificates/cloud_digital_leader_nov_2025.webp';
import dev_wiz from '../assets/certificates/dev_wiz.webp';
import nptel from '../assets/certificates/programming_dsa_algo_nptel.webp';

const Certificates = [
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
];

export default Certificates;
