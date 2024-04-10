let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button')

// input 
let string = "";
let arr = Array.from(buttons) //creating array of inputs

// calculation
arr.forEach(buttons => {
    buttons.addEventListener('click', (e) => {
        //handling operations

        if (e.target.innerHTML == '=') {
            // Check if the string is empty
            if (!string.trim()) {
                return; // Do nothing if the string is empty
            }
            string = eval(string)
            input.value = string
        }
        else if (e.target.innerHTML == 'AC') {
            string = ""
            input.value = string;
        }
        else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1)
            input.value = string;
        }
        else {
            string += e.target.innerHTML;
            input.value = string;
        }

    })
})