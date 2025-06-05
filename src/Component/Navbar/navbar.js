import React, { useState } from 'react';
import './navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import YouTubeIcon from '@mui/icons-material/YouTube';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import PersonIcon from '@mui/icons-material/Person';
import SideNavbar from '../SideNavbar/sideNavbar';
import { Link,useNavigate } from 'react-router-dom';
const Navbar = ({setSideNavbarFunc,sideNavbar}) => {
    const [userPic,setUserpic] = useState("https://th.bing.com/th/id/R.9616f533f2174933ec04cc74164108f9?rik=Ucnk5KRnhC4duw&riu=http%3a%2f%2fwww.bugando.ac.tz%2fschools%2fSchool_Of_Pharmacy%2fimages%2fteams%2favatar.jpg&ehk=Na8vu%2fHzbfviY3bYO%2fRUXOHZ8JqNHAb8OcJ3fiz%2bpME%3d&risl=&pid=ImgRaw&r=0")
    const [navbarModal,setNavbarModal] = useState(false);
    const navigate = useNavigate ();

    const handleClickModal =()=>{
        setNavbarModal(prev=>!prev);
    }
const SideNavbarFunc=()=>{
    setSideNavbarFunc(!sideNavbar)
}
const handleprofile = () =>{
    navigate('/user/7697');
    setNavbarModal(false);
}
    return (
        <div className='navbar'>

            <div className="navbar-left">
                <div className="navbarHamberger" onClick={SideNavbarFunc}>
                    <MenuIcon sx={{color:"white"}} />
                </div>
                <Link to={'/'} className="navbar_youtubeImg">
                    <YouTubeIcon sx={{ fontSize: "34px"}} className='navbar_youtubeImage' />
                    <div className="navbar_utubeTitle">YouTube</div>
                </Link>
            </div>

            <div className="navbar-middle">
                <div className="navbar_searchBox">
                    <input type='text' placeholder='Search' className='navbar_searchBoxInput' />
                    <div className="navbar_searchIconBox"><SearchIcon sx={{fontSize:"28px",color:"white"}} /></div>    
                </div>

                <div className="navbar_mike">
                    <KeyboardVoiceIcon sx={{color:"white"}}/>
                </div>
            </div>

            <div className="navbar-right">
                <VideoCallIcon sx={{fontSize:"30px", cursor:"pointer", color:"white"}}/>
                <NotificationsActiveIcon sx={{fontSize:"30px", cursor:"pointer", color:"white"}}/>
                <img onClick={handleClickModal} src={userPic} className="navbar-right-logo" alt="Logo"  />

                { navbarModal &&
                    <div className="navbar-modal">
                    <div className="navbar-modal-option" onClick={handleprofile} >Profile</div>
                    <div className="navbar-modal-option">Logout</div>
                    <div className="navbar-modal-option">Login</div>

                </div>
                }
            </div>
        </div>
    )
}

export default Navbar

