import React from "react";
import './sideNavbar.css'
import HomeIcon from '@mui/icons-material/Home';
import VideocamIcon from '@mui/icons-material/Videocam';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import HistoryIcon from '@mui/icons-material/History';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
const SideNavbar = ({sideNavbar}) => {
    return (
        <div className={sideNavbar?"home-sideNavbar":"homeSideNavbarHide"}>
            <div className="home_sideNavbarTop">
                <div className={'home_sideNavbarTopOption'}>
                    <HomeIcon />
                    <div className="home_sideNavbarTopOptionTitle">Home</div>
                </div>

                <div className={'home_sideNavbarTopOption'}>
                    <VideocamIcon />
                    <div className="home_sideNavbarTopOptionTitle">Shorts</div>
                </div>

                <div className={'home_sideNavbarTopOption'}>
                    <SubscriptionsIcon />
                    <div className="home_sideNavbarTopOptionTitle">Subscription</div>
                </div>

            </div>

            <div className="home_sideNavbarMiddle">
                <div className={'home_sideNavbarTopOption'}>
                    <div className="home_sideNavbarTopOptionTitle">You</div>
                    <ChevronRightIcon />
                </div>

                <div className={'home_sideNavbarTopOption'}>
                    <RecentActorsIcon />
                    <div className="home_sideNavbarTopOptionTitle">Your Channel</div>
                </div>

                <div className={'home_sideNavbarTopOption'}>
                    <HistoryIcon />
                    <div className="home_sideNavbarTopOptionTitle">History</div>
                </div>


                <div className={'home_sideNavbarTopOption'}>
                    <PlaylistPlayIcon />
                    <div className="home_sideNavbarTopOptionTitle">Playlists</div>
                </div>


                <div className={'home_sideNavbarTopOption'}>
                    <OndemandVideoIcon />
                    <div className="home_sideNavbarTopOptionTitle">Your videos</div>
                </div>


                <div className={'home_sideNavbarTopOption'}>
                    <WatchLaterIcon />
                    <div className="home_sideNavbarTopOptionTitle">Watch later</div>
                </div>


                <div className={'home_sideNavbarTopOption'}>
                    <ThumbUpIcon />
                    <div className="home_sideNavbarTopOptionTitle">Liked</div>
                </div>

            </div>

            <div className="home_sideNavbarMiddle">
                <div className="home_sideNavbarTopOption">
                    <div className="home_sideNavbarTopOptionTitleHeader">Subscription</div>
                </div>
            </div>

            <div className={'home_sideNavbarTopOption'}>
                <img className="home_sideNavbar_ImgLogo " src="https://yt3.googleusercontent.com/YaAFWY03ER0DfF77HAyMqNlRxmJiSEDq_I7ZF0MlcgRcVzOhIhZfB8QlwNhAuVXZesi2I2zy=s160-c-k-c0x00ffffff-no-rj" />
                <div className="home_sideNavbarTopOptionTitle">MixiGaming</div>
            </div>

            <div className={'home_sideNavbarTopOption'}>
                <img className="home_sideNavbar_ImgLogo " src="https://yt3.googleusercontent.com/c-Z7mIlntSpG6VyQ5ZqaPggqkZRhaySr-H5ZEazFN2iR1pP4eD1UGekwu0y--c4CSVhJJ1A4QT8=s160-c-k-c0x00ffffff-no-rj" />
                <div className="home_sideNavbarTopOptionTitle">Sơn Tùng M-TP</div>
            </div>

            <div className={'home_sideNavbarTopOption'}>
                <img className="home_sideNavbar_ImgLogo " src="https://yt3.googleusercontent.com/xUoDDq9NrCdtSvYGztioAkzmWxBL4XFMZwqQzqxnDkai08z8NVR0KcXCLt4c9_5hJ5JmTMiU=s160-c-k-c0x00ffffff-no-rj" />
                <div className="home_sideNavbarTopOptionTitle">PEWPEW</div>
            </div>
            
            <div className={'home_sideNavbarTopOption'}>
                <img className="home_sideNavbar_ImgLogo " src="https://yt3.googleusercontent.com/nxYrc_1_2f77DoBadyxMTmv7ZpRZapHR5jbuYe7PlPd5cIRJxtNNEYyOC0ZsxaDyJJzXrnJiuDE=s160-c-k-c0x00ffffff-no-rj" />
                <div className="home_sideNavbarTopOptionTitle">MrBeast</div>
            </div>


        </div>
    )
}

export default SideNavbar