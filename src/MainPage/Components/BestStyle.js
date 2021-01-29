import styled from 'styled-components';

export const BestFoodWrapper = styled.div`
  width:100%; 
  height:800px;
  border:1px solid #000;
  background:#fff;
  overflow:hidden;
  display:block;
`;

export const BestWrapperH1 = styled.div`
   text-align:center;
   font:bold 18px/34px arial;
   display:block;
   margin-top:40px;
   margin-bottom:20px;
   overflow:hidden;
`;
export const BestWrapperP = styled.div`
  text-align:center;
  font:bold 16px/18px arial;
  margin-bottom:80px;

`

export const BestWrapperForm = styled.div`
   width:100%;
   text-align:center;
   display:inline;
   position:relative;
   left:50%;
   top:10%;
   margin-right:650px;
   margin-left:-600px;
   border:1px solid #000;
   padding:100px;

   @media screen and (max-width:1600px) {
      padding:75px;
      margin-bottom:10%;
      margin-top:-100px;
      margin-right:560px;
      margin-left:-500px;
   }

   @media screen and (max-width:1400px) {
       padding:70px;
       margin-left:-450px;
       margin-right:480px;
   }

   @media screen and (max-width:1200px) {
    padding:70px;
    margin-left:-440px;
    margin-right:460px;
}

@media screen and (max-width:1024px) {
    padding:50px;
    margin-left:-360px;
    margin-right:380px;
}

@media screen and (max-width:860px) {
    width:80%;
    height:100px;
    padding:20px;
    margin-left:-320px;
    margin-top:-100px;
    margin-bottom:120px;
    margin-right:300px;
    display:block;
}
@media screen and (max-width:640px) {
    width:80%;
    height:100px;
    padding:20px;
    margin-left:-280px;
    margin-top:-100px;
    margin-bottom:120px;
    margin-right:300px;
}
`;

export const BestDescriptionForm = styled.div`
   width:100%;
   margin-top:200px;
`

export const BestDescriptionH1 = styled.div`
   display:inline;
   position:relative;
   text-align:center;
   position:relative;
   left:50%;
   top:50px;
   margin-left:-520px;
   margin-right:770px;
   font:bold 18px/24px arial;
  
`;

export const BestDescriptionD = styled.div`
    display:inline;
    position:relative;
    text-align:center;
    position:relative;
    left:50%;
    top:120px;
    margin-left:-842px;
    margin-right:450px;
    font:bold 18px/24px arial;
`
export const BestDescriptionP = styled.div`
 
    `;
