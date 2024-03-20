'use client';
import React from 'react';
import Image from 'next/image';
import PalettoneImage from '../../public/assets/pexels-diego-gonzalez-14599795 1.png';
import PalettoneImage2 from '../../public/assets/colorPalette.png';

const Palettone = () => {
	return (
		<div className='flex'>
			<p className='text-5xl font-semibold w-[500px] ml-10'>
				Embark on your chromatic adventure at Palettone! Create your color
				palette with an image!
			</p>
			<div className='relative ml-36'>
				<div className=''>
					<Image
						src={PalettoneImage}
						priority
						alt='Palettone'
						width={460}
						height={420}
						className='rounded-3xl object-cover w-[460px] h-[420px]'
					/>
				</div>
				<div className='absolute -inset-x-20 inset-y-64 '>
					<Image
						src={PalettoneImage2}
						priority
						alt='Palettone2'
						width={290}
						height={316}
						className='rounded-3xl  object-cover w-[290px] h-[316px] ring-1 ring-[#6C69A9]'
					/>
				</div>
			</div>
		</div>
	);
};

export default Palettone;
