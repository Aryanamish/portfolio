import React from 'react';

const NavBar = () => {
	const links = [
		{
			text: 'project',
			link: '#project',
		},
		{
			text: 'Certificates',
			link: '#cert',
		},
		{
			text: 'Skills',
			link: '#skill',
		},
		{
			text: 'Contact',
			link: '#contact',
		},
	];

	return (
		<div className="mt-6 flex flex-col lg:flex-row justify-center border-skin-fill-highlight border-2 rounded-md">
			{links.map((e, i) => {
				return (
					<a
						key={e.text + i}
						href={e.link}
						className="px-3 py-4 mx-10 hover:bg-skin-fill-highlight cursor-pointer">
						<span className="text-skin-secondary">{e.text}</span>
					</a>
				);
			})}
		</div>
	);
};

export default NavBar;
