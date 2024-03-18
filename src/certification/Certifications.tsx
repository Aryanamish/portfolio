import Data from '../Data/Data';
import KeenSlider from './KeenSlider';

// import Certificate2 from './Certificate2';
function Certifications() {
	return (
		<div className="flex flex-row justify-center items-center">
			{Data.certificates && <KeenSlider data={Data.certificates} />}
		</div>
	);
}

export default Certifications;
