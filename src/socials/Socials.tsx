import Icons from '../Components/Icons';
import Layout from './Layout';
import Data from '../Data/Data';

function Socials() {
	return (
		<Layout>
			<div className="flex flex-col lg:flex-row px-10 h-full w-full">
				<div className="justify-center items-center flex flex-grow lg:flex-grow-0">
					<span className="text-3xl font-bold text-skin-secondary lg:text-4xl w-64">
						You Can Find Me Here:
					</span>
				</div>
				<div className="flex justify-center items-center gap-3 flex-grow">
					{Data.socials?.map((e, idx) => {
						return (
							<a
								key={e.links + String(idx)}
								href={e.links}
								target="_blank"
								rel="noreferrer"
								className="hover:scale-125 transition-all duration-500">
								<div className="w-10 h-10 text-secondary">
									<Icons
										icon={e.icon}
										animateIcon={'animate-bounce'}
										animate={'scale-105'}
									/>
								</div>
							</a>
						);
					})}
				</div>
			</div>
		</Layout>
	);
}

export default Socials;
