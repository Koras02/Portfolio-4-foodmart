import React from 'react';
import {
    HeaderWrapper,
    HeaderWrapperH1,
    HeaderWrapperH,
    HeaderWrapperSarch,
    HeaderWrapperIcon,
    HeaderWrapperP
} from './HeaderStyle'

export function Header() {
     return (
       <HeaderWrapper>
         <HeaderWrapperH>
           <HeaderWrapperH1 to="/">FOOD & SHOP</HeaderWrapperH1>
           <HeaderWrapperSarch type="search" value="식자재를 빠르게 검색 해보세요">
           </HeaderWrapperSarch>
           <HeaderWrapperIcon>3</HeaderWrapperIcon>
           <HeaderWrapperIcon>2</HeaderWrapperIcon>
           <HeaderWrapperIcon>1</HeaderWrapperIcon>
           <HeaderWrapperP>MY FODD</HeaderWrapperP>
           <HeaderWrapperP>고객상담</HeaderWrapperP>
           <HeaderWrapperP>공지사항</HeaderWrapperP>
           </HeaderWrapperH>  
       </HeaderWrapper>
     );
 }


 export default Header;


 // 메인비주얼 해더 부분 담당하는 페이지...