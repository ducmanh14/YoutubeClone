import React from 'react'
import './profile.css';
import SideNavbar from '../../Component/SideNavbar/sideNavbar';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Link } from 'react-router-dom';


const Profile = ({sideNavbar}) => {
  return (
    <div className='profile'>
        <SideNavbar sideNavbar={sideNavbar}/>

        <div className="profile_page">

            <div className="profile_top_section">
                <div className="profile_top_section_profile">
                    <img className='profile_top_section_img' src="https://yt3.googleusercontent.com/l5vxhDuExYW5firIfZt7VPNANUQ4wFQ4T7RL6DDoSW6Uao5aEdy-XvJu6xhJ_qeIR743Y_zm=s160-c-k-c0x00ffffff-no-rj"/>
                </div>
                <div className="profile_top_section_About">
                    <div className="profile_top_section_About_Name">MCK//NGER</div>
                    <div className="profile_top_section_info">
                        @hoanglongmck . 56 videos
                    </div>
                    <div className="profile_top_section_info">
                        Chào mừng bạn đến với Kênh YouTube chính thức của MCK//Nger!
Subscribe to my channel: metub.net/rptmck
                    </div>
                </div>
            </div>
            <div className="profile_videos">
                <div className="profile_videos_title">Videos &nbsp; <ArrowRightIcon/></div>

                <div className="profileVideos">

                    {/*------ div for a video --------*/}

                    <Link to={'/watch/8998'} className="profileVideo_block">
                        <div className="profileVideo_block_thumbnail">
                            <img className='profileVideo_block_thumbnail_img' src="https://i.ytimg.com/vi/dz6xe0xXqYE/hqdefault.jpg?sqp=-oaymwFACKgBEF5IWvKriqkDMwgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAHwAQH4Af4JgALQBYoCDAgAEAEYfyA0KDMwDw==&rs=AOn4CLC0y3oAKPI2jlVcurLJLgSNyrNAjw" />

                        </div>

                        <div className="profileVideo_block_detail">
                            <div className="profileVideo_block_detail_name">14. Anh Đã Ổn Hơn - RPT MCK | "99%" the album</div>
                            <div className="profileVideo_block_detail_about">27M . 2 Years ago</div>
                        </div>

                    </Link>


                    {/*------ div for a video --------*/}

                    <Link to={'/watch/8998'} className="profileVideo_block">
                        <div className="profileVideo_block_thumbnail">
                            <img className='profileVideo_block_thumbnail_img' src="https://i.ytimg.com/vi/Yw9Ra2UiVLw/hqdefault.jpg?sqp=-oaymwFBCNACELwBSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYAC0AWKAgwIABABGBwgLih_MA8=&rs=AOn4CLAt0whIRFTRF3Vgl5cLJO8x6RFRzg" />

                        </div>

                        <div className="profileVideo_block_detail">
                            <div className="profileVideo_block_detail_name">Chìm Sâu</div>
                            <div className="profileVideo_block_detail_about">91M . 3 Years ago</div>
                        </div>

                    </Link>


                    {/*------ div for a video --------*/}

                    <Link to={'/watch/8998'} className="profileVideo_block">
                        <div className="profileVideo_block_thumbnail">
                            <img className='profileVideo_block_thumbnail_img' src="https://i.ytimg.com/vi/Yw9Ra2UiVLw/hqdefault.jpg?sqp=-oaymwFBCNACELwBSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYAC0AWKAgwIABABGBwgLih_MA8=&rs=AOn4CLAt0whIRFTRF3Vgl5cLJO8x6RFRzg" />

                        </div>

                        <div className="profileVideo_block_detail">
                            <div className="profileVideo_block_detail_name">Chìm Sâu</div>
                            <div className="profileVideo_block_detail_about">91M . 3 Years ago</div>
                        </div>

                    </Link>


                </div>
            </div>

        </div>

    </div>
  )
}

export default Profile