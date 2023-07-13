const SectionTitle = (props: {children: string}) => {
	return (
		<>
			<div className="flex w-full justify-center items-center my-7 text-secondary">
				<div className="text-5xl">{props.children}</div>
			</div>
		</>
	);
};

export default SectionTitle;
