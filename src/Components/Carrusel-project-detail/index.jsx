import React, { useState, useEffect } from 'react';

const CarrouselProject = ({ imageUrls }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [transitioning, setTransitioning] = useState(false);
    const totalSlides = imageUrls.length;
    const intervalTime = 3000; // Tiempo en milisegundos entre cambios de imagen

    // Cambia a la siguiente imagen
    const goToNext = () => {
        setTransitioning(true);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    };

    // Cambia a la imagen anterior
    const goToPrev = () => {
        setTransitioning(true);
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
    };

    // Configura el intervalo para cambiar las imágenes automáticamente
    useEffect(() => {
        if (totalSlides > 1) { // Solo configura el intervalo si hay más de una imagen
            const intervalId = setInterval(goToNext, intervalTime);
            return () => clearInterval(intervalId); // Limpia el intervalo al desmontar el componente o cambiar el número de imágenes
        }
    }, [totalSlides]);

    // Cuando la transición de opacidad termina, permite el siguiente cambio
    useEffect(() => {
        if (transitioning) {
            const timeoutId = setTimeout(() => {
                setTransitioning(false);
            }, 500); // Duración de la transición de opacidad
            return () => clearTimeout(timeoutId);
        }
    }, [transitioning]);

    return (
        <div className="w-96 h-96 overflow-hidden rounded-xl"> {/* Añadido overflow-hidden aquí */}
            <div className="relative w-full h-full">
                <div className="absolute inset-0 transition-opacity duration-500">
                    {/* Show only one image at a time */}
                    {imageUrls.map((url, index) => (
                        <img
                            key={index}
                            src={url}
                            alt={`Slide ${index}`}
                            className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-500 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                        />
                    ))}
                </div>
                <button
                    type="button"
                    className="absolute top-1/2 left-0 z-30 flex items-center justify-center h-10 px-4 cursor-pointer group transform -translate-y-1/2"
                    onClick={goToPrev}
                >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/30 group-hover:bg-black/50">
                        <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                        </svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button
                    type="button"
                    className="absolute top-1/2 right-0 z-30 flex items-center justify-center h-10 px-4 cursor-pointer group transform -translate-y-1/2"
                    onClick={goToNext}
                >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/30 group-hover:bg-black/50">
                        <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>
        </div>
    );
};

export default CarrouselProject;
