//Assignment 3 Java Script Source Code

//variables to keep track of row and column count
let rowCount = 0;
let columnCount = 0;

//Function to add row to table
function rowAdd(){
    //variable for the table and the rows/columns to be added;
    let table = document.getElementById("boxes");
    let row = document.createElement("tr");
    if(rowCount == 0 && columnCount == 0){
        row.appendChild(document.createElement("td"));  //adds column child to row
        table.appendChild(row);
        rowCount++;
        columnCount++;
    }//end if
    else{
        for(let i=0; i<columnCount; i++){
            row.appendChild(document.createElement("td")); //adds proper amount of boxes to row before appending to table
        }
        table.appendChild(row);
        rowCount++;
    }//end else
}

function rowRemove(){
    let table = document.getElementById("boxes");
    if(rowCount>=0 && columnCount>=0){
        table.removeChild(table.lastChild);
        rowCount--;

        //column count must also reset if row = 0
        if(rowCount == 0)
            columnCount = 0;//end if
        
    }//end if
}

function columnAdd(){
    let table = document.getElementById("boxes");
    if(rowCount == 0 && columnCount == 0){
        let row = document.createElement("tr");
        row.appendChild(document.createElement("td"));  
        table.appendChild(row);
        rowCount++;
        columnCount++;
        row.onclick = function() { colorCell(row);}
    }//end if
    else{
        //need to add a column child to each row to add a column to whole grid
        let rows = document.getElementsByTagName("tr"); //array of row elements
        for(let i=0; i<rowCount; i++){
            rows[i].appendChild(document.createElement("td"));
        }
        columnCount++
    }
}
function columnRemove(){
   
    let table = document.getElementById("boxes");
    if(rowCount>=0 && columnCount>=0){
        let rows = document.getElementsByTagName("tr");
        for(let i=0; i<rowCount; i++){
            let lastCol = rows[i].lastChild;
            rows[i].removeChild(lastCol);
        }
        columnCount--;

        //row count must also reset to 0 if columnCount is 0
        if(columnCount == 0)
            rowCount = 0;//end if

    }//end if
}
function selectColor()
{
	
	let color = document.getElementById("selectMenu").value;
}
/*function fillAll()
{
let color = document.querySelectorAll('boxes');
for(let column =0;i<color.length;column++)
{
	color[column].style.backgroundColor = '';
}
}
*/
/*
function fillUncolored()
{
   let table = document.getElementById("boxes");

}
function clearColors()
{
let table = document.getElementById("boxes");
}
*/