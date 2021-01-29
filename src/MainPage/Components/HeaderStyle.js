import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom'

export const HeaderWrapper = styled.div`
  width:100%;
  display:block;
  background:#fff;
  text-align:center;
  overflow:hidden;
`;

export const HeaderWrapperH = styled.div`
   margin:0px auto;
   border:1px solid #000;
   overflow:hidden;
`

export const HeaderWrapperH1 = styled(LinkR)`
   display:inline-flex;
   margin-top:90px;
   text-decoration:none;
   position:relative;
   right:150px;
   top:-50px;
   color:gray;
   overflow:hidden;
   
   &:hover {
       color:#000;
       transition:2s;
   }
   
`;

export const HeaderWrapperSarch = styled.input`
   min-width:350px;
 
   overflow-x:hidden;
   max-width:200px;
   display:inline;
   padding:10px;
   position:absolute;
   left:50%;
   margin-top:30px;
   margin-left:-200px;
`;

export const HeaderWrapperIcon = styled.div`
   display:inline;
   position:relative;
   left:580px;
   top:-60px;
   margin-left:60px;
   text-align:center;
   border:1px solid #000;
   padding:10px;
   overflow:hidden;
`;

export const HeaderWrapperP = styled.div`
   display:inline-flex;
   margin-left:30px;
   position:relative;
   left:320px;
   bottom:20px;
   overflow:hidden;
`