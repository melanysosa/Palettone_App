import React, { useState } from 'react';
import { BiCopy } from 'react-icons/bi';

const ListItem = ({ rgb, hex }) => {
	const [copied, setCopied] = useState(false);
	const copyColorClick = (e) => {
		const color = e.target.innerText;
		navigator.clipboard.writeText(color);
	};
	return (
		<li
			style={{ background: rgb }}
			onClick={(e) => {
				copyColorClick(e);
				setCopied(true);
				setTimeout(() => {
					setCopied(false);
				}, 1000);
			}}
			className='rounded-xl drop-shadow-lg shadow-inner '
		>
			<div
				className='flex my-6 rounded-xl w-[500px] h-[70px] hover:bg-black/20
				'
			>
				<div className='opacity-0 hover:opacity-100 text-white flex items-center  px-9 '>
					{copied ? 'Copied!' : hex}
					{
						<p className='ml-80'>
							<BiCopy className='w-6 h-6' />
						</p>
					}
				</div>
			</div>
		</li>
	);
};

export default ListItem;
