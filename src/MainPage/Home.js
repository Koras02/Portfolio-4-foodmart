 import React from 'react';
import Category from './Components/Category';
import { SliderData } from './Components/Data/SliderData';
 
import Header from './Components/Header';
import MainVisual from './Components/MainVisual';

export function Home() {
     return (
         <>
         <Header /> 
         <Category />
         <MainVisual slides={SliderData}/>
         </>
     )
 }


 export default Home;