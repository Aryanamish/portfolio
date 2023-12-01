import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {motion} from 'framer-motion';
import IMG from '../Components/IMG';
import ZoomCenterOnClick from '../Components/ZoomCenterOnClick';
import {Icon} from '@iconify/react';

export default function MediaCard(props: {
	number: String;
	domain: string;
	image: string;
	title: string;
	desc: string | React.ReactNode;
	onClick?: Function;
	github?: string;
	website?: string;
	state: boolean;
	cardZoomed: Function;
}) {
	const [isOpen, __setIsOpen] = React.useState(props.state);
	const setIsOpen = (state: boolean) => {
		props.cardZoomed(state);
		__setIsOpen(state);
	};
	const toggleCard = (e: React.MouseEvent) => {
		e.stopPropagation();
		setIsOpen(!isOpen);
	};

	return (
		<div className="w-64">
			<ZoomCenterOnClick
				state={isOpen}
				backdrop={true}
				zoomed={setIsOpen}
				initialState={false}>
				<Card sx={{maxWidth: 345}} className="">
					<motion.div className="m-2 bg-skin-highlight p-2 rounded-md">
						<IMG
							src={props.image}
							className="h-[140px]"
							alt={props.title}
						/>
					</motion.div>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							{props.title}
						</Typography>
						<Typography
							variant="body2"
							color="text.secondary"
							component="div">
							<div
								className={
									(isOpen
										? ''
										: 'text-sm font-extralight tracking-wider transition-all line-clamp text-ellipsis overflow-hidden h-10 ') +
									'text-slate-800'
								}>
								{props.desc}
							</div>
						</Typography>
					</CardContent>
					<CardActions className="flex justify-between">
						<div className="w-auto h-9 cursor-pointer flex flex-row gap-4">
							{props.github && (
								<a
									href={props.github}
									className="hover:scale-105 transition-all">
									<Icon
										icon="mdi:github"
										className="w-full h-full"
									/>
								</a>
							)}
							{props.website && (
								<a
									href={props.website}
									className="hover:scale-105 transition-all">
									<Icon
										icon="fluent-mdl2:website"
										className="w-full h-full"
									/>
								</a>
							)}
						</div>
						<Button size="small" onClick={toggleCard}>
							{isOpen ? 'Close' : 'Learn More'}
						</Button>
					</CardActions>
				</Card>
			</ZoomCenterOnClick>
		</div>
	);
}
