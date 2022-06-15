import { Outlet } from 'react-router-dom'
import React from 'react'
import { CustomLink } from './CustomLink';

const setActive = ({ isActive }) => isActive ? 'active-link' : '';



export const Layout = () => {
    return (
        <div>
            <header>
                <CustomLink to='/' >Home</CustomLink>
                <CustomLink to='/posts' >Blog</CustomLink>
                <CustomLink to='/about' >About</CustomLink>
            </header>
            <main className='container'>
                <Outlet />
            </main>

            <footer className='container'>2022</footer>
        </div >
    )
}


