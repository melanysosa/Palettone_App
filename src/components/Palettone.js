'use client';
import React from 'react';
import Image from 'next/image';
import PalettoneImage from '../../public/assets/pexels-diego-gonzalez-14599795 1.png';
import PalettoneImage2 from '../../public/assets/colorPalette.png';
import PalettoneImageMobile from '../../public/assets/Color-Palette-mobile.png';

const Palettone = () => {
	return (
		<div className='flex flex-col md:flex-row mb-12 sm:mb-60 md:mb-36 w-full '>
			<p className='text-xl sm:text-3xl mb-12 md:text-5xl font-semibold w-64 sm:w-96  sm:mx-14 '>
				Embark on your chromatic adventure at Palettone! Create your color
				palette with an image!
			</p>
			<div className='relative'>
				<Image
					src={PalettoneImage}
					priority
					alt='Palettone'
					width={460}
					height={420}
					className='rounded-3xl  object-cover w-[260px] h-[330px] sm:w-[460px] sm:h-[420px]'
				/>

				<div className='absolute inset-y-32 right-0 sm:inset-y-64 '>
					<Image
						src={PalettoneImage2}
						priority
						alt='Palettone2'
						width={290}
						height={316}
						className='rounded-3xl   object-cover hidden sm:block sm:w-[290px] sm:h-[316px] ring-1 ring-[#6C69A9]'
					/>
				</div>
				<div className='absolute inset-y-32 right-0  sm:-inset-x-20 sm:inset-y-64 '>
					<Image
						src={PalettoneImageMobile}
						priority
						alt='PalettoneMobile'
						width={290}
						height={316}
						className='rounded-3xl  object-cover w-[130px] h-[258px] sm:hidden  ring-1 ring-[#6C69A9]'
					/>
				</div>
			</div>
		</div>
	);
};

export default Palettone;
