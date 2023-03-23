import React from 'react';

function Quiz3(props) {
    let n=[];
    const cnt=9;

    for(let i=0;i<cnt+1;i++) n.push(i);
    return (
        <div>
            {props.Nav}
            <div class="div_Quiz3_contents">
                <div>
                    <h1>Quiz3</h1>
                    <br/><hr/><br/><br/><br/>
                </div>
                <table border="1">
                    <th><tr><td>n</td></tr><tr><td>n&sup2;</td></tr></th>
                    {n.map(
                        function(n){
                            let nSquare=n*n;
                            return(
                                <td>
                                    <tr><td>{n}</td></tr>
                                    <tr><td>{nSquare}</td></tr>
                                </td>
                            )
                        }
                    )}
                </table>
            </div>
        </div>
    );
}

export default Quiz3;