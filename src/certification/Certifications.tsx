import React from 'react';
import Data from '../Data';
import Slider from './Slider';
// import Certificate2 from './Certificate2';
function Certifications() {
	return (
		<div className="flex flex-row justify-center items-center">
			<Slider data={Data.certificates} />
		</div>
	);
}

export default Certifications;
