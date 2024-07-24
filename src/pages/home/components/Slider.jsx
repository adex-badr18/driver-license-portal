import React from 'react';
import img from "../../../assets/images/img2.jpg";
import img2 from "../../../assets/images/img5.jpg";
import img1 from "../../../assets/images/img6.jpg";
import img4 from "../../../assets/images/img8.jpg";
import img5 from "../../../assets/images/img9.jpg";


const Slider = () => {
    let imgArray =[img, img1, img2,img4,img5]

 

    return (
        <div id="gallery" className="relative w-full" data-carousel="slide">
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={img1} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
     
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={img2} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
    
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={img} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
    
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={img4} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
       
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={img5} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
            </div>
        </div>



    )
}

export default Slider
