import React, {useState} from 'react';
import Button from '../Components/Button';

function LetsTalk(props: {onClick: Function; className?: string}) {
	return (
		<div
			className={
				'flex flex-col gap-20 transition-all duration-300 ' + props.className
			}>
			<div>
				<div>
					<span className="font-bold text-6xl text-skin-secondary">
						Want to work
					</span>
				</div>
				<div>
					<span className="font-bold text-6xl text-skin-secondary">
						With Me?
					</span>
				</div>
			</div>
			<div className="flex justify-center items-center">
				<Button.PillCircle
					text={<>Let's Talk</>}
					onClick={props.onClick}></Button.PillCircle>
			</div>
		</div>
	);
}

export default LetsTalk;
