import Room from "./pages/Room/Room";
import Home from "./pages/Home/Home";
import Auth from "./pages/Auth/Auth";
import Error from "./pages/Error/Error";
import { SocketContextProvider } from "./context/SocketContext";
import AuthProvider from "./context/AuthProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <SocketContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/room" element={<Room />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </SocketContextProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
