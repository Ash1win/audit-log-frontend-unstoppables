import { useState } from "react"
import { getPlanById } from "../services/fetchService"
import { useLocation } from "react-router-dom"
import { toast } from "react-toastify"
import { search, searchById } from "../services/fetchService2"


export default function GetByIdPage() {

    // console.log(useLocation().pathname)
    //


    const [id, setID] = useState('')

    const [logs, setLogs] = useState(null)

    const [opType, setOpType] = useState("id")

    function handleOpType(e) {
        setOpType(e.target.value)
    }

    function handleId(e) {
        setID(e.target.value)
    }

    function doGet() {

        if(opType === "id") {
            searchById(id).then((res) => {
                setLogs(res)
                console.log(res)
            })
        }else {
            search(id,opType).then((res) => {
                setLogs(res)
                console.log(res)
            })
        }

        
    }

    function doReset() {
        setID('')
        setLogs(null)
    }

    return (
        <div>
            <h3 class="text-center text-white text-lg pt-2"><b>Search Logs</b></h3>
            <hr class="my-5 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
           

            <div class="w-full max-w-full ">

                <div class="flex flex-row pt-5">
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
               
                    <button onClick={doGet} class="text-white bg-blue-700 hover:bg-blue-800 w-1/6 ml-5 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-1 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Search</button>
                    <button onClick={doReset} class="text-white bg-blue-700 hover:bg-blue-800 w-1/6 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-1 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Reset</button>
                
            </div>
            <div class=" mt-10 ml-5 overflow-x-auto relative shadow-md mb-20">

                <table class="w-full text-sm text-left text-gray-800 dark:text-gray-400 ">
                    <thead class="text-xs text-white bg-slate-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="py-3 pl-2">
                                Sr.No
                            </th>
                            <th scope="col" class="py-3 px-20">
                                Entity JSON
                            </th>
                            <th scope="col" class="py-3 ">
                                Modification Date
                            </th>
                            <th scope="col" class="py-3 ">
                                Operation
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            
                            logs && logs.map((log) => {
                                return (
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {log.id}
                                </th>
                                <td class="py-4 px-6">
                                    {log.operationType}
                                </td>
                                <td class="py-4 px-6">
                                    {log.entityJson}
                                </td>
                                <td class="py-4 px-6">
                                    {log.modificationDate}
                                </td>

                            </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>

        </div>
    )
}