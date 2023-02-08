import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Todolist from "./pages/todolist/Todolist";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import TopBar from "./components/topbar/TopBar";
import Users from "./components/user.js";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";




function App() {
  const user=false;
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/check" element={<Users/>} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/settings" element={user ? <Settings /> : <Register />} />
        <Route path="/todolist" element={user ? <Todolist /> : <Register />} />
        <Route path="/post/:postId" element={<Single />} />
      </Routes>
    </Router>
  );
}
export default App;
