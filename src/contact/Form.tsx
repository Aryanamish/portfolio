import React from 'react';
import Button from '../Components/Button';

function Form(props: {className?: string}) {
	return (
		<div className={'flex flex-col gap-3 ' + props.className}>
			<form>
				<ul className="flex flex-col w-full h-auto justify-center items-center gap-3">
					<div className="flex flex-col md:flex-row justify-center items-center w-full h-auto gap-3">
						<li className="mb-2">
							<input
								type="text"
								name="name"
								placeholder="Name *"
								className="focus:outline-highlight w-full text-2xl bg-gray-200 rounded-md placeholder:text-2xl p-3 shadow-sm"
								required
							/>
						</li>
						<li className="mb-2">
							<input
								type="email"
								name="email"
								placeholder="E-mail *"
								className="focus:outline-highlight w-full text-2xl bg-gray-200 rounded-md placeholder:text-2xl p-3 shadow-sm"
								required
							/>
						</li>
					</div>
					<li className="mb-2 w-full">
						<input
							placeholder="Subject *"
							type="text"
							name="subject"
							className="focus:outline-highlight w-full text-2xl bg-gray-200 rounded-md placeholder:text-2xl p-3 shadow-sm"
							required
						/>
					</li>
					<li className="mb-2 w-full">
						<textarea
							placeholder="Message *"
							name="message"
							required
							className="focus:outline-highlight w-full h-56 text-2xl bg-gray-200 rounded-md placeholder:text-2xl p-5 shadow-sm resize-none scrollBarStyle-TextArea"></textarea>
					</li>
					<li>
						<button
							type="submit"
							className="hidden"
							id="send_email"></button>
						<Button.Pill
							onClick={() => {
								document.getElementById('send_email')?.click();
							}}
							text={
								<>
									Contact Me
									<span className="pl-2 text-xs text-black/80">
										~ it's free
									</span>
								</>
							}
						/>
					</li>
				</ul>
			</form>
		</div>
	);
}

export default Form;
