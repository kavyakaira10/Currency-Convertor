let baseUrl = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json"
let dropdowns = document.querySelectorAll(".dropdown select")
let btn = document.querySelector("form button")



for(let select of dropdowns){
    for(code in countryList){
        let newOption = document.createElement("option")
        newOption.innerText = code
        newOption.value = code
        if(select.name === "from" && code === "USD"){
            newOption.selected = "selected"
        }
        else if(select.name === "to" && code === "INR"){
            newOption.selected = "selected"
        }
        select.append(newOption)
    }


select.addEventListener("change", (evt) => {
    updateFlag(evt.target)
})
}

const updateFlag = (ele) => {
    let currCode = ele.value
    let couontryCode = countryList[currCode]
    let newSrc = `https://flagsapi.com/${couontryCode}/flat/64.png`
    let img = ele.parentElement.querySelector("img")
    img.src = newSrc
}

btn.addEventListener("click", (evt) => {
    evt.preventDefault()
    let amt = document.querySelector(".amount input")
    let amtVal = amt.value
    if(amtVal === "" || amtVal < 1){
        amtVal = 1
        amt.value = "1"
    }

    

    console.log(convertCurr(amt.value, ))
})

async function convertCurr(amt, from, to){
    const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from}.json`
    const res = await fetch(url)
    const data = await res.json()
    const rate = data[from][to]
    return amt*rate
}


