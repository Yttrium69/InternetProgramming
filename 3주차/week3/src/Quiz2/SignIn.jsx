import React from 'react';

function SignIn(props) {
    return (
        <div>
            <p>ID</p>
            <input type='text'></input>
            <p>password</p>
            <input type='text' maxlength='8'></input>
        </div>
    );
}

export default SignIn;