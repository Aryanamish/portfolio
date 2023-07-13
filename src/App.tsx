import Projects from './cards/Projects';
import Certificate from './certification/Certifications';
import ScrollAnimate from './Components/ScrollAnimate';
import SectionTitle from './Components/SectionTitle';
import Contact from './contact/Contact';
import Hero from './hero/Hero';
import NavBar from './navbar/NavBar';
import Skills from './skills/Skills';
import Socials from './socials/Socials';
import React from 'react';

function App() {
	const [projectZoomed, setProjectZoomed] = React.useState(false);
	return (
		<>
			<NavBar />
			<div className="flex justify-center items-center w-full h-full bg-skin-fill pt-32">
				<div className="bg-skin-fill container">
					<div className="scroll-snap-container px-2 flex sm:gap-20 gap-10 flex-col overflow-y-auto relative">
						<div className="flex flex-col gap-20 lg:gap-5">
							<Hero></Hero>
						</div>
						<div id="project" className="pt-10">
							<ScrollAnimate
								disabled={projectZoomed}
								className={'transition-all animation-duration-300'}
								toggleClass="opacity-0"
								animateClass="animate__fadeInRight">
								<SectionTitle>Projects</SectionTitle>
								<Projects setZoomed={setProjectZoomed} />
							</ScrollAnimate>
							h
						</div>
						<div id="cert" className="pt-10">
							<ScrollAnimate
								className="transition-all animation-duration-300"
								toggleClass="opacity-0"
								animateClass="animate__fadeInLeft">
								<SectionTitle>Certificates</SectionTitle>
								<Certificate />
							</ScrollAnimate>
						</div>
						{/* TODO skills is overflow on iphone (small screens) */}
						<div id="skill" className="pt-10">
							<ScrollAnimate
								className="transition-all animation-duration-300"
								toggleClass="opacity-0"
								animateClass="animate__fadeInRight">
								<SectionTitle>Skills</SectionTitle>
								<Skills />
							</ScrollAnimate>
						</div>
						<div id="contact" className="pt-20">
							<ScrollAnimate
								className="transition-all animation-duration-300"
								toggleClass="opacity-0"
								animateClass="animate__fadeInLeft">
								<SectionTitle>Contact Me</SectionTitle>
								<Contact />
							</ScrollAnimate>
						</div>
						<div className="">
							<Socials />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
