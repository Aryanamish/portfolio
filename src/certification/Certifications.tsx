import React, {useState} from 'react';
import Data from '../Data';
import Cert from './Cert';
function Certifications() {
	const [certData, setCertData] = useState(0);

	const setNext = () => {
		setCertData((certData + 1) % Data.certificates.length);
	};
	const setPrev = () => {
		let new_num = (certData - 1) % Data.certificates.length;
		if (new_num < 0) {
			new_num += Data.certificates.length;
		}
		setCertData(new_num);
	};
	return (
		<div className="flex flex-row">
			<Cert
				title={Data.certificates[certData].title}
				desc={Data.certificates[certData].desc}
				link={Data.certificates[certData].link}
				image={Data.certificates[certData].image}
				next={setNext}
				prev={setPrev}
				className={' animate__animated '}
			/>
		</div>
	);
}

export default Certifications;
