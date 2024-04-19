
const BASE_URL = `https://api.fastforex.io/convert?api_key=a2f46a8507-59688efa1b-sc3aeu&from=USD&to=NPR&amount=25`

const dropdown = document.querySelectorAll(".dropdown select")
const btn = document.querySelector("form button")


for (const select of dropdown) {
    for (curCode in countryList) {
        let newOption = document.createElement("option")
        newOption.innerText = curCode
        newOption.value = curCode
        select.append(newOption)
        if (select.id === "from" && curCode === "USD") {
            newOption.selected = "selected"
        }
        if (select.id === "to" && curCode === "NPR") {
            newOption.selected = "selected"
        }
    }
    select.addEventListener("change", (evt) => {
        updateFlag(evt.target)
    })
}


const updateFlag = (e) => {
    let curCode = e.value
    let newSrc = `https://flagsapi.com/${countryList[curCode]}/flat/64.png`
    let img = e.parentElement.querySelector("img")
    img.src = newSrc

}

btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    let from = document.querySelector("form .from #from").value
    let to = document.querySelector("form .to #to").value
    let amount = document.querySelector("form input")
    let amountVal =amount.value
    if(amountVal<1 || amountVal ===""){
        amount.value="1";
        amountVal=1
    }
    const BASE_URL1 = `https://api.fastforex.io/convert?api_key=a2f46a8507-59688efa1b-sc3aeu&from=${from}&to=${to}&amount=${amountVal}`;

    (async () => {

        let to = document.querySelector("form .to #to").value
        let response = await fetch(BASE_URL1);
        let data = await response.json()
        console.log(data)
        let res = data.result[to]
        let display = document.querySelector(".msg")
        display.innerText=`${amountVal} ${from} = ${to} ${res}`
        // document.querySelector("input").value = amount
    })();
})
