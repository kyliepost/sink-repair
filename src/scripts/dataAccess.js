const applicationState = {
requests: []
}

const API = "http://localhost:8088"

export const fetchRequests = () => {
    return fetch(`${API}/requests`)
        .then(response => response.json())
        .then(
            (serviceRequests) => {
                // Store the external state in application state
                applicationState.requests = serviceRequests
            }
        )
}


// fetch ("http://localhost:5000/")
// .then ((response) => {
//     return response.json();
// })
// .then ((requestsData) => {
//     console.log(requestsData)

// }
// )