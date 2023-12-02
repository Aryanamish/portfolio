import Data from '../Data';
import KeenSlider from './KeenSlider';

// import Certificate2 from './Certificate2';
function Certifications() {
	return (
		<div className="flex flex-row justify-center items-center">
			<KeenSlider data={Data.certificates} />
		</div>
	);
}

export default Certifications;
