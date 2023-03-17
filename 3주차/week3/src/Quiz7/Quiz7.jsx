import React from 'react';
import styled from "styled-components";

const Div=styled.div`
    background-color:'blue';
`

function Quiz7(props) {
    return (
        <div>
            {props.Nav}
            <Div>가보자고</Div>
        </div>
    );
}

export default Quiz7;