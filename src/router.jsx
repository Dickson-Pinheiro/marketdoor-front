import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import LoginStore from "./pages/LoginStore";
import DashboardMarket from "./pages/DashboardMarket";
import DashboardStore from "./pages/DashboardStore";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/market/login" element={<Login />} />
                <Route path="/market/signup" element={<Signup />} />
                <Route path="/market/dash" element={<DashboardMarket />} />
                <Route path="/store/dash" element={< DashboardStore/>} />
                <Route path="/store/login" element={< LoginStore/>} />
            </Routes>
        </BrowserRouter>
    )

}