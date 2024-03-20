import React from 'react';
import { MdOutlineAddPhotoAlternate } from 'react-icons/md';

const Button = ({ handleChange, type, id, htmlFor }) => {
	return (
		<div>
			<label
				className='flex bg-[#0C0D0D] text-[#9F9CDC] w-[490px] h-[60px] rounded-3xl text-xl items-center justify-center font-medium -mt-20'
				htmlFor={htmlFor}
			>
				Upload Image
				<MdOutlineAddPhotoAlternate className='ml-2' />
			</label>
			{/* al coincidir el id y el htmlFor se vinculan y por eso al hacerlo invisible funciona */}
			<input
				type={type}
				id={id}
				onChange={handleChange}
				className='hidden '
			/>
		</div>
	);
};

export default Button;
