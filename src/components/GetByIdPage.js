import { search, searchById } from "../services/fetchService2"
import { useEffect, useMemo, useState } from "react"

export default function GetByIdPage() {

    const [id, setID] = useState('')
    const [logs, setLogs] = useState([])
    const [opType, setOpType] = useState("id")
    const [AllLogs, setAllLogs] = useState([])

    const [incr, setIncr] = useState(5)
    const [startIndex, setStartIndex] = useState(0)
    const [endIndex, setEndIndex] = useState(5)

    /*useEffect(() => {
        doGet().then((res) => {
            setAllLogs(res.reverse());
            setLogs(res.slice(startIndex, endIndex))
        })

    }, [startIndex, endIndex])*/

    useMemo(() => {

        setLogs(AllLogs.slice(startIndex, endIndex))

    }, [startIndex, endIndex])

    //Function for increment 

    function increment() {
        if (startIndex + incr < AllLogs.length) {
            setStartIndex(startIndex + incr)
            setEndIndex(endIndex + incr)
        }
    }

    //Function for decrement

    function decrement() {
        if (endIndex - incr > 0) {
            setStartIndex(startIndex - incr)
            setEndIndex(endIndex - incr)
        }
    }


    function handleOpType(e) {
        setOpType(e.target.value)
    }

    function handleId(e) {
        setID(e.target.value)
    }

    //Function to get the data and display on ui

    function doGet() {

        if (opType === "id") {
            searchById(id).then((res) => {
                setAllLogs(res.reverse())
                setLogs(res.slice(startIndex, endIndex))
                console.log(res)
            })
        } else {
            search(id, opType).then((res) => {
                setAllLogs(res.reverse())
                setLogs(res.slice(startIndex, endIndex))
                console.log(res)
            })
        }


    }

    //Function to reset the data on page

    function doReset() {
        setID('')
        setLogs(null)
    }

    return (

        <div>
            <div>

                {/*Heading*/}

                <h3 class="text-center text-white text-lg pt-2"><b>Search Logs</b></h3>
                <hr class="my-5 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>



                {/*Input Section*/}

                <div class="w-full flex flex-col justify-center content-center max-w-full ">

                    <div class="flex flex-row justify-center content-center pt-5">

                        <div>
                            <input type="text" id="name" onChange={handleId} value={id} class="bg-gray-50 border m-5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=" Enter Keyword" required="">
                            </input>
                        </div>

                        <div>
                            <select id="countries" onChange={handleOpType} value={opType} class="bg-gray-50 border m-5 ml-0 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-50 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>Select Type</option>
                                <option value="operation">opeartion</option>
                                <option value="entity">description</option>
                                <option value="id">id</option>

                            </select>
                        </div>

                    </div>

                    <div class="flex justify-center content-center">
                        <button onClick={doGet} class="text-white bg-blue-700 hover:bg-blue-800 w-28 ml-5 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-1 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Search</button>
                        <button onClick={doReset} class="text-white bg-blue-700 hover:bg-blue-800 w-28 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-1 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Reset</button>
                    </div>
                </div>

            </div>


            {/*Buttons for increment and decrement*/}

            <div className="w-120 flex justify-center pt-5 pb-0">
                <button class="text-white p-1 bg-blue" onClick={increment}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>


                <button class="text-white p-1 bg-blue" onClick={decrement}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>
            </div>



            {/*Table for showing details of selected mobile plan id */}

            {logs &&
                <div class="min-w-96 p-10 pt-4">

                    <table class="min-w-96 text-left text-sm text-left text-gray-800 dark:text-gray-400 ">

                        <thead class="text-xs text-white bg-slate-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="p-4 ">
                                    Sr.No
                                </th>
                                <th scope="col" class="p-4">
                                    Operation
                                </th>
                                <th scope="col" class="p-4 ">
                                    Entity JSON
                                </th>
                                <th scope="col" class="p-4 ">
                                    Modification Date
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                logs && logs.map((log) => {
                                    return (
                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <th scope="row" class="p-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {log.id}
                                            </th>
                                            <td class="p-4 ">
                                                {log.operationType}
                                            </td>
                                            <td class="p-4 ">
                                                {log.entityJson}
                                            </td>
                                            <td class="p-4 ">
                                                {log.modificationDate}
                                            </td>

                                        </tr>
                                    )
                                })
                            }
                        </tbody>

                    </table>

                </div>}

        </div>
    )
}