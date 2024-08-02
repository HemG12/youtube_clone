import React, { useEffect, useState } from "react";
import './PlayVideo.css'
import video from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import save from '../../assets/save.png'
import share from '../../assets/share.png'
import jack from '../../assets/jack.png'
import user from '../../assets/user_profile.jpg'
import { API_KEY, convert } from "../../data";
import moment from "moment";

const PlayVideo = ({videoId}) => {
    
    const [apiData,setApiData] = useState(null);
    
    const [channelData,setChannelData] = useState(null);

    const[commentData,setCommentData] =  useState([]);

    const fetchData = async () =>{
        // fetching video data
        const videoDetail = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
        await fetch(videoDetail).then(res=>res.json()).then(data => setApiData(data.items[0]));

    }
    
    const fetchChannel = async () =>{
        // fetching channel data
        const channelDetail = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`
       await fetch(channelDetail).then(res=>res.json()).then(data => setChannelData(data.items[0]));
      
       const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResult=50&videoId=${videoId}&key=${API_KEY}`
       await fetch(comment_url).then(res=>res.json()).then (data=>setCommentData(data.items));
    }

    
    
    useEffect(()=>{
      fetchData();
    },[])
    useEffect(()=>{
      fetchChannel();
    },[apiData])

    return(
    <div className="play-video">
     {/*<video src={video} controls autoPlay ></video>*/}
     <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
     <h3>{apiData?apiData.snippet.title:"Title Here"}</h3>
    <div className="video-info">
        <p>{apiData?convert(apiData.statistics.viewCount):"16K"} views &bull; {apiData?moment(apiData.snippet.publishedAt).fromNow():""}</p>
    <div>
    <span><img src={like} alt="" />{apiData?convert(apiData.statistics.likeCount):""}</span>
    <span><img src={dislike} alt="" /></span>
    <span><img src={share} alt="" />Share</span>
    <span><img src={save} alt="" />Save</span>
    </div>
    </div>
    <hr />
    <div className="publisher">
        <img src={channelData?channelData.snippet.thumbnails.default.url:""} alt="" />
        <div>
            <p>{apiData?apiData.snippet.channelTitle:""}</p>
            <span>{channelData?convert(channelData.statistics.subscriberCount):"1M"} Subscriber</span>
        </div>
        <button>Subscribe</button>
    </div>
    <div className="vid-discription">
        <p>{apiData?apiData.snippet.description.slice(0,250):"Description"}</p>
        <hr />
        <h4>{apiData?convert(apiData.statistics.commentCount):""} <strong>Comments</strong></h4>
       
        {commentData.map((item,index)=>{
          return(
            <div key={index} className="comment">
            <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
            <div>
                <h3>{item.snippet.topLevelComment.snippet.authorDisplayName}<span>1 day ago</span></h3>
                <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                <div className="comment-action">
                    <img src={like} alt="" />
                    <span>{convert(item.snippet.topLevelComment.snippet.likeCount)}</span>
                    <img src={dislike} alt="" />
                    
                </div>
            </div>
        </div>
    
          )  
        })}
        
    </div>
    </div>
    )
}

export default PlayVideo