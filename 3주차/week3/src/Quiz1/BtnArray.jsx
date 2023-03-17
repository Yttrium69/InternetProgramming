import React from 'react';

function BtnArray(props) {
    const arr=[1, 2, 3, 4, 5, 6, 7, 8, 9];
    const btnArr=arr.map(
        function(i){
            return(
                <button class="btn_BtnArray">{i}</button>
            )
        }
    )
    return (
        <div class="div_BtnArray_rootBoard">
            <h1>버튼을 만들자!</h1>
            {btnArr}
        </div>
    );
}

export default BtnArray;