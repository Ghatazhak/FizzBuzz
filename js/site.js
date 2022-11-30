function getValues() 
{
    
    // get values from DOM.
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;
    
   
    // parse the values into integers.
    let fizzValueInt = fizzValue.parseInt();
    let buzzValueInt = buzzValue.parseInt();
    
    if(Number.isInteger(fizzValueInt) && Number.isInteger(buzzValueInt)){
       
        let fbData = FizzBuzz(fizzValueInt,buzzValueInt);
        displayData(fbData);
    } else {
        alert("Please enter only integers!")
    }     
 }


//Traditional Solve Fizz Buzz with a for loop
function FizzBuzz(fizzValueInt, buzzValueInt) {
    //DO:
    //Use "let" to declare an array variable "returnArray"
    //Set it equal to []
    let returnArray = [];

    for (let index = 1; index <= 100; index++) {
        
        if(index % fizzValueInt == 0 && index % buzzValueInt == 0){
            returnArray.push("FizzBuzz");
        } else if (index % fizzValueInt == 0){
            returnArray.push("Fizz");
        } else if (index % buzzValueInt == 0){
            returnArray.push("Buzz");
        } else {
            returnArray.push(index);
        }   
    }
    
    return returnArray;
}

//custom display function
function displayData(fbData) {

    //get the table body element from the page
    let tableBody = document.getElementById("results");

    //get the row from the template
    let templateRow = document.getElementById("fbTemplate");

    //clear table first
    tableBody.innerHTML = "";

    for (let i = 0; i < fbData.length; i += 5) {
        const tableRow = document.importNode(templateRow.content, true);
        //grab only the columns in the template
        rowCols = tableRow.querySelectorAll("td");

        rowCols[0].classList.add(fbData[i]);
        rowCols[0].textContent = fbData[i];
       
        rowCols[1].classList.add(fbData[i+ 1]);
        rowCols[1].textContent = fbData[i + 1];
       
        rowCols[2].classList.add(fbData[i+2]);
        rowCols[2].textContent = fbData[i + 2];
       
        rowCols[3].classList.add(fbData[i+3]);
        rowCols[3].textContent = fbData[i + 3];
       
        rowCols[4].classList.add(fbData[i+4]);
        rowCols[4].textContent = fbData[i + 4];

        tableBody.appendChild(tableRow);
    }
}
