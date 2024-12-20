import { Route, Routes } from "react-router-dom"
import Login from "./pages/login/Login"
import Chat from "./pages/chat/chat"
import ProfileUpdate from "./pages/profileUpdate/ProfileUpdate"


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/profileUpdate" element={<ProfileUpdate />} />
      </Routes>
    </>
  )
}

export default App