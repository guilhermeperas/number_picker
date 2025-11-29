const form = document.getElementById('number-form');
const input = document.getElementById('number-input');
const resultDiv = document.getElementById('result');
const popup = document.createElement("p");
const h1 = document.getElementById("title");

let random_value = new_value();
console.log(random_value);

form.addEventListener('submit', function(event) {
    event.preventDefault()
    var value = parseInt(input.value)
    if(value == random_value){
        popup.textContent = "Correct!!!"
        popup.classList.add("correct")
        h1.textContent = `Pick the correct number from 1 to 10 again!!`;
        random_value = new_value();
    }else{
        popup.textContent = "Wrong! Try again."
        popup.classList.add("wrong")
    }
    resultDiv.appendChild(popup)
    setTimeout(clear_result, 1500);
})

function new_value(){
    return Math.floor(Math.random() * 10) + 1;
}

function clear_result(){
    popup.classList.remove("correct");
    popup.classList.remove("wrong");
    resultDiv.innerHTML = '';
    input.focus();
}
