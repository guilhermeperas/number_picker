const form = document.getElementById('number-form');
const input = document.getElementById('number-input');
const resultDiv = document.getElementById('result');
let random_value = new_value();

form.addEventListener('submit', function(event) {
    event.preventDefault()
    var value = parseInt(input.value)
    if(value == random_value){
        const node = document.createElement("p");
        node.textContent = "Correct!!!"
        node.classList.add("correct")
        resultDiv.appendChild(node)
        random_value = new_value();
        setTimeout(clear_result, 2000);
    }
})

function new_value(){
    return Math.floor(Math.random() * 10) + 1;
}

function clear_result(){
    resultDiv.innerHTML = '';
    input.value = '';
}