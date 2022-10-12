
import logoPLANit from "../images/logoPLANit.png"
import { NavLink } from "react-router-dom"

export default function NavigationBar() {

    return (


        <nav class=" gradient-header border-gray-200 px-2 sm:px-4 py-2.5  dark:bg-gray-900">
            <div class="container flex flex-wrap justify-between items-center mx-auto">

                <div href="#" class="flex items-center">

                    {/* PLANit Logo*/}
                    <a href="http://localhost:3000/"><img src={logoPLANit} class="h-16 w-48" alt="PLANit Logo" /></a>

                    {/* Logo */}
                    {/* <img src={logo2} class="ml-4 h-12 w-10" alt="Mobile Plan" /> */}

                </div>

                <div class="hidden w-full md:block md:w-auto" id="navbar-default">

                    {/*Navigation Bar*/}

                    <ul class="flex  p-4 mt-4 ">
                        <li>
                            <a href="http://localhost:3001" className="text-white bg-[#336f7b] p-3 hover:ring hover:ring-blue-500 hover:ring-offset-0 border-white border-2"
                                style={{
                                    borderRadius: 12
                                }}>Home</a>
                        </li>
                        <li>
                            <NavLink to="/app" className="text-white bg-[#336f7b] ml-3 p-3 hover:ring hover:ring-blue-500 hover:ring-offset-0 border-white border-2"
                                style={{
                                    borderRadius: 12
                                }}>
                                View Logs</NavLink>
                        </li>
                        <li>
                            <button
                                className="text-white bg-[#336f7b] ml-3 -mt-4 p-3 hover:ring hover:ring-blue-500 hover:ring-offset-0 border-white border-2"
                                style={{
                                    borderRadius: 12
                                }}
                                onClick={() => {
                                    window.open("http://localhost:3000/app", "_self")
                                }}
                            >
                                PLANit
                            </button>
                        </li>

                        {/* <li>
                                <NavLink to="getbyid" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                    Search Log</NavLink>
                            </li> */}

                    </ul>

                </div>
            </div>
        </nav >


    )
}
