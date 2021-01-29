 import classNames from 'classnames';
 import React, { useState } from 'react';
 import {FaArrowAltCircleLeft,FaArrowAltCircleRight} from 'react-icons/fa';
 import {SliderData} from './Data/SliderData';
 import './Slide.scss';
 import {MainVsiualWrapper} from './MainVisualStyle'


const MainVisual = ({ slides }) => {
     const [current, setCureent] = useState(0);
     const length = slides.length

     const nextSlide = () => {
         setCureent(current === length -   1 ? 0 : current + 1);
     };

     const prevSlide = () => {
         setCureent(current === 0 ? length -1 : current -1);
     }

     console.log(current);

     if(!Array.isArray(slides) || slides.length <= 0) {
         return null;
     }
     return (
       <MainVsiualWrapper>
           <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
           <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
           {SliderData.map((slide,index) => {
               return (
                   <div className={index === current ? 'slide active' : 'slide'} key={index}>
                       {index === current && (
                           // eslint-disable-next-line jsx-a11y/img-redundant-alt
                           <img src={slide.image} alt='traval image' className={classNames(
                               'image'
                           )} />
                       )}
               </div>
             )
           })}
       </MainVsiualWrapper>
     );
 }


 export default MainVisual;