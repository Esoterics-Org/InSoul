import Room from './pages/Room/Room'
import Home from './pages/Home/Home'
import { SocketContextProvider } from './context/SocketContext'
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <SocketContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/room" element={<Room />} />
        </Routes>
      </SocketContextProvider>
    </BrowserRouter>
  )
}

export default App
