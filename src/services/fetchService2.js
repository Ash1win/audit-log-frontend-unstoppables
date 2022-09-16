const url = "http://localhost:8081/ac"

export async function getAllLogs() {
    
    const response = await fetch(url, {
        method: 'GET'
      })
    
      return response.json()
}

export async function search(keyword, optype) {
    let query = "/search?text="+keyword+"&type="+optype
    const response = await fetch(url+query, {
        method: 'GET'
    })

    return response.json()
}

export async function searchById(keyword) {
    // let query = "?text=\"id:\""+keyword+"&type=entity"
    let query = "/search?text="+keyword+"&type=id"
    const response = await fetch(url+query, {
        method: 'GET'
    })

    return response.json() 
}