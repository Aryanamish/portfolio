import { ReactNode, useState } from 'react';
import Logo from './Logo';
import { sections } from '../DataType';
import Data from '../Data/Data';
import Resume from '../resume/Resume';

interface Links {
	section: sections;
	link?: string;
	component?: ReactNode;
}

const NavBar = () => {
	const links: Links[] = [
		{
			section: 'home',
			link: '#hero',
		},
		{
			section: 'projects',
			link: '#projects',
		},
		{
			section: 'certificates',
			link: '#certificates',
		},
		{
			section: 'skills',
			link: '#skills',
		},
		{
			section: 'resume',
			component: <><Resume>
				<button className='text-gray-300 hover:bg-skin-fill hover:text-white px-3 py-2 rounded-md text-lg'>Resume</button>
			</Resume></>,
		},
		{
			section: 'contact',
			link: '#contact',
		},
		{
			section: 'socials',
			link: '#socials',
		},
	];
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<>
			<div className="flex justify-center h-16 bg-skin-fill-highlight backdrop-filter backdrop-blur-md fixed w-full z-50">
				<div className="md:container w-full relative">
					<nav className="w-full absolute bg-skin-fill-highlight">
						<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
							<div className="flex items-center justify-between h-16">
								<div className="flex items-center">
									<div className="flex-shrink-0 h-10 w-10 fill-fill-highlight-2">
										<Logo />
									</div>
								</div>
								<div className="hidden md:block">
									<div className="ml-4 flex items-center">
										{links.map((link, idx) => {
											const string =
												link.section.slice(0, 1).toUpperCase() +
												link.section.slice(1);
											if (Data.checkSection(link.section) === false) return;
											if (link.link) {
												return (
													<a
														key={string + link.link + String(idx)}
														href={link.link}
														className="text-gray-300 hover:bg-skin-fill hover:text-white px-3 py-2 rounded-md text-lg">
														{string}
													</a>
												);
											} else if (link.component) {
												return (<div key={string + link.link + String(idx)}>
													{link.component}
												</div>)
											}
										})}
									</div>
								</div>
								<div className="-mr-2 flex md:hidden">
									<button
										onClick={toggleMobileMenu}
										type="button"
										className="inline-flex items-center justify-center p-2 rounded-md text-skin-secondary hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-skin-fill-highlight focus:text-white"
										aria-controls="mobile-menu"
										aria-expanded={isMobileMenuOpen}>
										<span className="sr-only">Open Nav Bar</span>
										<svg
											className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M4 6h16M4 12h16M4 18h16"
											/>
										</svg>
										<svg
											className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M6 18L18 6M6 6l12 12"
											/>
										</svg>
									</button>
								</div>
							</div>
						</div>
						<div
							className={`${isMobileMenuOpen ? 'block' : 'hidden'
								} md:hidden w-full`}>
							<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
								{links.map((link, idx) => {
									const string =
										link.section.slice(0, 1).toUpperCase() + link.section.slice(1);
									if (Data.checkSection(link.section) === false) return;
									return (
										<a
											key={link.link + String(idx) + string}
											onClick={() => setIsMobileMenuOpen(false)}
											href={link.link}
											className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
											{string}
										</a>
									);
								})}
							</div>
						</div>
					</nav>
				</div>
			</div>
		</>
	);
};

export default NavBar;
