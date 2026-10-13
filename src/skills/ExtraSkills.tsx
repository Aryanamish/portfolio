import Tooltip from '@mui/material/Tooltip';
import {useEffect, useState} from 'react';
import Icons from '../components/Icons';

function SkillIcon(props: {name: string; icon: string | JSX.Element}) {
	const [open, setOpen] = useState(false);

	// on touch devices a tap opens the tooltip, touching elsewhere or scrolling hides it
	useEffect(() => {
		if (!open) return;
		const close = () => setOpen(false);
		document.addEventListener('touchstart', close, {passive: true});
		document.addEventListener('scroll', close, {passive: true, capture: true});
		return () => {
			document.removeEventListener('touchstart', close);
			document.removeEventListener('scroll', close, {capture: true});
		};
	}, [open]);

	return (
		<Tooltip
			title={props.name}
			arrow
			open={open}
			onOpen={() => setOpen(true)}
			onClose={() => setOpen(false)}
			disableTouchListener>
			<div onClick={() => setOpen(true)}>
				<Icons
					className="flex justify-center items-center w-9 h-9 lg:w-10 lg:h-10"
					icon={props.icon}
					iconClass="w-full h-full"
				/>
			</div>
		</Tooltip>
	);
}

function ExtraSkills(props: {
	text: string;
	icons: {name: string; icon: string | JSX.Element}[];
}) {
	return (
		<div className="w-full max-w-4xl mx-auto">
			<div className="flex items-start flex-col lg:flex-row gap-3 lg:gap-8">
				<div className="lg:w-96 lg:shrink-0">
					<span className="text-secondary text-xl lg:text-2xl lg:h-10 flex justify-start lg:justify-end items-center">
						{props.text + ' :'}
					</span>
				</div>
				<div className="flex gap-3 lg:gap-4 flex-wrap">
					{props.icons.map((e, idx) => {
						return (
							<SkillIcon key={idx} name={e.name} icon={e.icon} />
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default ExtraSkills;
