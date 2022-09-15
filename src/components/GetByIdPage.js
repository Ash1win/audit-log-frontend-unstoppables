import { useState } from "react"
import { getPlanById } from "../services/fetchService"
import { useLocation } from "react-router-dom"
import { toast } from "react-toastify"


export default function GetByIdPage() {

    // console.log(useLocation().pathname)


    const[id, setID] = useState('')

    const[plan, setPlan] = useState({})

    function handleId(e){
        setID(e.target.value)
    }

    function doGet(){
        console.log("called++++++++++++++++++++++++++")
        getPlanById(id).then((res)=>{
            console.log(res)
            console.log(id)
            setPlan(res)
        }).catch((ex)=>{
            console.log(ex)
            toast.error("id does not exist")
        })
    }

    function doReset(){
        setID('')
        setPlan({})
    }

    return (
        <div>
                    <h3 class="text-center text-white text-lg pt-10"><b>Search Elements by ID</b></h3>
                    <hr class="my-5 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
                    <br>
                    </br>

                <div class="w-full max-w-sm">
                
                <div>
            <label for="name" class="block mb-2 text-sm font-medium text-white  dark:text-gray-300 pt-5">Name*</label>
            <input type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=" Enter the name" required=""
                >
        </input>
        </div>
        <div>
            <label for="description" class="block mb-2 text-sm font-medium text-white dark:text-gray-300">Description*</label>
            <input type="text" id="description" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter description" required=""
                >
            </input>
        </div>  
            
              <div class ="grid gap-6 mb-6 md:grid-cols-2 pt-5">
              <button onClick={doGet} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-1 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Search</button>
              <button onClick={doReset} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-1 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Reset</button>
              </div>
              </div>
              <div class=" mt-20 overflow-x-auto relative shadow-md">

<table class="w-full text-sm text-left text-gray-800 dark:text-gray-400 ">
    <thead class="text-xs text-white bg-slate-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
            <th scope="col" class="py-3 px-6">
                Sr.No
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
        </tr>
    </thead>
    <tbody>
        {
            plan &&  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
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
        }

    </tbody>
</table>
</div>

        </div>
    )
}