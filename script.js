function validate(){
    let x = document.getElementById("text").value;
    let entryContainer = document.getElementById("input");
    
    if(x.trim() !== ''){
         // Create a new div for the entry
         let entryDiv = document.createElement('div');
        entryDiv.className = 'entry-container';

         // Create a container for the text
        let textContainer = document.createElement('span');
        textContainer.innerText = x;

        // Create a container for the icon
        let iconContainer = document.createElement('i');
        iconContainer.className = 'bi bi-trash-fill';
        iconContainer.onclick = function() {
            deleteEntry(entryDiv);
        };

        // Append text and icon containers to the entry div
        entryDiv.appendChild(textContainer);
        entryDiv.appendChild(iconContainer);

        // Append the new div to the entry container
        entryContainer.appendChild(entryDiv);
    }else{
        alert("Please add a valid entry!")
    }
}

function addEntry(){
    document.getElementById("text").value = '';

}

function deleteEntry(entry) {
    entry.remove();
}