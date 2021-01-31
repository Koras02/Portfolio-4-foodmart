 import React from 'react';
import Best from './Components/Best';
import Category from './Components/Category';
import { homePayData } from './Components/Data/DescriptionPay';
import { SliderData } from './Components/Data/SliderData';
 
import Header from './Components/Header';
import List from './Components/List';
import MainVisual from './Components/MainVisual';

export function Home() {
     return (
         <>
         <Header /> 
         <Category />
         <MainVisual slides={SliderData}/>
         <Best {...homePayData} />
         <List slides={SliderData}/>
         </>
     )
 }


 export default Home;