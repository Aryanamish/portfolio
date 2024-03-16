import {TagCloud} from '@frank-mayer/react-tag-cloud';

const Sphere = (props: {items: string[]}) => {
	return (
		<>
			{props.items.length > 0 && (
				<div className="flex justify-center items-center">
					<TagCloud
						options={(w) => ({
							radius: Math.min(500, w.innerWidth, w.innerHeight) / 2.2,
							maxSpeed: 'fast',
							direction: '135',
						})}
						onClickOptions={{passive: true}}
						className="bg-fill md:p-7 bg-size-200 transition-all bg-pos-100 flex text-lg text-secondary bg-gradient-to-tl from-fill to-highlight
		rounded-full">
						{props.items}
					</TagCloud>
				</div>
			)}
		</>
	);
};

export default Sphere;
