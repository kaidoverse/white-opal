import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Main from '../common/Main'
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
    return (
        <>
            {/*header */}
            <Header />
            {/*main */}
            {/* <Main /> */}
            <Outlet />
            {/*footer */}
            <Footer />
        </>
    )
}

export default UserLayout