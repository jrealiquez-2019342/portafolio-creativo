import React, { useState } from 'react';

const Carrousel = ({ children, cardsPerSlide }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slides = React.Children.toArray(children);
    const totalSlides = slides.length;
    const totalDisplaySlides = cardsPerSlide; // Cards displayed at a time
    const extendedSlides = [...slides, ...slides]; // Duplicate slides for infinite loop

    // Go to the specified slide
    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    // Move to the next slide
    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % (totalSlides));
    };

    // Move to the previous slide
    const goToPrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
    };

    // Get the current visible slides
    const getSlideItems = () => {
        const startIndex = currentIndex;
        const endIndex = startIndex + totalDisplaySlides;
        return extendedSlides.slice(startIndex, endIndex);
    };

    return (
        <div className="relative w-full overflow-hidden p-1">
            <div className="flex">
                <div className="flex">
                    {Array.from({ length: totalSlides }).map((_, index) => (
                        <div key={index} className={`flex-shrink-0 w-full ${index === currentIndex ? 'block' : 'hidden'}`}>
                            <div className="flex space-x-4">
                                {getSlideItems()}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <button
                type="button"
                className="absolute top-1/2 left-0 z-30 flex items-center justify-center h-10 px-4 cursor-pointer group transform -translate-y-1/2"
                onClick={goToPrev}
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
                    <svg className="w-4 h-4 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
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
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
                    <svg className="w-4 h-4 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
    );
};

export default Carrousel;
