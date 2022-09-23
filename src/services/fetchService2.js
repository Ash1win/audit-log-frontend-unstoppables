const url = "http://localhost:8081/ac"

// Get All Logs

export async function getAllLogs() {

    const response = await fetch(url, {
        method: 'GET'
    })

    return response.json()
}

// Search log with keyword and operation type

export async function search(keyword, optype) {
    let query = "/search?text=" + keyword + "&type=" + optype
    const response = await fetch(url + query, {
        method: 'GET'
    })

    return response.json()
}

// Search log wih Id

export async function searchById(keyword) {

    let query = "/search?text=" + keyword + "&type=id"
    const response = await fetch(url + query, {
        method: 'GET'
    })

    return response.json()
}