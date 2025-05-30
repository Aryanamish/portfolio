import Projects from './cards/Projects';
import Certificate from './certification/Certifications';
import ScrollAnimate from './components/ScrollAnimate';
import SectionTitle from './components/SectionTitle';
import Contact from './contact/Contact';
import Hero from './hero/Hero';
import NavBar from './navbar/NavBar';
import Skills from './skills/Skills';
import Socials from './socials/Socials';
import React, { useEffect } from 'react';
import Data from './Data/Data';
import cv from './assets/cv.pdf'
function App() {
	const [projectZoomed, setProjectZoomed] = React.useState(false);
	useEffect(()=>{
		const hash = window.location.hash.slice(1)
		if(hash !== ''){
			const t = setTimeout(()=>{
				(document.querySelector(`[href='${window.location.hash}'`) as HTMLElement)?.click()
			}, 100)
			return ()=>clearTimeout(t)
			
		}
	}, [])
	return (
		<>
			<NavBar />
			<link rel="prefetch" href={cv} as="document" type="application/pdf" />

			<div className="flex justify-center items-center w-full h-full bg-skin-fill pt-32">
				<div className="bg-skin-fill container">
					<div className="scroll-snap-container px-2 flex sm:gap-20 gap-10 flex-col overflow-y-auto relative">
						<div className="flex flex-col gap-20 lg:gap-5" id="hero">
							<Hero></Hero>
						</div>
						{Data.checkSection('projects') && (
							<div id="projects" className="pt-10">
								<ScrollAnimate
									disabled={projectZoomed}
									className={'transition-all animation-duration-300'}
									toggleClass="opacity-0"
									animateClass="animate__fadeInRight">
									<SectionTitle>Projects</SectionTitle>
									<Projects setZoomed={setProjectZoomed} />
								</ScrollAnimate>
							</div>
						)}
						{Data.checkSection('certificates') && (
							<div id="certificates" className="pt-10">
								<ScrollAnimate
									className="transition-all animation-duration-300"
									toggleClass="opacity-0"
									animateClass="animate__fadeInLeft">
									<SectionTitle>Certificates</SectionTitle>
									<Certificate />
								</ScrollAnimate>
							</div>
						)}
						{/* TODO skills is overflow on iphone (small screens) */}
						{Data.checkSection('skills') && (
							<div id="skills" className="pt-10">
								<ScrollAnimate
									className="transition-all animation-duration-300"
									toggleClass="opacity-0"
									animateClass="animate__fadeInRight">
									<SectionTitle>Skills</SectionTitle>
									<Skills />
								</ScrollAnimate>
							</div>
						)}

						<div id="contact" className="pt-20">
							<ScrollAnimate
								className="transition-all animation-duration-300"
								toggleClass="opacity-0"
								animateClass="animate__fadeInLeft">
								<SectionTitle>Contact Me</SectionTitle>
								<Contact />
							</ScrollAnimate>
						</div>
						{Data.checkSection('socials') && (
							<div className="" id="socials">
								<Socials />
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
