import Icons from './Icons';

function ExtraSkills(props: {
	text: string;
	icons: Array<string>;
	animateIcon?: string;
	animateDiv?: string;
}) {
	return (
		<div>
			<div className="flex justify-center items-start flex-col lg:flex-row gap-10">
				<div className="">
					<span className="text-secondary text-5xl flex justify-start items-center">
						{props.text + ' :'}
					</span>
				</div>
				<div className="flex gap-2 md:gap-5 max-w-xl flex-wrap">
					{props.icons.map((icon) => {
						return (
							<Icons
								key={icon}
								className="flex justify-center items-center w-16 h-16 transition-all duration-500 cursor-pointer"
								icon={icon}
								iconClass="w-full h-full"
								animateIcon={props.animateIcon || 'animate-bounce'}
								animate={props.animateDiv || 'scale-125'}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default ExtraSkills;
