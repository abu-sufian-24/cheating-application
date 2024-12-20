
import assets from "../../assets/assets"
import "./RightSidebar.css"
function RightSidebar() {
  return (
    <div className="rs">
      <div className="rs-profile">
        <img src={assets.profile_img} alt="" />
        <h3>abu sufian <img src={assets.green_dot} alt="" className="dot" /></h3>
        <p>Hey, there i am abu sufian using chat app</p>
      </div>
      <hr />
      <div className="rs-media">
        <p>media</p>
        <div>
          <img src={assets.pic1} alt="" />
          <img src={assets.pic2} alt="" />
          <img src={assets.pic3} alt="" />
          <img src={assets.pic4} alt="" />
          <img src={assets.pic1} alt="" />
          <img src={assets.pic2} alt="" />
        </div>
      </div>
      <button>LogOut</button>
    </div>
  )
}

export default RightSidebar