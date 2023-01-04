import React from 'react'
import Logo from './logo'

export default function Navbar() {
    return (
        <nav className='flex justify-between'>
            <Logo />
            <ul className="flex sm:space-x-3 md:space-x-8 lg:space-x-8 xl:space-x-8 text-slate-400">
                <li className='hover:text-slate-200 cursor-pointer'>Features</li>
                <li className='hover:text-slate-200 cursor-pointer'>Team</li>
                <li className='hover:text-slate-200 cursor-pointer'>Sign In</li>
            </ul>
        </nav>
    )
}
