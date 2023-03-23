import React from 'react';
import Navigate from './Navigate';

function Quiz1(props) {
    let arr=[];
    for(let i=1;i<7;i++){
        arr.push("header"+i);
    }

    return (
        <div class="div_Quiz1_rootBoard">
            {props.Nav}
            <div class="div_Quiz1_content">
            <div class="">
                {arr.map(
                    function(num){
                        return(
                            <p class={num}>{num}<br/></p>
                        )
                    }
                )}

             {arr.map(
                    function(num){
                        return(
                            <p class={num}>{num}<br/></p>
                        )
                    }
                )}
            </div>
            <div class="img_Quiz1" src="spongebob.png"></div>
            </div>
        </div>
    );
}

export default Quiz1;