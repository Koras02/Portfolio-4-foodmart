import React from 'react';
import {
    BestFoodWrapper,
    BestWrapperH1,
    BestWrapperP,
    BestWrapperForm,
    BestDescriptionH1,
    BestDescriptionP,
    BestDescriptionD,
    BestDescriptionForm
} from './BestStyle'

const homePayData = ({
    pay,
    pay2,
    pay3,
    pay4,
}) => {
     return (
        <BestFoodWrapper>
            <BestWrapperH1>베스트 상품</BestWrapperH1>
            <BestWrapperP>식자재 베스트 상품을 살펴보세요</BestWrapperP>
            <BestWrapperForm>상품Form</BestWrapperForm>
            <BestWrapperForm>상품Form</BestWrapperForm>
            <BestWrapperForm>상품Form</BestWrapperForm>
            <BestWrapperForm>상품Form</BestWrapperForm>
            <BestDescriptionForm>
            <BestDescriptionH1>상품이름1</BestDescriptionH1>
            <BestDescriptionH1>상품이름2</BestDescriptionH1>
            <BestDescriptionH1>상품이름3</BestDescriptionH1>
            <BestDescriptionH1>상품이름4</BestDescriptionH1>
            <BestDescriptionD>상품설명</BestDescriptionD>
            <BestDescriptionD>상품설명</BestDescriptionD>
            <BestDescriptionD>상품설명</BestDescriptionD>
            <BestDescriptionD>상품설명</BestDescriptionD>
            <BestDescriptionP>{pay}</BestDescriptionP>
            <BestDescriptionP>{pay2}</BestDescriptionP>
            <BestDescriptionP>{pay3}</BestDescriptionP>
            <BestDescriptionP>{pay4}</BestDescriptionP>
            </BestDescriptionForm>
        </BestFoodWrapper> 
        );
 }


 export default homePayData;