import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification } from "firebase/auth";
import app from '../firebase/firebase.init';
import { Link } from 'react-router-dom';

const auth = getAuth(app);



const RegisterReactBoostrap = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const [password, setPassword] = useState('');
    const handleOnSubmit = event => {

        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password)) {
            setPassword('Enter Your password At least one lowercase letter At least one uppercase letter At least one digit Minimum length of 8 characters');
           
            return;     
        }
        setPassword('');


        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
            setEmail('Enter email address \' yourname1-9@gmail.com\'')
            return;
        }

        setEmail('')



        createUserWithEmailAndPassword(auth, email, password)
            .then((user) => {
                console.log(user.user);
                setSuccess(true);
                form.reset();
                emailVerification();
            })
            .catch((error) => {
                console.error("error", error)
                setPassword(error.message)
                setSuccess(false)
            })
        

    }

    const emailVerification = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
            alert("please verify your email.")
        })
    }

    return (
        <div className='mx-auto w-50'>
           
            <Form onSubmit={handleOnSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>

                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                    <p className="text-danger">{email}</p>
                </Form.Group>
               

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" required />
                    {success && <p className='text-success'>User create successfully.</p>}
                    <p className="text-danger">{password}</p>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">

                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            <p><small>If you already have an account please <Link to='/login'>Login</Link></small></p>
        </div>
    );
};

export default RegisterReactBoostrap;