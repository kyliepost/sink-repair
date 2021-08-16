import { getRequests } from "./dataAccess.js"

// const mainContainer = document.querySelector("#container")

// mainContainer.addEventListener("click", click => {
//     if (click.target.id.startsWith("request--")) {
//         const [,requestId] = click.target.id.split("--")
//         deleteRequest(parseInt(requestId))
//     }
//     return `
//     <li>
//         ${request.description}
//         <button class="request__delete"
//                 id="request--${request.id}">
//             Delete
//         </button>
//     </li>
// `
// })


const convertRequestToListElemen = () => {

}

export const Requests = () => {
    const requests = getRequests()

    let html = `
        <ul>
            ${requests.map(convertRequestToListElemen)}
        </ul>
    `

    return html
}


