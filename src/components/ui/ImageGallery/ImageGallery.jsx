import { useState } from 'react';
import { NextIcon } from '..';
import './ImageGallery.css';

export function ImageGallery({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) => prev === 0 ? images.length - 1 : prev - 1);
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => prev === images.length - 1 ? 0 : prev + 1);
    };

    return (
        <div className='image-gallery'>
            <div className='image-gallery__main'>
                <img
                    src={images[currentIndex]}
                    alt='photo'
                    className='image-gallery__image'
                />

                <button
                    onClick={prevSlide}
                    className='image-gallery__button image-gallery__button--prev rotated'
                    aria-label='prev'
                >
                    <NextIcon className='rotated'/>
                </button>

                <button
                    onClick={nextSlide}
                    className='image-gallery__button image-gallery__button--next'
                    aria-label='next'
                >
                    <NextIcon />
                </button>
            </div>

            <div className='image-gallery__thumbnails'>
                {images.map((image, index) => (
                    <button
                        key={image}
                        onClick={() => setCurrentIndex(index)}
                        className={`image-gallery__thumbnail ${
                            currentIndex === index
                                ? 'image-gallery__thumbnail--active'
                                : ''
                        }`}
                        aria-label='chose image'
                    >
                        <img
                            src={image}
                            alt='photo'
                            className='image-gallery__thumbnail-image'
                        />
                    </button>
                ))}
            </div>
        </div>
    );
}