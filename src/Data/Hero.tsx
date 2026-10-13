import docker from '../assets/mask_svg/docker-wordmark.svg';
import cpp from '../assets/mask_svg/file-type-cpp2.svg';
import java from '../assets/mask_svg/java.svg';
import python from '../assets/mask_svg/python.svg';
import cloud from '../assets/mask_svg/baseline-cloud.svg';

const Hero = {
	first_name: 'Aryan',
	last_name: 'Amish',
	description: `System Development Engineer with 2.5+ years of experience building scalable
								distributed systems at Amazon and Zoho. I work with microservice architecture,
								event-driven systems, and serverless AWS (Lambda, DynamoDB, SQS/SNS, Bedrock),
								and build LLM-powered multi-agent systems with LangGraph and MCP. Currently at
								Amazon as a System Development Engineer; previously at Zoho, where I contributed
								to web publishing tools, performance-critical features, and encryption systems.`,
	email: 'aryanamish385+portfolio@gmail.com',
	// file name used when the resume is downloaded
	resume_name: 'Aryan_Amish_SDE_Amazon.pdf',
	// type_writer: ['Full Stack Developer', 'Dev Ops', 'Data Structure'],
	masks_svgs: [python, cpp, java, docker, cloud],
};

export default Hero;
