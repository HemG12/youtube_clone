import React, { useEffect, useState } from "react";
import './Recommended.css'
import Thum1 from '../../assets/thumbnail1.png'
import Thum2 from '../../assets/thumbnail2.png'
import Thum3 from '../../assets/thumbnail3.png'
import Thum4 from '../../assets/thumbnail4.png'
import Thum5 from '../../assets/thumbnail5.png'
import Thum6 from '../../assets/thumbnail6.png'
import Thum7 from '../../assets/thumbnail7.png'
import Thum8 from '../../assets/thumbnail8.png'

const Recommended = (categoryId) => {

    const [piData,setPiData] = useState([]);

    const fetchPi =async ()=>{
    const related_url =`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=IN&videoCategoryId=${categoryId}&key=${API_KEY}`
     await fetch(related_url).then(res=>res.json()).then(data=>setPiData(data.item));
}

     useEffect(()=>{
      fetchPi();
     },[])

    return(
        <div className="recommend">
            {piData.map((item,index)=>{
             return(
                <div key={index}className="side-video">
                <img src={Thum1} alt="" />
                <div className="info">
                    <h4> Roman vs rock</h4>
                    <p>Wreslemania</p>
                    <p>1234 views</p>
                </div>
              </div>
             )
            })}

          </div>
    )
}
export default Recommended