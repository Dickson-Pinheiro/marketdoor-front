import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Signup from "./pages/signup";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/market/login" element={<Login />} />
                <Route path="/market/signup" element={<Signup />} />
            </Routes>
        </BrowserRouter>
    )

}