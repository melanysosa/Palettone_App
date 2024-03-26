'use client';
import { useState } from 'react';
import DisplayImage from '../components/DisplayImage';
import ColorThief from 'colorthief';
import Nav from '../components/Nav';

export default function Home() {
	const [uploadedImage, setUploadedImage] = useState(null);
	const [colorPalette, setColorPalette] = useState(null);

	const uploadImage = (e) => {
		const file = e.target.files[0];
		if (file) {
			const readerImage = new FileReader();

			readerImage.onload = async (e) => {
				const img = new Image();
				img.onload = () => {
					const colorThief = new ColorThief();
					const colorPalette = colorThief.getPalette(img, 5);
					setUploadedImage(e.target.result);
					setColorPalette(colorPalette);
				};
				img.src = e.target.result;
			};

			readerImage.readAsDataURL(file);
		} else {
			// Si no hay un archivo seleccionado, puedes hacer lo que necesites aquí
			// Por ejemplo, imprimir un mensaje de error o limpiar cualquier estado que necesite ser limpiado
			console.log('No se ha seleccionado ningún archivo.');
		}
	};
	const handleClick = () => {
		window.location.reload();
	};
	return (
		<main  >
		<Nav handleClick={handleClick} />
	
				<DisplayImage
					uploadedImage={uploadedImage}
					colorPalette={colorPalette}
					uploadImage={uploadImage}
					
				/>
		
		</main>
	);
}
