

function validate(){

    let text = document.getElementById("text").value;
    let input = document.getElementById("input");

    if(text.trim() !== ''){


        let inputContainer = document.createElement("div");
        inputContainer.className = "inputContainer";


        //create a span element for the text
        let inputText = document.createElement("span");
        //add the content of textarea to div id input without deleting previous entry
        inputText.innerHTML = text + '<br><br>';

        //create an icon element
        let icon = document.createElement("i");
        icon.className = 'bi bi-trash-fill';
        icon.onclick = function (){
            delete(input);
        };

        inputContainer.appendChild(inputText);
        inputContainer.appendChild(icon);

        input.className = "input"
        input.appendChild(inputContainer)


    }else{
        alert("Please provide a valid input!")
    }
}

