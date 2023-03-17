import React from 'react';
import Navigate from '../All/Navigate';
import BtnArray from './BtnArray';

function Quiz1(props) {
    return (
        <div>
            {props.Nav}
            <BtnArray></BtnArray>
        </div>
    );
}

export default Quiz1;