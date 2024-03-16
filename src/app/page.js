'use client'
import { useState } from "react";
import DisplayImage from "../components/DisplayImage";
import ColorThief from 'colorthief'

export default function Home() {

  const [uploadedImage,setUploadedImage]=useState(null)
  const [colorPalette, setColorPalette]= useState(null)

  const uploadImage =(e) =>{
    const file = e.target.files[0];
     if (file) {
    const readerImage =new FileReader()

    readerImage.onload=async (e)=>{
      const img = new Image();
      img.onload=()=>{
        const colorThief= new ColorThief();
        const colorPalette= colorThief.getPalette(img,6);
        setUploadedImage(e.target.result)
       setColorPalette(colorPalette);
      }
    img.src=e.target.result;
    };
    

    readerImage.readAsDataURL(file);
     } else {
    // Si no hay un archivo seleccionado, puedes hacer lo que necesites aquí
    // Por ejemplo, imprimir un mensaje de error o limpiar cualquier estado que necesite ser limpiado
    console.log("No se ha seleccionado ningún archivo.");
  }
  };
  

	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<div>
		<h1>Palette gen</h1>
    <label htmlFor='file'>Upload Image </label>
    <input type='file' id='file' className='hidden'onChange={uploadImage} /> 
    {/* al coincidir el id y el htmlFor se vinculan y por eso al hacerlo invisible funciona */}
			</div>
      <DisplayImage
      uploadedImage={uploadedImage} 
      colorPalette={colorPalette}
      />
		</main>
	);
}
