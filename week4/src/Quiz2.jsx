// import React from 'react';

// function Quiz2(props) {
//     const imgSrc=["/spade-2.png", "/spade-3.png","/spade-7.png","/spade-A.png"]
//     return (
//         <div class="div_Quiz2_rootBoard">
//             {props.Nav}
//             <div class="div_Quiz2_imgArr">
//                 {imgSrc.map(
//                     function(src){
//                         return(
//                             <img src={src} alt={src}/>
//                         )
//                     }
//                 )}
//             </div>
//         </div>
//     );
// }

// export default Quiz2;




import React from 'react';

function Quiz2(props) {
    let subArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let hwaArr = [];



    return (
        <div class="Quiz2">
            {props.Nav}
            <table border={1}>
            {subArr.map(
                function (num) {
                    let sub = num;
                    let hwa = num * 9 / 5 + 32;
                    return (
                        <div>
                            <tr>
                                <td>{sub}</td>
                                <td>{hwa}</td>
                            </tr>
                        </div>
                    )
                }
            )}
            </table>
        </div>
    );
}

export default Quiz2;