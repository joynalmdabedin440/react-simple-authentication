import React from 'react';
import { Outlet,Link } from 'react-router-dom';
const Main = () => {
    return (
        <div className='container'>
            <nav className='mt-3 h1 '>
                <Link className='text-decoration-none mx-2 ' to='/login'> Login</Link>
                <Link className='text-decoration-none' to='/register'>Register</Link>

            </nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;