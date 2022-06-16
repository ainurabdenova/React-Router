import React from 'react'
import { Outlet, Link } from 'react-router-dom'


export const Aboutpage = () => {
    return (
        <div>
            <h1>About us</h1>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <ul>
                <li><Link to="contacts">Our Contacts</Link></li>
                <li><Link to="team">Our Team</Link></li>

            </ul>

            {/* <Routes>
                <Route path="contacts" element={<p>Our contact</p>} />
                <Route path="team" element={<p>Our team</p>} />
            </Routes> */}
            <Outlet />
        </div>
    )
}
