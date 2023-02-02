import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import app from '../firebase/firebase.init';

const auth = getAuth(app)

const LoginBootstrap = () => {
    const [success,setSuccess]= useState(false)
    const handleLogin = event => {
        event.preventDefault();
        setSuccess(false);
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setSuccess(true);
                console.log(user);

            })
            .catch((error) => {
            console.log('error',error);
        })
    }
    const resetPassword = () => {
        sendPasswordResetEmail(auth,)
            .then(() => {
            
            })
            .catch((error) => {
            console.log('error',error);
        })
    }
    return (
        <div className='m-5 '>
            <p className='text-success'>Please Login</p>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                {success && <p className='text-success'>You are successfully login</p>}
                <button className='btn btn-primary' type="submit">Login</button>
            </Form>
            <p><small>If you don't have any account please <Link to='/register'>Register</Link></small></p>
            <p>Do you forget your Password? <button type='button' className='btn btn-primary ' onClick={resetPassword}>Reset</button></p>

        </div>
    );
};

export default LoginBootstrap;