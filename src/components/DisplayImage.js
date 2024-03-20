import React from 'react';
import ListItem from './ListItem';
import Palettone from './Palettone';
import Button from './Button';

const DisplayImage = ({ uploadedImage, colorPalette, uploadImage }) => {
	const toHex = (rgb) => {
		let hex = Number(rgb).toString(16);
		if (hex.length < 2) {
			hex = '0' + hex;
		}
		return hex;
	};
	return (
		<div className='flex '>
			<div className='flex flex-col '>
				{uploadedImage ? (
					<div className='w-[560px] h-[610px]'>
						<img
							className='object-cover w-[490px] h-[460px] rounded-3xl  '
							src={uploadedImage}
							alt='uploaded'
						/>
					</div>
				) : (
					<div >
						<Palettone />
					</div>
				)}
				<Button
					htmlFor='file'
					type='file'
					id='file'
					handleChange={uploadImage}
				/>
			</div>
			{colorPalette && (
				<div className='flex flex-col  mx-20'>
					<p className='flex text-3xl font-medium mb-10 items-center'>
						Here's your color palette!
					</p>
					<ul className=''>
						{colorPalette.map((color, index) => {
							const rgb = `rgb(${color.join(',')})`;

							const hex = `# ${toHex(color[0])}${toHex(color[1])}${toHex(
								color[2]
							)}`;

							return <ListItem key={index} rgb={rgb} hex={hex} />;
						})}
					</ul>
				</div>
			)}
		</div>
	);
};

export default DisplayImage;
