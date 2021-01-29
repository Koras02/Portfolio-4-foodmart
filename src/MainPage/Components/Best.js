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

function Best() {
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
            <BestDescriptionP>가격</BestDescriptionP>
            <BestDescriptionP>가격</BestDescriptionP>
            <BestDescriptionP>가격</BestDescriptionP>
            <BestDescriptionP>가격</BestDescriptionP>
            </BestDescriptionForm>
        </BestFoodWrapper>
     );
 }


 export default Best;