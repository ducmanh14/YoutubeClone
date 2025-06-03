import React from 'react'
import SideNavbar from '../../Component/SideNavbar/sideNavbar'
import HomePage from '../../Component/HomePage/homePage'
import './home.css'
const home = ({sideNavbar}) =>{
    return (
        <div className='home'>
            <SideNavbar sideNavbar={sideNavbar} />
            <HomePage sideNavbar={sideNavbar}/>

        </div>
    )
}
export default home