import React from 'react'
import './homePage.css'
import { Link } from 'react-router-dom';
const HomePage = ({sideNavbar}) => {

  const options = ["All", "Music", "Gaming", "Live", "News","Football","Rap", "Watched", "New proposal",]
  return (
    <div className={sideNavbar?'homePage':'fullHomePage'}>

      <div className="homePage_options">
        {
          options.map((item, index) => {
            return (
              <div key={index} className="homePage_option">
                {item}
              </div>
            );
          })
        }
      </div>

      <div className={sideNavbar?"home_mainPage":"home_mainPageWithoutLink"}>

        <Link to={'/watch/9897'} className="youtube_Video">

          <div className="youtube_thumbnailBox">
            <img src="https://i.ytimg.com/vi/dz6xe0xXqYE/hqdefault.jpg?sqp=-oaymwFACKgBEF5IWvKriqkDMwgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAHwAQH4Af4JgALQBYoCDAgAEAEYfyA0KDMwDw==&rs=AOn4CLC0y3oAKPI2jlVcurLJLgSNyrNAjw" alt="thumbnail" className="youtube_thumbnailPic" />
            <div className="youtube_timingThumbnail">
              3:14
            </div>
          </div>

          <div className="youtubeTitleBox">
            <div className="youtubeTitleBoxProfile">
              <img src="https://yt3.ggpht.com/ytc/AIdro_lup6wq8MVTto8jQMYXZaXtQHT46ghA_4w2HXmE1mmPSrM=s68-c-k-c0x00ffffff-no-rj" alt="thumbProfile" className="youtube_thumbnail_Profile" />
            </div>

            <div className="youtubeTitleBox_Title">
              <div className="youtube_videoTitle">14. Anh Đã Ổn Hơn - RPT MCK | "99%" the album</div>
              <div className="youtube_channelName">MCK//NGER</div>
              <div className="youtube_views">27M</div>
            </div>

          </div>

        </Link>

        <Link to={'/watch/9897'} className="youtube_Video">

          <div className="youtube_thumbnailBox">
            <img src="https://i.ytimg.com/vi/z7O4GF_0Gs8/hq720.jpg?v=683eac28&sqp=COD_-8EG-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBEZeOZVZtd-Tpj-vM2pD3RxpFPgQ" alt="thumbnail" className="youtube_thumbnailPic" />
            <div className="youtube_timingThumbnail">
              3:50:29
            </div>
          </div>

          <div className="youtubeTitleBox">
            <div className="youtubeTitleBoxProfile">
              <img src="https://yt3.ggpht.com/ytc/AIdro_lup6wq8MVTto8jQMYXZaXtQHT46ghA_4w2HXmE1mmPSrM=s68-c-k-c0x00ffffff-no-rj" alt="thumbProfile" className="youtube_thumbnail_Profile" />
            </div>

            <div className="youtubeTitleBox_Title">
              <div className="youtube_videoTitle">DAILY STREAM</div>
              <div className="youtube_channelName">TUI TÊN BÔ</div>
              <div className="youtube_views">21N</div>
            </div>

          </div>

        </Link>

        <Link to={'/watch/9897'} className="youtube_Video">

          <div className="youtube_thumbnailBox">
            <img src="https://i.ytimg.com/vi/z7O4GF_0Gs8/hq720.jpg?v=683eac28&sqp=COD_-8EG-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBEZeOZVZtd-Tpj-vM2pD3RxpFPgQ" alt="thumbnail" className="youtube_thumbnailPic" />
            <div className="youtube_timingThumbnail">
              3:50:29
            </div>
          </div>

          <div className="youtubeTitleBox">
            <div className="youtubeTitleBoxProfile">
              <img src="https://yt3.ggpht.com/ytc/AIdro_lup6wq8MVTto8jQMYXZaXtQHT46ghA_4w2HXmE1mmPSrM=s68-c-k-c0x00ffffff-no-rj" alt="thumbProfile" className="youtube_thumbnail_Profile" />
            </div>

            <div className="youtubeTitleBox_Title">
              <div className="youtube_videoTitle">DAILY STREAM</div>
              <div className="youtube_channelName">TUI TÊN BÔ</div>
              <div className="youtube_views">21N</div>
            </div>

          </div>

        </Link>

        <Link to={'/watch/9897'} className="youtube_Video">

          <div className="youtube_thumbnailBox">
            <img src="https://i.ytimg.com/vi/z7O4GF_0Gs8/hq720.jpg?v=683eac28&sqp=COD_-8EG-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBEZeOZVZtd-Tpj-vM2pD3RxpFPgQ" alt="thumbnail" className="youtube_thumbnailPic" />
            <div className="youtube_timingThumbnail">
              3:50:29
            </div>
          </div>

          <div className="youtubeTitleBox">
            <div className="youtubeTitleBoxProfile">
              <img src="https://yt3.ggpht.com/ytc/AIdro_lup6wq8MVTto8jQMYXZaXtQHT46ghA_4w2HXmE1mmPSrM=s68-c-k-c0x00ffffff-no-rj" alt="thumbProfile" className="youtube_thumbnail_Profile" />
            </div>

            <div className="youtubeTitleBox_Title">
              <div className="youtube_videoTitle">DAILY STREAM</div>
              <div className="youtube_channelName">TUI TÊN BÔ</div>
              <div className="youtube_views">21N</div>
            </div>

          </div>

        </Link>

        <Link to={'/watch/9897'} className="youtube_Video">

          <div className="youtube_thumbnailBox">
            <img src="https://i.ytimg.com/vi/z7O4GF_0Gs8/hq720.jpg?v=683eac28&sqp=COD_-8EG-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBEZeOZVZtd-Tpj-vM2pD3RxpFPgQ" alt="thumbnail" className="youtube_thumbnailPic" />
            <div className="youtube_timingThumbnail">
              3:50:29
            </div>
          </div>

          <div className="youtubeTitleBox">
            <div className="youtubeTitleBoxProfile">
              <img src="https://yt3.ggpht.com/ytc/AIdro_lup6wq8MVTto8jQMYXZaXtQHT46ghA_4w2HXmE1mmPSrM=s68-c-k-c0x00ffffff-no-rj" alt="thumbProfile" className="youtube_thumbnail_Profile" />
            </div>

            <div className="youtubeTitleBox_Title">
              <div className="youtube_videoTitle">DAILY STREAM</div>
              <div className="youtube_channelName">TUI TÊN BÔ</div>
              <div className="youtube_views">21N</div>
            </div>

          </div>

        </Link>

        <Link to={'/watch/9897'} className="youtube_Video">

          <div className="youtube_thumbnailBox">
            <img src="https://i.ytimg.com/vi/z7O4GF_0Gs8/hq720.jpg?v=683eac28&sqp=COD_-8EG-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBEZeOZVZtd-Tpj-vM2pD3RxpFPgQ" alt="thumbnail" className="youtube_thumbnailPic" />
            <div className="youtube_timingThumbnail">
              3:50:29
            </div>
          </div>

          <div className="youtubeTitleBox">
            <div className="youtubeTitleBoxProfile">
              <img src="https://yt3.ggpht.com/ytc/AIdro_lup6wq8MVTto8jQMYXZaXtQHT46ghA_4w2HXmE1mmPSrM=s68-c-k-c0x00ffffff-no-rj" alt="thumbProfile" className="youtube_thumbnail_Profile" />
            </div>

            <div className="youtubeTitleBox_Title">
              <div className="youtube_videoTitle">DAILY STREAM</div>
              <div className="youtube_channelName">TUI TÊN BÔ</div>
              <div className="youtube_views">21N</div>
            </div>

          </div>

        </Link>


        

      </div>

    </div>
  )
}

export default HomePage