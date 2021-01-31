import React  from 'react';
import { useHistory } from 'react-router-dom';
import {
    HeaderWrapper,
    HeaderWrapperH1,
    HeaderWrapperH,
    HeaderWrapperSarch,
    HeaderWrapperIcon,
    HeaderWrapperP
} from './HeaderStyle'

export function Header() {
    const history = useHistory();
    const handlePush = (e) => {
       if (e.key === "Enter") {
         history.push('/Search')
       } if(e.type === "") {
         history.push('/')
       }
       if (e.key === "A") {
         alert('검색어를 입력하세요')
       }
     }
 
     return (
       <HeaderWrapper>
         <HeaderWrapperH>
           <HeaderWrapperH1 to="/">FOOD & SHOP</HeaderWrapperH1>
           <HeaderWrapperSarch type="search" onKeyPress={handlePush} required Enter={"Enter"}>
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