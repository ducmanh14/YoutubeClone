import React from 'react'
import './video.css';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';

const Video = () => {
  return (
    <div className='video'>
        <div className="videoPostSection">
            <div className="video_youtube">
                <video width="400" controls autoPlay className='video_youtube_video'>
                    <source src={"https://youtu.be/BekVgKq-YNU"} type="video/mp4" />
                    <source src={"https://youtu.be/BekVgKq-YNU"} type="video/webm" />


                </video>


            </div>

            <div className="video_youtubeAbout">
                <div className="video_utubeTitle">{"javar for beginners"}</div>

                <div className="youtube_video_ProfileBlock">
                    <div className="youtube_video_ProfileBlock_left">
                        <div className="youtube_video_ProfileBlock_left_img">
                            <img className="youtube_video_ProfileBlock_left_image" src="https://yt3.ggpht.com/Y6vI-zM9XAYmbwz_Lk4HYJQ5aOpUtIIkSD1P5Ffzz1yvI0jDrn6fnmNDbIoSNfujs-J16pul_w=s88-c-k-c0x00ffffff-no-rj" />
                        </div>
                        <div className="youtubeVideo_subViews">
                            <div className="youtubePostProfileName">{"Khiem Official"}</div>
                            <div className="youtubePostProfileSubs">{"2024-07-09"}</div>
                        </div>
                        <div className="subscribeBtnYoutube">Subscribe</div>
                    </div>

                    <div className="youtube_video_likeBlock">
                        <div className="youtube_video_likeBlock_Like">
                            <ThumbUpOffAltIcon/>
                            <div className="youtube_video_likeBlock_noOfLikes">{32}</div>
                        </div>
                        <div className="youtubeVideoDivider"></div>

                        <div className="youtube_video_likeBlock_Like">
                            <ThumbDownOffAltIcon/>
                        </div>


                    </div>

                </div>
                <div className="youtube_video_About">
                    <div>2024-09-30</div>
                    <div>this cool</div>
                </div>

            </div>

            <div className="youtubeCommentSection">
                <div className="youtubeCommentSectionTitle">2 comments</div>

                <div className="youtubeSelfComment">
                    <img className='youtubeSelfCommentProfile' src="https://yt3.ggpht.com/6LjnDGjOPLBTzuIl2jmwM2hlgOtFsCMKyLgfWpbh6ZGx1q5bBszDMsPd7psjztC8AwTOZnRJFQ=s88-c-k-c0x00ffffff-no-rj"  />
                    <div className="addComment">
                        <input type="text" className='addCommentInput' placeholder='Add a comment' />
                        <div className="cancelSubmitComment">
                            <div className="cancelCommet">Cancel</div>
                            <div className="cancelCommet">Comment</div>
                        </div>
                    </div>
                </div>

                <div className="youtubeOthersComment">

                    <div className="youtubeSelfComment">
                        <img className='youtubeSelfCommentProfile' src="https://yt3.ggpht.com/6LjnDGjOPLBTzuIl2jmwM2hlgOtFsCMKyLgfWpbh6ZGx1q5bBszDMsPd7psjztC8AwTOZnRJFQ=s88-c-k-c0x00ffffff-no-rj"  />
                        <div className="others_commentSection">
                            <div className="others_commentSectionHeader">
                                <div className="ChannelName_comment">Manh</div>
                                <div className="commentTimingOthers">20224-09-30</div>
                            </div>

                            <div className="otherCommentSectionComment">
                                Anh Mạnh đẹp trai quá
                            </div>

                        </div>

                    </div>

                    <div className="youtubeSelfComment">
                        <img className='youtubeSelfCommentProfile' src="https://yt3.ggpht.com/6LjnDGjOPLBTzuIl2jmwM2hlgOtFsCMKyLgfWpbh6ZGx1q5bBszDMsPd7psjztC8AwTOZnRJFQ=s88-c-k-c0x00ffffff-no-rj"  />
                        <div className="others_commentSection">
                            <div className="others_commentSectionHeader">
                                <div className="ChannelName_comment">Manh</div>
                                <div className="commentTimingOthers">20224-09-30</div>
                            </div>

                            <div className="otherCommentSectionComment">
                                Anh Mạnh đẹp trai quá
                            </div>

                        </div>

                    </div>


                </div>

            </div>



        </div>

        <div className="videoSuggestions">
            <div className="videoSuggestionBlock">
                <div className="video_suggestion-thumbnail">
                    <img src="https://i.ytimg.com/vi/EQ8W0A6axSs/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDKcALh62785tSD2s-M-cKIrzJb9Q" className='video_suggestion_thumbnail_img' />
                </div>
                <div className="video_suggestion_About">
                    <div className="viveo_suggestion_About_title">vạn vật như muốn ta bên nhau</div>
                    <div className="viveo_suggestion_About_Profile">Rio Official</div>
                    <div className="viveo_suggestion_About_Profile">2,1M . 1 month ago</div>


                </div>
            </div>

            <div className="videoSuggestionBlock">
                <div className="video_suggestion-thumbnail">
                    <img src="https://i.ytimg.com/vi/EQ8W0A6axSs/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDKcALh62785tSD2s-M-cKIrzJb9Q" className='video_suggestion_thumbnail_img' />
                </div>
                <div className="video_suggestion_About">
                    <div className="viveo_suggestion_About_title">vạn vật như muốn ta bên nhau</div>
                    <div className="viveo_suggestion_About_Profile">Rio Official</div>
                    <div className="viveo_suggestion_About_Profile">2,1M . 1 month ago</div>


                </div>
            </div>

            <div className="videoSuggestionBlock">
                <div className="video_suggestion-thumbnail">
                    <img src="https://i.ytimg.com/vi/EQ8W0A6axSs/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDKcALh62785tSD2s-M-cKIrzJb9Q" className='video_suggestion_thumbnail_img' />
                </div>
                <div className="video_suggestion_About">
                    <div className="viveo_suggestion_About_title">vạn vật như muốn ta bên nhau</div>
                    <div className="viveo_suggestion_About_Profile">Rio Official</div>
                    <div className="viveo_suggestion_About_Profile">2,1M . 1 month ago</div>


                </div>
            </div>

        </div>

    </div>
  )
}

export default Video