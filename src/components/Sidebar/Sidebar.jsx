import React from "react"
import './Sidebar.css'
import home from '../../assets/home.png'
import game from "../../assets/game_icon.png"
import automobiles from "../../assets/automobiles.png"
import sports from "../../assets/sports.png"
import entertainment from "../../assets/entertainment.png"
import music from "../../assets/music.png"
import blogs from "../../assets/blogs.png"
import news from "../../assets/news.png"
import pic1 from "../../assets/simon.png"
import pic2 from "../../assets/gerard.png"
import pic3 from "../../assets/tom.png"
import pic4 from "../../assets/megan.png"

const Sidebar = ({sidebar,category,setCategory}) =>{
return(
<div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
 <div className='sortcut'>
    <div className={`sidelinks ${category===0?"active":""}`} onClick={()=>setCategory(0)}>
        <img src={home} alt="" /><p>Home</p>
    </div>
    <div className={`sidelinks ${category ===20?"active":""}`} onClick={()=>setCategory(20)}>
        <img src={game} alt="" /><p>Game</p>
    </div>
    <div className={`sidelinks ${category ===2?"active":""}`} onClick={()=>setCategory(2)}>
        <img src={automobiles} alt="" /><p>Automobiles</p>
    </div>
    <div className={`sidelinks ${category ===17?"active":""}`} onClick={()=>setCategory(17)}>
        <img src={sports} alt="" /><p>Sports</p>
    </div>
    <div className={`sidelinks ${category ===24?"active":""}`} onClick={()=>setCategory(24)}>
        <img src={entertainment} alt="" /><p>Entertainment</p>
    </div>
    <div className={`sidelinks ${category ===22?"active":""}`} onClick={()=>setCategory(22)}>
        <img src={blogs} alt="" /><p>Blogs</p>
    </div>
    <div className={`sidelinks ${category ===10?"active":""}`} onClick={()=>setCategory(10)}>
        <img src={music} alt="" /><p>Music</p>
    </div>
    <div className={`sidelinks ${category ===25?"active":""}`} onClick={()=>setCategory(25)}>
        <img src={news} alt="" /><p>News</p>
    </div>
 </div>
 <hr />
 <h3>Subscribed</h3>
 <br />
 <div className="subs">
  <div className="sidelinks">
    <img src={pic1} alt="" /><p>Mr.Beast</p>
  </div>
  <div className="sidelinks">
    <img src={pic2} alt="" /><p>WWE</p>
  </div>
  <div className="sidelinks">
    <img src={pic3} alt="" /><p>Hemraj</p>
  </div>
  <div className="sidelinks">
    <img src={pic4} alt="" /><p>Carry</p>
  </div>
  </div>
</div>
)

}
export default Sidebar