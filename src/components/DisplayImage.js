import React from 'react';
import ListItem from './ListItem';

const DisplayImage = ({ uploadedImage, colorPalette }) => {
	const toHex = (rgb) => {
		let hex = Number(rgb).toString(16);
		if (hex.length < 2) {
			hex = '0' + hex;
		}
		return hex;
	};
	return (
		<div>
			<div className='flex h-80 w-full'>
				{uploadedImage ? (
					<img src={uploadedImage} alt='uploaded' />
				) : (
					<p>Put an Image here ...</p>
				)}
			</div>
			{colorPalette && (
				<ul>
					{colorPalette.map((color, index) => {
						const rgb = `rgb(${color.join(',')})`;

						const hex = `# ${toHex(color[0])}${toHex(color[1])}${toHex(
							color[2]
						)}`;
						console.log(rgb, hex);
						return <ListItem key={index} rgb={rgb} hex={hex} />;
					})}
				</ul>
			)}
		</div>
	);
};

export default DisplayImage;
