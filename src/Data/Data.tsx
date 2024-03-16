import DataType, {sections} from '../DataType';
import Hero from './Hero';
import Projects from './Projects';
import Skills from './Skills';
import Socials from './Socials';

const checkSection = function (section: sections): boolean {
	if (section === 'skills') {
		return (
			(Data.skills?.sphere && Data.skills.sphere.length > 0) ||
			(Data.skills?.extra_skills && Data.skills.extra_skills.length > 0) ||
			false
		);
	} else if (section === 'projects') {
		return (Data.projects && Data.projects.length > 0) || false;
	} else if (section === 'certificates') {
		return (Data.certificates && Data.certificates.length > 0) || false;
	} else if (section === 'socials') {
		return (Data.socials && Data.socials.length > 0) || false;
	} else if (section === 'contact') {
		return true;
	} else if (section === 'home') {
		return true;
	}
	return true;
};

const Data: DataType = {
	hero: Hero,
	skills: Skills,
	projects: Projects,
	socials: Socials,
	checkSection: checkSection,
};

export default Data;
