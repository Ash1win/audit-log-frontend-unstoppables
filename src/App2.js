import { Route, Routes } from "react-router-dom";
import ShowPlansPage from "./components/ShowPlansPage";
import GetByIdPage from "./components/GetByIdPage";
import App from "./App";
import App3 from "./App3";

export default function App2() {
    return (
        <div>
            <Routes>
                <Route path="" element={<App3 />}/>
                <Route path="/app" element={<App />}>
                        <Route index element={<ShowPlansPage />} />
                        <Route path="getbyid" element={<GetByIdPage />} />
                </Route>
            </Routes>
        </div>
    )
}