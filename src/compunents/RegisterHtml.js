import React from 'react';

const handleOnSubmit = event => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);
}

const handleOnChange = event => {
    console.log(event.target.value);
}
const handleOnBlur = event => {
    console.log(event.target.value);
}
const RegisterHtml = () => {
    return (
        <div className=''> 
        
        
            <form onSubmit={handleOnSubmit}>
                

                <br />
                <input onChange={handleOnChange} type="email" name="email" id="" placeholder="Enter Email" />

                <br /><br />

                <input onBlur={handleOnBlur} type="password" name="password" id="" placeholder="Enter Password" /> <br />

                <button className='btn btn-primary' type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegisterHtml;