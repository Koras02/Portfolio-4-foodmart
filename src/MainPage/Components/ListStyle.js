import styled from 'styled-components';

export const ListWrapper =  styled.div`
  width:100%;
  display:block;
  border:1px solid #000;
`;

export const ListHeaderH1 = styled.div`
  text-align:center;
  font:bold 18px/24px arial;
  display:block;
  margin-top:20px;
`


export const ListHeaderP = styled.div`
   text-align:center;
   font:bold 16px/20px arial;
   display:block;
   margin-top:20px;
`;

 export const ListHeaderMenuli =  styled.div`
    border:1px solid #000; 
    float:left;
    margin-left:-600px;
    margin-right:680px;
    background:#fcc;
    padding:50px;
    position:relative;
    left:50%;
    top:100px;
    border-radius:10%;
    
    &:link {
      background :#fff;
    }
    &:visited {
       background:red;
    }
 `

 export const Page = styled.div`
    height:1000px;
    border:1px solid #000;
    margin-top:400px;
    animation-name: example;
    animation-duration:4s;

    @keyframs example {
       0% {background-color:red; left:0px top:0px}
       25% {background-color:yellow; left:200px top:0px}
    }
 `