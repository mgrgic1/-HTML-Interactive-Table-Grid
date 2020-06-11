//Assignment 3 Java Script Source Code

//variables to keep track of row and column count
let rowCount = 0;
let columnCount = 0;
let color;

//tracks whether or not the mouse has been clicked (true) or released (false)
//this will allow us to do click and drag events by checking isMouseDown in addition to onmouseover
let isMouseDown = false;

//Function to add row to table
function rowAdd(){
    //variable for the table and the rows/columns to be added;
    let table = document.getElementById("boxes");
    let row = document.createElement("tr");
    if(rowCount == 0 && columnCount == 0){
        let column = document.createElement("td");
		column.style.backgroundColor = "white";
        column.onmousedown = function() {this.style.backgroundColor=color}
		column.onmouseover = function() {if(isMouseDown) {this.style.backgroundColor = color;}}
        row.appendChild(column);  //adds column child to row
        table.appendChild(row);
        rowCount++;
        columnCount++;
    }//end if
    else{
        for(let i=0; i<columnCount; i++){
            let column = document.createElement("td");
			column.style.backgroundColor = "white";
            column.onmousedown =function() {this.style.backgroundColor=color}
			column.onmouseover = function() {if(isMouseDown) {this.style.backgroundColor = color;}}
            row.appendChild(column); //adds proper amount of boxes to row before appending to table
            
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
        let column = document.createElement("td");
		column.style.backgroundColor = "white";
        column.onmousedown =function() {this.style.backgroundColor=color}
		column.onmouseover = function() {if(isMouseDown) {this.style.backgroundColor = color;}}
        row.appendChild(column)
        table.appendChild(row);
        rowCount++;
        columnCount++;
    }//end if
    else{
        //need to add a column child to each row to add a column to whole grid
        let rows = document.getElementsByTagName("tr"); //array of row elements
        for(let i=0; i<rowCount; i++){
            let column = document.createElement("td");
			column.style.backgroundColor = "white";
            column.onmousedown =function() {this.style.backgroundColor=color}
			column.onmouseover = function() {if(isMouseDown) {this.style.backgroundColor = color;}}
            rows[i].appendChild(column);
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
	color = document.getElementById("selectMenu").value; 
}

document.body.onmousedown = function() {
	isMouseDown = true;
}

document.body.onmouseup = function() {
	isMouseDown = false;
}

function clearColors() {
var tableTd = document.getElementById("boxes").getElementsByTagName("td");

//loops through the entire table and goes through each "td" element (as referenced above)
//changes this element's background color to white, which resets it to the default color
	for(var i =0; i<tableTd.length;i++) {
		tableTd[i].style.backgroundColor = "white";
	}
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
*/