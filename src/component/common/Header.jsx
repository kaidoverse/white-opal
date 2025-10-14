import React from 'react'
import Topbar from '../layout/Topbar'
import Navbar from './Navbar'
import Hero from '../layout/Hero'

const Header = () => {
    return (
        <header className='border-b border-gray-200'>
            {/*topbar*/}
            <Topbar />
            {/*navbar*/}
            <Navbar />
            {/* Hero */}
            {/* <Hero /> */}
        </header>
    )
}

export default Header