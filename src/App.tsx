import Projects from './cards/Projects';
import Certificate from './certification/Certifications';
import ScrollAnimate from './Components/ScrollAnimate';
import Hero from './hero/Hero';
import NavBar from './navbar/NavBar';
import Skills from './skills/Skills';
import Socials from './socials/Socials';

function App() {
	return (
		<>
			<div className="flex justify-center items-center w-full h-full bg-fill">
				<div className="bg-skin-fill container">
					<div className="scroll-snap-container px-2 flex gap-28 flex-col overflow-y-auto relative">
						<div className="flex flex-col gap-20 lg:gap-5">
							<div>
								<NavBar />
							</div>
							<div>
								<Hero></Hero>
							</div>
						</div>
						<div id="project">
							<ScrollAnimate
								className="transition-all animation-duration-300"
								toggleClass="opacity-0"
								animateClass="animate__fadeInRight">
								<Projects />
							</ScrollAnimate>
						</div>
						<div id="cert">
							<ScrollAnimate
								className="transition-all animation-duration-300"
								toggleClass="opacity-0"
								animateClass="animate__fadeInLeft">
								<Certificate />
							</ScrollAnimate>
						</div>
						<div id="skill">
							<ScrollAnimate
								className="transition-all animation-duration-300"
								toggleClass="opacity-0"
								animateClass="animate__fadeInRight">
								<Skills />
							</ScrollAnimate>
						</div>

						{/* <ScrollAnimate
							className="transition-all animation-duration-300"
							toggleClass="opacity-0"
							animateClass="animate__fadeInLeft">
							<Contact />
						</ScrollAnimate> */}
						<div className="" id="contact">
							<Socials />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
