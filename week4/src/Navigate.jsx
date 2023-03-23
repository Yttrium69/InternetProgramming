import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Navigate(props) {
    const cnt=props.cnt;
    const week=props.week;
    const arr=[];

    const [selector, setSelector]=useState("");

    const nav=useNavigate();
    const goTo = (goTo) => {
        nav("/Quiz/"+goTo);
    };

    for(let i=0;i<cnt;i++){
        arr.push(i+1);
    }

    return (
        <div class="div_Navigate_rootBoard">
            <p class="title">12224431 임은혜</p>
            <p class="subTitle">{week+"주차 과제"}</p>
            <div class="div_Navigate_btnArea">
                {arr.map(
                    function(num){
                        return(
                            <button 
                            class={`${selector == num ? 'selector' : ''}`}
                            onClick={function(){
                                setSelector(num);
                                goTo(num);
                            }}
                            
                            >{"Quiz "+num}</button>
                        )
                    }
                )}
            </div>
        </div>
    );
}

export default Navigate;