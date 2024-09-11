import React from 'react';

function Login()
{
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log('Logging in {e.target(0).value}');
    }

    return(
        <form id="login-form" onSubmit={handleSubmit}>
            <input type="email" id="email"
            placeholder="E-Mail Address"/>
            <input type="password" id="password"/>
            <button>Login</button>
        </form>
    );
}
export default Login;