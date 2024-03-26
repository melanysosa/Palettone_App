import React from 'react'
import LogoPalettone from '@/components/Logo/LogoPalettone';
import { LogoMobilePalettone } from '@/components/Logo/LogoMobilePalettone';

const Nav = ({handleClick}) => {
  return (
		<div className='flex  h-[100px] bg-[#0C0D0D] '>
			<div
				onClick={handleClick}
				className='flex items-center  sm:ml-10 sm:px-14 px-16'
			>
			<LogoMobilePalettone/>
            <LogoPalettone/>
			</div>
		</div>
  );
}

export default Nav