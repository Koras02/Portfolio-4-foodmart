import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom'

export const CategoryWrapper = styled.div`
  width:100%;
  heighT:100px;
  overflow:;
  border-bottom:1px solid #000;  
`;

export const CategoryHeaderli = styled(LinkR)`
   display:inline;
   text-align:center;
   margin-left:-300px;
   margin-right:350px;
   margin-top:150px;
   position:relative;
   text-decoration:none;
   color:#000;
   left:50%;
   top:40%;
   font:bold 18px/20px arial;

   &:hover {
       color:red;
   }
`
 