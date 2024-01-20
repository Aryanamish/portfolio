import Img from '../Components/IMG';
import heros from '../assets/potrait.webp';

export default function HeroImage() {
	return (
		<>
			<div
				className={`lg:w-[577px] lg:h-[600px] h-96 w-96 lg-flex justify-center items-center`}>
				<div>
					<Img
						src={heros}
						alt="Hero Image"
						className="rounded-lg bg-contain h-[500px] bg-no-repeat hero-image"
					/>
				</div>
			</div>
		</>
	);
}
