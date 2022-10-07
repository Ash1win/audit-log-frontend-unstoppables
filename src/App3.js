import { NavLink } from "react-router-dom"
import img1 from "./images/MicrosoftTeams-image.png"
import NavigationBar from "./components/navigationBar"


export default function App3() {

    return (
        <div class="overflow-x-hidden antialiased">

            <NavigationBar />

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

                        <NavLink to="/app" className="relative self-start inline-block w-auto px-8 py-4 mx-auto mt-0 text-base font-bold text-white bg-[#336f7b] border-t border-gray-200 rounded-md shadow-xl sm:mt-1 fold-bold lg:mx-0">
                            Get Started!
                        </NavLink>

                    </div>

                    {/* Image In Main Section */}

                    {/* <div class="relative flex flex-col items-end justify-center w-full lg:w-1/2 ms:pl-10">
                        <div class="relative left-0 w-full  max-w-4xl lg:absolute xl:max-w-6xl lg:w-screen" style={{
                            top: "-130px",


                        }}>
                            <img src={img1} class="object-cover h-100" />
                       
                        </div>
                    </div> 
                    */}

                    <div>
                        <img src={img1} class=" h-96 w-150 mt-32" />
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


