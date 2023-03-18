import React from 'react';
import styled from "styled-components";


const colorArr=["#D01F1F", "#FF650F", "#FFE600", "#00BE13", "#366EFF", "#2000E8", "#4900E3"]
const colorIdx=[0, 1, 2, 3, 4, 5, 6]


const Div=styled.div`
    background-color:${colorArr[(props) => props.idx]};
`

function Quiz7(props) {
    return (
        <div>
            {props.Nav}
            {colorIdx.map(
                function(idx){
                    return(<Div i={idx}>{colorArr[idx]}</Div>)
                }
            )}
        </div>
    );
}

export default Quiz7;