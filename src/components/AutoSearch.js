import { useEffect, useState } from "react"

export default function AutoSearch({setShowAutoComp, AllLogs, setSearchText, searchText, srchType, search, search2}) {

    const [suggestionList, setSuggestionList] = useState([])
    useEffect(() => {
        if(srchType === 'id' && !isNaN(searchText)) {
            let list = []
            AllLogs.map((log) => {
                try {
                    let obj = JSON.parse(log.entityJson)
                    console.log(JSON.parse(log.entityJson))
                    if((obj.id+' ').includes(searchText)) {
                        if(!list.includes(''+obj.id)){
                            list.push(''+obj.id)
                        }
                    }
                } catch(e) {
                    console.log(e)
                    // if(log.entityJson.includes('id : '+searchText)) {
                    //     if(!list.includes(searchText.substring(21,25))) {
                    //         list.push(searchText.substring(21,25))
                    //     }
                    // }
                } 
            })
            setSuggestionList(list)
        }

        if(srchType === 'operation') {
            let oprns = ['create', 'delete', 'update']
            let list = []
            oprns.map((op) => {
                if(op.includes(searchText)) {
                    list.push(op)
                }
            })
            setSuggestionList(list)
        }else if(srchType === 'entity') {
            let list = []
            AllLogs.map((log) => {
                if(log.entityJson.toLowerCase().includes(searchText.toLowerCase())) {
                    list.push(log.entityJson)
                }
            })
            setSuggestionList(list)
        }

        if(searchText === ''){
            setSuggestionList([])
        }
    }, [searchText])

    return (
    <div className="auto-search-container">
            <ul>
                { suggestionList.length > 0 && suggestionList.map((res) => {
                    return <li onClick={() => {
                        setSearchText(res)
                        // search()
                        setShowAutoComp(false)
                        search2(res)
                    }} > {res} </li>
                }) }
            </ul>
    </div>)
}