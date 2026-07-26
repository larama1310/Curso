// 1) instalação
console.log(axios)

// 2) primeiro request
const getData = async () => {

    try {
        
        const response = await postFetch.get("/users", 
            // 4) definindo headers
            {
                headers: {
                    "Content-Type": "applications/json",
                    custom: "header",
                }
        })

        console.log(response)

        return response.data


    } catch (error) {
        console.log(error)
    }
}

getData()

// 3) imprimindo dados
const container = document.querySelector("#user-container")

const printData = async () => {

    const data  = await getData()

    data.forEach((user) => {

        const div = document.createElement("div")

        const nameElement = document.createElement("h2")
        nameElement.textContent = user.name

        div.appendChild(nameElement)

        const userEmail = document.createElement("p")
        userEmail.textContent = user.email
        
        div.appendChild(userEmail)
        
        container.appendChild(div)
    })

        

}

printData()

// 5) método post
const form = document.querySelector("#post-form")
const titleInput = document.querySelector("title")
const bodyInput = document.querySelector("#body")


form.addEventListener("submit", (e) => {
    
    e.preventDefault()

    postFetch.post("/posts", { //parte apagada por causa da base url
        title: titleInput.value, 
        body: bodyInput.value, 
        userId: 1
    })

})

// 6) global instance

