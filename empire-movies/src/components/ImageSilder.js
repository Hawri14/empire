import React, {useState} from 'react';
import { SilderData } from './SliderData';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'

const ImageSilder = ({ slides }) => {
const [current, setCurrent] = useState(0)
const length = slides.length

    return (
        <section className="slider">
            <FaArrowAltCircleLeft className="left-arrow"  />
            <FaArrowAltCircleRight className="right-arrow"  />
        {SilderData.map((slide, index) => {
            return <img src={slide.image} alt="movie image" />
        })}
        </section>
    );
};

export default ImageSilder;