import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import  './slideshow.css';

const Slideshow = ({ images }) => {

    const [current, setCurrent] = useState(0);
    const length = images.length;

    const nextImage = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevImage = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    return (
        <div className="slideshowContainer">
            <div><img className="housingImg" src={images[current]} alt="housing" /></div>

            {length > 1 && ( 
                <div className="slideControls">
                    <FontAwesomeIcon 
                        icon={faChevronLeft}
                        onClick={prevImage}
                        className="arrow"
                    />
                    <FontAwesomeIcon 
                        icon={faChevronRight}
                        onClick={nextImage}
                        className="arrow"
                    />

                    <div className="slideshowCounter">
                        <p>
                            {current + 1}/{length}
                        </p>
                    </div>

                </div>
            )}

          
        </div>
    );
};

export default Slideshow;