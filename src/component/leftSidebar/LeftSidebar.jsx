
import { useState } from "react"
import assets from "../../assets/assets"
import "./LeftSidebar.css"
function LeftSidebar() {

  const [open, setOpen] = useState(false)
  return (
    <div className="ls">
      <div className="ls-top">
        <div className="ls-nav">
          <img src={assets.logo} alt="logo" className="logo" />

          <div onClick={() => setOpen(!open)} className="menu">
            <img src={assets.menu_icon} alt="logo" className="" />
            {open &&
              <div className="sub-menu">
                <p>Edit Profile</p>
                <hr />
                <p>LogOut</p>
              </div>
            }

          </div>
        </div>
        <div className="ls-search">
          <img src={assets.search_icon} alt="logo" />
          <input type="text" placeholder="Search here.." />
        </div>
      </div>
      <div className="ls-list">
        {Array(12).fill("").map((item, index) => {
          return <div key={index} className="friends">
            <img src={assets.profile_img} alt="" />
            <div>
              <p>Richard Sanford</p>
              <span>Hello, How Are You?</span>
            </div>
          </div>

        })}
      </div>
    </div>
  )
}

export default LeftSidebar