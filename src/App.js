import { Route, Routes, useLocation } from "react-router-dom";
import GetByIdPage from "./components/GetByIdPage";
import ShowPlansPage from "./components/ShowPlansPage";
import { NavLink } from "react-router-dom";
import mobileplanlogo from "./images/logo2.png"
import logo2 from "./images/logs3.png"
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavigationBar from "./components/navigationBar";


export default function App() {

    let activeClassName = "text-white bg-blue-700"
    let isActive = false
    const location = useLocation()

    const [isShowActive, setIsShowActive] = useState(false)

    useEffect(() => {
        if (location.pathname == "/app") {
            setIsShowActive(true)
        } else {
            setIsShowActive(false)
        }
    }, [location])


    return (
        <div class="overflow-x-hidden antialiased">

            {/* Heading */}
            <NavigationBar />

            {/* Main Area */}

            < div className="pb-5 w-full h-full pt-5 flex flex-col flex-wrap content-center " >
                <Routes>
                    <Route index element={<ShowPlansPage />} />
                    <Route path="getbyid" element={<GetByIdPage />} />
                </Routes>
            </div >
            <ToastContainer />


            {/* Footer */}

            <footer class="px-4 text-white bg-white">

                <div class="pt-1 mt-5 text-center text-gray-500">
                    © 2022 Hansen Technologies. All rights reserved.
                </div>

                <div class="pt-2 pb-4 pt-4 mt-2 text-center text-gray-600">
                    Created By Team  <span className="font-bold">UNSTOPPABLES</span>
                </div>
            </footer>
        </div >
    )
}