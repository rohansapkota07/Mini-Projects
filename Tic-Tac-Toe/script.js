let boxes = document.querySelectorAll('.box')
let resetBtn = document.querySelector("#resetBtn")
let newGameBtn = document.querySelector("#newBtn")
let msgContainer = document.querySelector(".msgContainer")
let msg = document.querySelector("#msg")

let turnO = true;
let val, count=0
let newVal = ""
let boxID
const winPatterns = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]

boxes.forEach(box => {
    box.addEventListener("click", () => {
        if (turnO === true) {
            box.style.color="#361D2E"
            box.innerText = "O"
            turnO = false;
        }
        else {
            box.style.color="#FFEEDB"
            box.innerText = "X"
            turnO = true
        }
        for (let i = 0; i < 9; i++) {
            //  val = document.querySelector(`.box${i}`).innerText
        }
        val = box.innerText
        boxID = box.id
        count=count+1
        box.disabled = true
        console.log(count)
        if (count===9){
            count=0
            msg.innerText=`Draw`
            msgContainer.classList.remove("hide")
            boxes.forEach(box => {
                // box.innerText=""
                box.disabled = true
                turnO=true
            })
        }
        checkWinner();
    })
});
const showWinner = (Winner)=>{
    msg.innerText=`Player ${Winner} Wins`
    msgContainer.classList.remove("hide")
    boxes.forEach(box => {
        box.disabled = true
        turnO=true
        count=0
    })
}
const checkWinner = () => {
    winPatterns.forEach(pattern => {
        let pos1 = boxes[pattern[0]].innerText
        let pos2 = boxes[pattern[1]].innerText
        let pos3 = boxes[pattern[2]].innerText
        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                console.log("winner",pos1)
                showWinner(pos1);
            }
        }
    });
    // val = document.querySelector(`.box${element}`).innerText
    // console.log(val)
    // newVal = newVal +val 
    // console.log(newVal)


}

resetBtn.addEventListener("click", () => {
    count=0
    msgContainer.classList.add("hide")
    turnO=true
    boxes.forEach(box => {
        box.innerText = ""
        box.disabled = false
    })
})
newGameBtn.addEventListener("click", () => {
    count=0
    msgContainer.classList.add("hide")
    turnO=true
    boxes.forEach(box => {
        box.innerText = ""
        box.disabled = false
        
    })
})
