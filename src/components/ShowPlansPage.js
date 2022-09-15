import { useEffect, useMemo, useState } from "react"
import { createPlan, deletePlan, getAllPlans, getPlanById, updatePlan } from "../services/fetchService"
import { Navigate, Route, Routes } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom"
import Trash from "../icons/icons";
import { toast } from "react-toastify";


export default function ShowPlansPage() {

    const [AllMobilePlans, setAllMobilePlans] = useState([])
    const [mobilePlans, setMobilePlans] = useState([])
    const [incr, setIncr] = useState(5)
    const [startIndex, setStartIndex] = useState(0)
    const[endIndex, setEndIndex] = useState(5)

    // console.log(useLocation().pathname)

    
    function handleDelete(id){
        deletePlan(id).then((res) => {
            if(res == true) {
                toast.info("mobile plan deleted")
            }else {
                toast.error("connection error!")
            }
            decrement();
            getAllPlans().then((res) => {
                setAllMobilePlans(res.reverse());
            })
        })
        
    }



    useEffect(() => {
        getAllPlans().then((res) => {
            setAllMobilePlans(res.reverse());
            // setMobilePlans(res.slice(startIndex,endIndex))
            setMobilePlans(res.slice(startIndex,endIndex))
        })
        
    }, [startIndex, endIndex, AllMobilePlans])


    useMemo(()=>{

        setMobilePlans(AllMobilePlans.slice(startIndex,endIndex))

    },[AllMobilePlans, startIndex, endIndex])


    function increment(){
        if(startIndex+incr<AllMobilePlans.length){
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
        <div className="m-0 mt-0 mb-32">
            <div class=" relative sm:rounded-lg">
            <div className="flex w-120 justify-between">
                <button class="text-white p-2 bg-blue" onClick={decrement}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>


                <button class="text-white p-2 bg-blue" onClick={increment}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>
            </div>

<table class="w-120 text-sm text-left text-gray-800 dark:text-gray-400 ">
    <thead class="text-xs text-white bg-slate-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
            <th scope="col" class="py-3 px-6">
                Plan No.
            </th>
            <th scope="col" class="py-3 px-6">
                Name
            </th>
            <th scope="col" class="py-3 px-6">
                Description
            </th>
            <th scope="col" class="py-3 px-6">
                Validity
            </th>
            <td class="py-4 px-6">

            </td>
            <td class="py-4 px-6">

            </td>
        </tr>
    </thead>
    <tbody>
        { mobilePlans && mobilePlans.map((plan)=>{
            return (
                <tr class="bg-white dark:bg-gray-800">
            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {plan.id}
            </th>
            <td class="py-4 px-6">
                {plan.name}
            </td>
            <td class="py-4 px-6">
                {plan.description}
            </td>
            <td class="py-4 px-6">
                {plan.validity}
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