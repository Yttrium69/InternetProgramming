import React from 'react';

function Quiz2(props) {
    let subArr = [];
    const cnt=11;

    for(let i=0;i<cnt;i++){
        subArr.push(i);
    }


    return (
        <div class="div_Quiz2_roobBoard">
             {props.Nav}
             <div>
                <h1>Quiz2</h1>
                <br/><hr/><br/><br/><br/>
            </div>
            <div class="div_Quiz2_contents">
            <table>
                <tr>
                    <th>섭씨온도(&#186;C)</th>
                    <th>화씨온도(&#186;F)</th>
                </tr>
                {subArr.map(
                    function (num) {
                        let sub = num;
                        let hwa = num * 9 / 5 + 32;
                        return (
                            <tr>
                                <td>{sub}&#186;C</td>
                                <td>{hwa}&#186;F</td>
                            </tr>
                        )
                    }
                )}
            </table>
            </div>
        </div>
    );
}

export default Quiz2;