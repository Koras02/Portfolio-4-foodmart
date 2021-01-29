 import React from 'react';
 import {CategoryWrapper
  ,CategoryHeaderli} from './CategoryStyle'

function Category() {
     return (
        <CategoryWrapper>
          <CategoryHeaderli to="/ds">식자제 종류</CategoryHeaderli>
          <CategoryHeaderli>업종별 제품</CategoryHeaderli>
          <CategoryHeaderli>구매/문의</CategoryHeaderli>
          <CategoryHeaderli>유통기안 및 상품재고</CategoryHeaderli>
        </CategoryWrapper>
     );
 }


 export default Category;