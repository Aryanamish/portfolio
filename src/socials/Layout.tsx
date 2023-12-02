
function Layout(props: {children: string | JSX.Element | JSX.Element[]}) {
	return (
		<div>
			<div className="flex w-full h-72">
				<div className="hidden w-32 bg-skin-fill-highlight rounded-lg lg:flex flex-col">
					<div className="h-24 bg-skin-fill"></div>
					<div className="flex-grow rounded-lg"></div>
				</div>
				<div className="flex flex-grow flex-col relative">
					<div className="bg-skin-fill absolute w-full lg:h-52 h-full flex-grow flex justify-center items-center p-4 pt-0">
						<div className="flex-grow bg-skin-fill-highlight w-full h-full rounded-lg">
							{props.children}
						</div>
					</div>
					<div className="bg-skin-fill-highlight flex-grow hidden lg:block"></div>
				</div>
				<div className="hidden w-32 bg-skin-fill-highlight lg:flex flex-col">
					<div className="h-24 bg-skin-fill "></div>
					<div className="flex-grow rounded-lg"></div>
				</div>
			</div>
		</div>
	);
}

export default Layout;
