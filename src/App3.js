import { NavLink } from "react-router-dom"
import img1 from "./images/MicrosoftTeams-image.png"
import mobileplanlogo from "./images/logo2.png"
import logo2 from "./images/logs3.png"

export default function App3() {
    
    return (
        <div class="overflow-x-hidden antialiased">

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
                                <NavLink to="app" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                    View Logs</NavLink>
                            </li>

                            {/* <li>
                                <NavLink to="app/getbyid" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                    Search Log</NavLink>
                            </li> */}

                        </ul>
                    </div>
                </div>
            </nav>


            {/* <!-- BEGIN MAIN SECTION --> */}

            <div class="relative items-center justify-center w-full overflow-x-hidden lg:pt-10 lg:pb-10 xl:pt-10 xl:pb-64">
                <div class="container flex flex-col items-center justify-between h-full max-w-6xl px-8 mx-auto -mt-32 lg:flex-row xl:px-0">
                    <div class="z-30 flex flex-col items-center w-full max-w-xl pt-48 text-center lg:items-start lg:w-1/2 lg:pt-20 xl:pt-40 lg:text-left">
                        
                        {/*Heading*/}

                        <h1 class="relative mb-4 text-3xl font-black leading-tight text-gray-900 sm:text-6xl xl:mb-8">
                            AUDIT LOGS.
                        </h1>
                        

                        <p class="pr-0 mb-8 text-base text-gray-600 sm:text-lg xl:text-xl lg:pr-20">
                            AN AUDIT LOG IS ESSENTIALLY A RECORD OF EVENTS AND CHANGES.
                            INFORMATION TECHNOLOGY DEVICES ACROSS YOUR NETWORK CREATE LOGS BASED ON EVENTS.
                            TYPICALLY REGARDING A SEQUENCE OF ACTIVITIES OR A SPECIFIC ACTIVITY.
                        </p>

                        <NavLink to="/app" className="relative self-start inline-block w-auto px-8 py-4 mx-auto mt-0 text-base font-bold text-white bg-indigo-600 border-t border-gray-200 rounded-md shadow-xl sm:mt-1 fold-bold lg:mx-0">
                            Get Started!
                        </NavLink>

                    </div>
                    
                    {/* Image In Main Section */}

                    <div class="relative z-50 flex flex-col items-end justify-center w-full h-full lg:w-1/2 ms:pl-10">
                        <div class="container relative left-0 w-full max-w-4xl lg:absolute xl:max-w-6xl lg:w-screen">
                            <img src={img1} class="object-cover lg:mt-24 xl:mt-16 lg:mb-0 lg:h-full lg:-ml-16" />
                            {/* h-auto mt-20 mb-20 ml-0 lg:mt-24 xl:mt-40 lg:mb-0 lg:h-full lg:-ml-12" */}
                        </div>
                    </div>
                </div>

                {/* <!-- MAIN SECTION END --> */}


                {/* <!-- Start Testimonials --> */}

                <div id="testimonials"
                    class="flex items-center justify-center w-full px-0 py-0 border-gray-200 mt-40">
                    <div class="max-w-6xl mx-auto">

                    </div>
                </div>

                {/* Footer */}

                <footer class="text-white bg-white border-t border-gray-200 h-1 ">

                    <div class="mt-5 text-center text-gray-500">
                        © 2022 Hansen Technologies. All rights reserved.
                    </div>

                    <div class="mt-2  text-center text-gray-600">
                        Created By Team  <span className="font-bold">UNSTOPPABLES</span>
                    </div>
                </footer>

            </div>
        </div>
    )
}


