// import React from 'react';

// function Quiz3(props) {
//     let ret=prompt("enter your name");
//     let line;
//     if(ret=="토"||ret=="일"){
//         line="휴무";
//     }
//     else{
//         line="출근";
//     }
//     return (
//         <div>
//             {props.Nav}
//             <p>{ret+"는 "+line}</p>
//         </div>
//     );
// }

// export default Quiz3;


import React from 'react';

function Quiz3(props) {
    let n=[0, 1, 2, 3, 4, 5, 6, 7, 8,9]
    return (
        <div>
            {props.Nav}
            <table border={1}>
                <th><tr>n</tr><tr>n^2</tr></th>
                {n.map(
                    function(n){
                        let nSquare=n*n;
                        return(
                            <td>
                            <tr>{n}</tr>
                            <tr>{nSquare}</tr></td>
                        )
                    }
                )}
            </table>
        </div>
    );
}

export default Quiz3;