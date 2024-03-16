export interface PersonalInfo {
	first_name: string;
	last_name: string;
	email: string;
	type_writer?: string[];
	masks_svgs?: (string | JSX.Element)[];
}

export interface Project {
	domain: string;
	image?: string;
	title: string;
	website?: string;
	github?: string;
	desc: string | JSX.Element;
}

export interface Certificate {
	label: string;
	desc: string;
	link: string;
	imagePath: string;
	provider: string;
}

export interface ExtraSkill {
	text: string;
	data: {name: string; icon: string | JSX.Element}[];
}

export interface SocialLink {
	icon: string;
	links: string;
}

export interface Skills {
	sphere?: string[];
	extra_skills?: ExtraSkill[];
}

export default interface DataType {
	hero: PersonalInfo;

	projects?: Project[];
	certificates?: Certificate[];
	skills?: Skills;
	socials?: SocialLink[];
	checkSection: (section: sections) => boolean;
}

export type sections =
	| 'skills'
	| 'projects'
	| 'certificates'
	| 'contact'
	| 'socials'
	| 'home';
