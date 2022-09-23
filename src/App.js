import { Route, Routes, useLocation } from "react-router-dom";
import GetByIdPage from "./components/GetByIdPage";
import ShowPlansPage from "./components/ShowPlansPage";
import { NavLink } from "react-router-dom";
import mobileplanlogo from "./images/logo2.png"
import logo2 from "./images/logs3.png"
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


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
        <div>

            {/* Heading */}

            <nav class="bg-white-600 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
                <div class="container flex flex-wrap justify-between items-center mx-auto">

                    <div href="#" class="flex items-center">
                        
                        {/* Hansen Logo*/}
                        <a href="http://localhost:3000/"><img src={mobileplanlogo} class="h-12 w-48" alt="Hansen Tech." /></a>

                        {/* Logo */}
                        <img src={logo2} class="ml-4 h-12 w-10" alt="Mobile Plan" />

                    </div>

                    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                        
                        {/*Navigation Bar*/}
                        
                        <ul class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a href="http://localhost:3001" className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
                            </li>
                            <li>
                                <NavLink to="" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                    View Logs</NavLink>
                            </li>

                            <li>
                                <NavLink to="getbyid" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                    Search Log</NavLink>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>


            {/* Main Area */}

            <div className="pb-5 w-full h-full pt-5 flex flex-col flex-wrap content-center bg-slate-400">
                <Routes>
                    <Route index element={<ShowPlansPage />} />
                    <Route path="getbyid" element={<GetByIdPage />} />
                </Routes>
            </div>
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
        </div>
    )
}