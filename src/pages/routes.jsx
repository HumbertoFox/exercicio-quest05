import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./home/home";
import { Details } from "./details/details";

export const AppRouters = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/details/:id" element={<Details />} />
            </Routes>
        </BrowserRouter>
    )
};