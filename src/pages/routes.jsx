import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./home/home";
export const AppRouters = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
};