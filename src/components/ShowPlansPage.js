import { useEffect, useMemo, useState } from "react"
import { createPlan, deletePlan, getAllPlans, getPlanById, updatePlan } from "../services/fetchService"
import { Navigate, Route, Routes } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom"
import Trash from "../icons/icons";
import { toast } from "react-toastify";


export default function ShowPlansPage() {

    const [AllLogs, setAllLogs] = useState([
        {
            "id" : "1",
            "logs" : 'id:"9006",name:"Monthly pack",description:"2 gb/par day",validity:28',
            "modification_date" : "2022-09-14 12:29:04.946000",
            "operation_type" : "CREATE"
        },
        
        {
            "id" : "2",
            "logs" : 'id:"9006",name:"Monthly pack",description:"2 gb/par day",validity:28',
            "modification_date" : "2022-09-14 12:29:04.946000",
            "operation_type" : "CREATE"
        },
        
        {
            "id" : "3",
            "logs" : 'id:"9006",name:"Monthly pack",description:"2 gb/par day",validity:28',
            "modification_date" : "2022-09-14 12:29:04.946000",
            "operation_type" : "CREATE"
        },
        
        {
            "id" : "4",
            "logs" : 'id:"9006",name:"Monthly pack",description:"2 gb/par day",validity:28',
            "modification_date" : "2022-09-14 12:29:04.946000",
            "operation_type" : "CREATE"
        },
        
        {
            "id" : "5",
            "logs" : 'id:"9006",name:"Monthly pack",description:"2 gb/par day",validity:28',
            "modification_date" : "2022-09-14 12:29:04.946000",
            "operation_type" : "CREATE"
        },
        
        {
            "id" : "6",
            "logs" : 'id:"9006",name:"Monthly pack",description:"2 gb/par day",validity:28',
            "modification_date" : "2022-09-14 12:29:04.946000",
            "operation_type" : "CREATE"
        },
        
        {
            "id" : "7",
            "logs" : 'id:"9006",name:"Monthly pack",description:"2 gb/par day",validity:28',
            "modification_date" : "2022-09-14 12:29:04.946000",
            "operation_type" : "CREATE"
        },
        
        {
            "id" : "8",
            "logs" : 'id:"9006",name:"Monthly pack",description:"2 gb/par day",validity:28',
            "modification_date" : "2022-09-14 12:29:04.946000",
            "operation_type" : "CREATE"
        },
        
        {
            "id" : "9",
            "logs" : 'id:"9006",name:"Monthly pack",description:"2 gb/par day",validity:28',
            "modification_date" : "2022-09-14 12:29:04.946000",
            "operation_type" : "CREATE"
        },
        
        {
            "id" : "10",
            "logs" : 'id:"9006",name:"Monthly pack",description:"2 gb/par day",validity:28',
            "modification_date" : "2022-09-14 12:29:04.946000",
            "operation_type" : "CREATE"
        },
        
        {
            "id" : "11",
            "logs" : 'id:"9006",name:"Monthly pack",description:"2 gb/par day",validity:28',
            "modification_date" : "2022-09-14 12:29:04.946000",
            "operation_type" : "CREATE"
        },
        
        {
            "id" : "12",
            "logs" : 'id:"9006",name:"Monthly pack",description:"2 gb/par day",validity:28',
            "modification_date" : "2022-09-14 12:29:04.946000",
            "operation_type" : "CREATE"
        },
        
        {
            "id" : "13",
            "logs" : 'id:"9006",name:"Monthly pack",description:"2 gb/par day",validity:28',
            "modification_date" : "2022-09-14 12:29:04.946000",
            "operation_type" : "CREATE"
        },
        
        {
            "id" : "14",
            "logs" : 'id:"9006",name:"Monthly pack",description:"2 gb/par day",validity:28',
            "modification_date" : "2022-09-14 12:29:04.946000",
            "operation_type" : "CREATE"
        },
        
        {
            "id" : "15",
            "logs" : 'id:"9006",name:"Hotstart subscription pack",description:"2 gb/par day",validity:28',
            "modification_date" : "2022-09-14 12:29:04.946000",
            "operation_type" : "CREATE"
        },

        
        {
            "id" : "16",
            "logs" : 'id:"9006",name:"Hotstart subscription pack",description:"2 gb/par day",validity:28',
            "modification_date" : "2022-09-14 12:29:04.946000",
            "operation_type" : "CREATE"
        }

        ])
    const [logs, setLogs] = useState([])
    const [incr, setIncr] = useState(7)
    const [startIndex, setStartIndex] = useState(0)
    const[endIndex, setEndIndex] = useState(7)



    useEffect(() => {
        getAllPlans().then((res) => {
            setAllLogs(res.reverse());
            setLogs(res.slice(startIndex,endIndex))
        })
        
    }, [startIndex, endIndex, AllLogs])


    useMemo(()=>{

        setLogs(AllLogs.slice(startIndex,endIndex))

    },[AllLogs, startIndex, endIndex])


    function increment(){
        if(startIndex+incr<AllLogs.length){
            setStartIndex(startIndex + incr)
            setEndIndex(endIndex + incr)
        }
    }

    function decrement(){
        if(endIndex-incr>0){
            setStartIndex(startIndex-incr)
            setEndIndex(endIndex-incr)
        }
    }

    return (
        
        <div className="w-120 mb-32">

                <h3 class="text-center text-white text-lg pt-1"><b>All Audit Logs</b></h3>
                    <center><hr class="w-56 my-2 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr></center>
                <div class="w-120 flexflex-shrink-0">
           
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

        <table class="mt-5 table-fixed text-sm text-left text-gray-800 dark:text-gray-400 ">
            <thead class="text-xs text-white bg-slate-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr class="w-120">
                    <th scope="col" class="w-12 py-3 px-6">
                        Sr No.
                    </th>
                    <th scope="col" class="w-92 py-3 px-6">
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
                { logs && logs.map((log)=>{
                    return (
                        <tr class="w-120 bg-white dark:bg-gray-800">
                    <th scope="row" class="w-12 py-3 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {log.id}
                    </th>
                    <td class="w-92 py-3 px-6">
                        {log.logs}
                    </td>
                    <td class="w-56 py-3 px-6">
                        {log.modification_date}
                    </td>
                    <td class="w-28 py-3 px-6">
                        {log.operation_type}
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