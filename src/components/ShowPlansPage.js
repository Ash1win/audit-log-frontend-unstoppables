import { useEffect, useMemo, useState } from "react"
import { getAllLogs } from "../services/fetchService2";
import { toast } from "react-toastify";


export default function ShowPlansPage() {

    const [AllLogs, setAllLogs] = useState([])
    const [logs, setLogs] = useState([])
    const [incr, setIncr] = useState(8)
    const [startIndex, setStartIndex] = useState(0)
    const [endIndex, setEndIndex] = useState(7)
    const [srchType, setSrchType] = useState('id')
    const [searchText, setSearchText] = useState('')
    const [isSearching, setIsSearching] = useState(false)
    const [iVal, setIVal] = useState(8)

    const [sAllsrch, setSAllsrch] = useState('')
    const [sCurrsrch, setSCurrsrch] = useState('')

    //increment decrement states pagination for search
    const [si, setSi] = useState(0) //start index
    const [ee, setEe] = useState(7) //end index


    useEffect(() => {
        getAllLogs().then((res) => {
            setAllLogs(res.reverse());
            setLogs(res.slice(startIndex, endIndex))
        })

    }, [startIndex, endIndex])

    useMemo(() => {

        setLogs(AllLogs.slice(startIndex, endIndex))

    }, [startIndex, endIndex])

    useMemo(() => {
        setSCurrsrch(sAllsrch.slice(si, ee))
        console.log(si+' '+ee)
        
    }, [si, ee])

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


    function handleSearchSelect(e) {
        setSrchType(e.target.value)
    }


    function handleSearch(e) {
        setSearchText(e.target.value)
    }


    function search() {
        console.log(searchText)
        if (searchText === '') {
            setIsSearching(false)
        } else {
            setIsSearching(true)
        
            if (srchType === 'id') {
                if (isNaN(searchText)) {
                    toast.error("ID should be a number")
                    return;
                }
                console.log(AllLogs)
                let searchResult = AllLogs.filter((logs) => {
                    // logs.entityJson.toLowerCase().includes(searchText.toLowerCase())
                    let myString = logs.entityJson.toLowerCase();
                    let word = searchText.toLowerCase();
                    let pattern = `\\b${word}\\b`;
                    let regExp = new RegExp(pattern, 'g');
                    let isMatch = regExp.test(myString)
                    return isMatch;
                    
                })
                console.log(searchResult)
                setSAllsrch(searchResult)
                setSi(0)
                setEe(7)
                setSCurrsrch(searchResult.slice(si, ee))
            } else if (srchType === 'operation') {
                let searchResult = AllLogs.filter((logs) => logs.operationType.toLowerCase().includes(searchText.toLowerCase()))
                console.log(searchResult)
                setSAllsrch(searchResult)
                setSi(0)
                setEe(7)
                setSCurrsrch(searchResult.slice(si, ee))
            } else if (srchType === 'entity') {
                let searchResult = AllLogs.filter((logs) => logs.entityJson.toLowerCase().includes(searchText.toLowerCase()))
                console.log(searchResult)
                setSAllsrch(searchResult)
                setSi(0)
                setEe(7)
                setSCurrsrch(searchResult.slice(si, ee))
            }
        }

    }


    function sIncrement(){
        if((sAllsrch.length - si) <= iVal) {
            if(si < sAllsrch.length-1) {
                setSi(si++)
            }
            setEe(sAllsrch.length)
        }else {
            setSi(si+iVal)
            setEe(ee+iVal)
        }
        console.log("sIncr")
    }

    function sDecrement(){
        if((si-iVal) >= 0) {
            setSi(si-iVal)
            setEe(ee-iVal)
        }
        console.log("sDcr")

    }


    return (

        <div className="m-0 mt-0 mb-24">

            {/*Heading*/}

            <h3 class="text-center text-gray-800 text-lg pt-1"><b>All Audit Logs</b></h3>
            <center><hr class="w-56 my-2 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr></center>

            <div class="flex flex-col p-10 pt-0">

                <div>
                    <div class="flex">
                        {/* <label for="search-dropdown" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Your Email</label> */}
                        {/* <button id="dropdown-button" data-dropdown-toggle="dropdown" class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">All categories <svg aria-hidden="true" class="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button> */}
                        <select onChange={handleSearchSelect} className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100" aria-labelledby="dropdown-button">
                            <option selected value="id" className="inline-flex py-2 px-4 w-full hover:bg-gray-100">Plan ID</option>
                            <option value="operation" >Operation</option>
                            <option value="entity" >Logs </option>
                        </select>
                        <div id="dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top">

                        </div>
                        <div class="relative w-full">
                            <input type="search" id="search-dropdown" value={searchText} onChange={handleSearch} class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300"
                                placeholder="Search for Audit Logs" />

                            {isSearching && <button
                                className="text-red-500 text-3xl absolute top-0 shadow-sm"
                                style={{ right: 50 }}
                                onClick={() => {
                                    setSearchText('')
                                    setIsSearching(false)
                                }}
                            >
                                x
                            </button>}

                            <button type="submit" onClick={search} className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-[#336f7b] rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <svg aria-hidden="true" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                <span class="sr-only">Search</span>
                            </button>
                            {/* style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(897px, 5637px, 0px);" */}
                        </div>
                    </div>
                </div>



                {/*Buttons for increment and decrement*/}

                { !isSearching && <div className="w-120 flex justify-center">
                    <button class="text-gray-800 p-1 bg-blue" onClick={decrement}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>


                    <button class="text-gray-800 p-1 bg-blue" onClick={increment}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                </div>}


                { isSearching && <div className="w-120 flex justify-center">
                    <button class="text-black p-1 bg-blue" onClick={sDecrement}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>


                    <button class="text-black p-1 bg-blue" onClick={sIncrement}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                </div>}

                {/*Table to show all logs*/}

                { !isSearching && <table class="w-full table-fixed text-sm text-left text-gray-800 dark:text-gray-400 ">

                    <thead class="text-xs text-white gradient-header uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="py-3 px-6 w-16">
                                Sr No.
                            </th>
                            <th scope="col" class="py-3 px-6 w-64">
                                Logs
                            </th>
                            <th scope="col" class="py-3 px-6 w-32">
                                Modification Date
                            </th>
                            <th scope="col" class="py-3  w-16">
                                Operation Type
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {logs && logs.map((logs) => {
                            return (
                                <tr class="bg-white dark:bg-gray-800">
                                    <th scope="row" class="py-2 px-6 w-16 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {logs.id}
                                    </th>
                                    <td class="py-2 px-6 w-64">
                                        {logs.entityJson}
                                    </td>
                                    <td class="py-2 px-6 w-32">
                                        {new Date(logs.modificationDate).toDateString()}
                                        <span>  </span>
                                        {new Date(logs.modificationDate).toLocaleTimeString()}
                                        <span> IST</span>
                                    </td>
                                    <td class="py-2 px-6 w-16 ">
                                        {logs.operationType}
                                    </td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>}

                {isSearching && <table class="w-full table-fixed text-sm text-left text-gray-800 dark:text-gray-400 ">

                    <thead class="text-xs text-white gradient-header uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="py-3 px-6 w-16">
                                Sr No.
                            </th>
                            <th scope="col" class="py-3 px-6 w-64">
                                Logs
                            </th>
                            <th scope="col" class="py-3 px-6 w-32">
                                Modification Date
                            </th>
                            <th scope="col" class="py-3  w-16">
                                Operation Type
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {sCurrsrch && sCurrsrch.map((logs) => {
                            return (
                                <tr class="bg-white dark:bg-gray-800">
                                    <th scope="row" class="py-2 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white w-16">
                                        {logs.id}
                                    </th>
                                    <td class="py-2 px-6 w-64">
                                        {logs.entityJson}
                                    </td>
                                    <td class="py-2 px-6 w-32">
                                    {new Date(logs.modificationDate).toDateString()}
                                        <span>  </span>
                                        {new Date(logs.modificationDate).toLocaleTimeString()}
                                        <span> IST</span>
                                    </td>
                                    <td class="py-2 px-6 w-16">
                                        {logs.operationType}
                                    </td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>}
                {(sCurrsrch.length <= 0 && isSearching) && <div class="p-4 mb-4 mt-4 text-sm text-yellow-700 bg-yellow-100 rounded-lg dark:bg-yellow-200 dark:text-yellow-800" role="alert">
                    <span class="font-medium">No logs found !</span> Change a few things up and try searching again.
                </div>}

            </div>

        </div>
    )
}