let DrawingData = ['1', '2', '3', '4' ,'5', '6', '7', '8', '9', '0', '.', '*', '/', '+', '-', '='];
function Display() {
    temp=`<tr><td colspan="4"><input type="text" id="inp" value="" ></td>
    <span class="btn btn-danger" onclick="reset()"> Reset</span>
    </tr>`
    for (let i = 0; i < DrawingData.length; i++) {
        temp+=`<button class="butn">`+DrawingData[i] +`</button> `}
    document.getElementById("data").innerHTML=temp
}
Display()

let btn =document.querySelectorAll(".tableData button")
let input =document.getElementById("inp")
for (let i = 0; i <btn.length; i++) {
    btn[i].addEventListener("click", function () {
        if (btn[i] == document.querySelector(".butn:last-child")) {
            input.value = eval(input.value);
        }else {input.value+=btn[i].innerHTML;}
    })
    }

function reset() {
    input.value=""
}