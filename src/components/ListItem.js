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
			className=' flex rounded-xl drop-shadow-lg shadow-inner w-[260px] h-[100px]  sm:h-[70px] sm:w-[500px] my-7 items-end text-lg font-medium'
		>
			<div className='flex bg-black/20 sm:bg-transparent sm:hover:bg-black/20 sm:w-[500px] 
			sm:h-[70px] rounded-b-xl sm:rounded-xl w-[260px] h-14 '>
				<div className='md:opacity-0 sm:hover:opacity-100 opacity-100 text-white flex items-center  px-8 '>
					<div
						onClick={(e) => {
							copyColorClick(e);
							setCopied(true);
							setTimeout(() => {
								setCopied(false);
							}, 1000);
						}}
						className='hidden md:block md:w-80'
					>
						{copied ? 'Copied!' : hex}
					</div>
					<div className='block md:hidden  sm:w-80 '>{hex}</div>
					{
						<p className='ml-20'>
							<BiCopy className='w-6 h-6' />
						</p>
					}
				</div>
			</div>
		</li>
	);
};

export default ListItem;
