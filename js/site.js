function getValues() 
{
    
    // get values from DOM.
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;
    
   
    // parse the values into integers.
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);
    
    if(Number.isInteger(fizzValue) && Number.isInteger(buzzValue)){
       
        let fbData = FizzBuzz(fizzValue,buzzValue);
        displayValues(fbData);

    } else {
        alert("Please enter only integers!")
    }     
 }


//Traditional Solve Fizz Buzz with a for loop
function FizzBuzz(fizzValue, buzzValue) {
    
    let returnArray = [];

    for (let index = 1; index <= 100; index++) {
        
        if(index % fizzValue == 0 && index % buzzValue == 0){
            returnArray.push("FizzBuzz");
        } else if (index % fizzValue == 0){
            returnArray.push("Fizz");
        } else if (index % buzzValue == 0){
            returnArray.push("Buzz");
        } else {
            returnArray.push(index);
        }   
    }

    return returnArray;
}

function displayValues(fbData){

    let templateRow = "";

    for (let index = 0; index <= fbData.length - 1; index++) {
        templateRow += `<tr><td>${fbData[index]}</td></tr>`;   
    }
    
    document.getElementById("results").innerHTML = templateRow;
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
