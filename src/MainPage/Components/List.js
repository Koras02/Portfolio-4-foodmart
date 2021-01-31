import React, { useState } from 'react';
import {
    ListWrapper,
    ListHeaderH1,
    ListHeaderP,
    ListHeaderMenuli,
    Page
} from './ListStyle';
import food from './page/food';
import Now from './page/Now';
 

export function List() {
    const [comp, setComp] = useState(food)
     return (
         <>
        <ListWrapper>
            <ListHeaderH1>카테고리</ListHeaderH1>
            <ListHeaderP>카테고리별로 상품을 살펴보세요</ListHeaderP>
            <ListHeaderMenuli
              onClick={() => setComp(food)}
              spy={true}
            >
            식품</ListHeaderMenuli>
            <ListHeaderMenuli
              onClick={() => setComp(Now)}            
            >직배달</ListHeaderMenuli>
            <ListHeaderMenuli
              onClick={() => setComp()}            
            >식자제</ListHeaderMenuli>
            <ListHeaderMenuli
              onClick={() => setComp()}
            >식품</ListHeaderMenuli>
            <ListHeaderMenuli
              onClick={() => setComp()}
            >직배달</ListHeaderMenuli>
            <ListHeaderMenuli
              onClick={() => setComp()}
            >식자제</ListHeaderMenuli>
            <Page children={comp} />
        </ListWrapper>
        </>
     );
 }


 export default List;