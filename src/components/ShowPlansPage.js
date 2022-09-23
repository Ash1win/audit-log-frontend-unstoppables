import { useEffect, useMemo, useState } from "react"
import { getAllLogs } from "../services/fetchService2";

export default function ShowPlansPage() {

    const [AllLogs, setAllLogs] = useState([])
    const [logs, setLogs] = useState([])
    const [incr, setIncr] = useState(5)
    const [startIndex, setStartIndex] = useState(0)
    const [endIndex, setEndIndex] = useState(5)


    useEffect(() => {
        getAllLogs().then((res) => {
            setAllLogs(res.reverse());
            setLogs(res.slice(startIndex, endIndex))
        })

    }, [startIndex, endIndex])

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


    return (

        <div className="w-120 mb-32">

            {/*Heading*/}

            <h3 class="text-center text-white text-lg pt-1"><b>All Audit Logs</b></h3>
            <center><hr class="w-56 my-2 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr></center>

            <div class="w-120 flexflex-shrink-0">

                {/*Buttons for increment and decrement*/}

                <div className="w-120 flex justify-center">
                    <button class="text-white p-1 bg-blue" onClick={decrement}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>


                    <button class="text-white p-1 bg-blue" onClick={increment}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                </div>

                {/*Table to show all logs*/}

                <table class="mt-5 table-fixed text-sm text-left text-gray-800 dark:text-gray-400 ">

                    <thead class="text-xs text-white bg-slate-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr class="w-120">
                            <th scope="col" class="w-12 py-3 px-6">
                                Sr No.
                            </th>
                            <th scope="col" class="w-64 py-3 px-6">
                                Logs
                            </th>
                            <th scope="col" class="w-56 py-3 px-6">
                                Modification Date
                            </th>
                            <th scope="col" class="w-28 py-3 px-6">
                                Operation Type
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {logs && logs.map((log) => {
                            return (
                                <tr class="w-120 bg-white dark:bg-gray-800">
                                    <th scope="row" class="w-12 py-3 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {log.id}
                                    </th>
                                    <td class="w-64 py-3 px-6">
                                        {log.entityJson}
                                    </td>
                                    <td class="w-56 py-3 px-6">
                                        {log.modificationDate}
                                    </td>
                                    <td class="w-28 py-3 px-6">
                                        {log.operationType}
                                    </td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>

        </div>
    )
}