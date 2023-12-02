import Img from '../Components/IMG';
import heros from '../assets/heros.png';

export default function HeroImage() {
	return (
		<Img
			src={heros}
			alt="Logo"
			className="lg:w-[577px] lg:h-[600px] h-96 w-96 lg-flex"
			loading_text="logo.png..."
		/>
	);
}
