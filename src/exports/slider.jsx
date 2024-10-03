import React from "react";
import images from "./imag.js";
import "../css/Slider.css"; 

const Slider = () => {
    return (
        <div className="slider-container">
            {images.map((image, index) => (
               <div className="image-wrapper">
                     <img key={index} src={image} className="image" alt="" />

               </div>
            ))}
        </div>
    );
}

export default Slider;
