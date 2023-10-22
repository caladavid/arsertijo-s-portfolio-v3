import Image from 'next/image';
import ComparisonSVG from "../../public/assets/svgs/ComparisonSVG";
import TopImage from "../../public/assets/works/RediseñoWeb/LectorManga/LectorManga1.jpg";
import BottomImage from "../../public/assets/works/RediseñoWeb/LectorManga/LectorManga2.jpg";
import React, { useRef, useState } from 'react';

const ComparisonSlider = () => {
    const [imageRevealFraq, setImageRevealFraq] = useState(0.5);
    const imageContainer = useRef(undefined);

    const slide = (xPosition) => {
        // Estado que controla la fracción de revelación de la imagen comparativa.
        const containerBoundingRect = imageContainer.current.getBoundingClientRect();

        setImageRevealFraq(() => {
            // Función para calcular la fracción de revelación de la imagen.
            if (xPosition < containerBoundingRect.left) {
                return 0
            } else if (xPosition > containerBoundingRect.right) {
                return 1
            } else {
                return (
                    (xPosition - containerBoundingRect.left) / containerBoundingRect.width
                ); 
            }
        });
    };

    // Manejador para el evento de clic del mouse.
    const handleMouseDown = () => {
        // Configura los controladores de eventos para el movimiento del mouse y el levantamiento del mouse.
        window.onmousemove = handleMouseMove;
        window.onmouseup = handleMouseUp;
    };

    // Manejador para el movimiento del mouse durante el clic.
    const handleMouseMove = (e) => {
        slide(e.clientX)
    };
    
    // Manejador para el levantamiento del mouse.
    const handleMouseUp = () => {
        // Elimina los controladores de eventos para detener el seguimiento del mouse.
        window.onmousemove = undefined;
        window.onmouseup = undefined;
    };

    // Manejador para el movimiento táctil (usado en dispositivos táctiles).
    const handleTouchMove = (e) => {
        slide(e.touches[0].clientX);
    };

  return (
    <div ref={imageContainer} className='relative select-none group'>
        <Image
            className='w-full pointer-events-none' 
            draggable="false"
            src={TopImage}
            alt="test"
            height={1000} 
        />
        <Image
            className='absolute inset-0 pointer-events-none' 
            style={{
                clipPath: `polygon(0 0, ${imageRevealFraq * 100}% 0, ${imageRevealFraq * 100}% 100%, 0 100%)`,
            }}
            src={BottomImage}
            alt="test"
            height={1000} 
        />
        <div 
            className='absolute inset-0 group-hover:opacity-100 sm:opacity-50'
            style={{ left: `${imageRevealFraq * 100}% `}}
        >
            <div className='relative h-full'>
                <div className='absolute inset-0 bg-black w-0.5 -ml-px sm:w-1 sm:-ml-0.5'></div>
                <div 
                    style={{ touchAction: "none" }}
                    onMouseDown={handleMouseDown} 
                    onTouchMove={handleTouchMove}
                    className='flex items-center justify-center h-6 w-6 -ml-3 -mt-3 sm:h-12 sm:w-12 sm:-ml-6 sm:-mt-6 lg:h-14 lg:w-14 lg:-ml-7 lg:-mt-7 rounded-full bg-black absolute top-1/2 shadow-2xl cursor-col-resize'
                >
                    <ComparisonSVG className="w-4 h-4 sm:w-8 sm:h-8 fill-white "/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ComparisonSlider