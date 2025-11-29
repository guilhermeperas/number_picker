const form = document.getElementById('number-form');
const input = document.getElementById('number-input');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', function(event) {
    event.preventDefault()
    var value = parseInt(input.value)
    var random_value = Math.floor(Math.random() * 10) + 1;   
    if(value == random_value){
        const node = document.createElement("p");
        node.textContent = "Correct!!!"
        node.classList.add("correct")
        resultDiv.appendChild(node)
    }
})
