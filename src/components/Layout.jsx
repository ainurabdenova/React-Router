import { Link, Outlet } from 'react-router-dom'

import React from 'react'

export const Layout = () => {
    return (
        <div>
            <header>
                <Link to='/'>Home</Link>
                <Link to='/posts'>Blog</Link>
                <Link to='/about'>About</Link>
            </header>
            <main className='container'>
                <Outlet />
            </main>

            <footer className='container'>2022</footer>
        </div>
    )
}


