import React from 'react';

function Quiz4(props) {
    return (
        <div class="div_Quiz4_rootBoard">
            {props.Nav}
            <h1>This is h1 tag: Web Programming week 3<br/></h1>
            <ul id="list">
                <li>HTML</li>
                <li><strong>CSS</strong></li>
                <li>JavaScript</li>
            </ul>

            <p><br/>60점 이하는 F!</p>
        </div>
    );
}

export default Quiz4;