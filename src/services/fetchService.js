const url = "http://localhost:8080/mp"


//GET
export async function getAllPlans() {

  const response = await fetch(url, {
    method: 'GET'
  })

  return response.json()

}

//GET (plan by id)
export async function getPlanById(id) {
  const response = await fetch(url+"/"+id, {
    method: 'GET'
  })

  return response.json()
}

//POST
export async function createPlan(data) {

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    //redirect: 'follow',
    //referrerPolicy: 'no-referrer', 
    body: JSON.stringify(data)
  });
  return response.json();

}

//PATCH
export async function updatePlan(data) {

  const response = await fetch(url, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },

    body: JSON.stringify(data)
  });

  return response.ok;

}

//DELETE
export async function deletePlan(id) {
  const response = await fetch(url+"/"+id, {
    method: 'DELETE',
  })

  return response.ok
}