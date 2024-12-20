import ChatBox from "../../component/chatBox/ChatBox"
import LeftSidebar from "../../component/leftSidebar/LeftSidebar"
import RightSidebar from "../../component/rightSidebar/RightSidebar"
import "./Chat.css"

function Chat() {
  return (
    <div className="chat">
      <div className="chat-container">
        <LeftSidebar />
        <ChatBox />
        <RightSidebar />
      </div>

    </div>
  )
}

export default Chat