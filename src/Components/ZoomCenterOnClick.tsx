import {motion} from 'framer-motion';
import React from 'react';

const ZoomCenterOnClick = (props: {
	children: JSX.Element;
	zoomed: (state:boolean)=>void;
	initialState: boolean;
	state: boolean;
	backdrop: boolean;
}) => {
	const outerDiv = React.useRef<HTMLDivElement>(null);

	const closeCard = (event: React.MouseEvent<HTMLDivElement>) => {
		event.stopPropagation();
		if (event.target === outerDiv.current) {
			props.zoomed(false);
		}
	};

	return (
		<motion.div className="w-full h-full">
			<motion.div
				className={
					(props.state ? 'fixed' : '') + ' top-0 left-0  w-full h-full z-20'
				}>
				<motion.div
					initial={{opacity: 0}}
					animate={{opacity: 1}}
					ref={outerDiv}
					className={
						(props.state && props.backdrop ? 'bg-black/70 ' : '') +
						'flex justify-center items-center h-full w-full'
					}
					onClick={closeCard}>
					<motion.div
						layout
						transition={{layout: {type: 'tween'}}}
						style={!props.state ? {height: '100%', width: '100%'} : {}}>
						{props.children}
					</motion.div>
				</motion.div>
			</motion.div>
		</motion.div>
	);
};

export default ZoomCenterOnClick;
