
//Data
const arr = [5, 8, 2, 1, 15, 2, 3, 5, 9, 11, 10, 4, 3, 14, 1, 7, 10, 3, 2, 13];

//Parent element
const barCharts = document.querySelector(".barCharts");


//creating a bar
function createBar(value, index) {
    //define the bar color
    let color;
    (index < 6) ? color = "green" : null;
    (index > 5 && index < 11) ? color = "yellow" : null;
    (index > 10) ? color = "red" : null;

    //create the body of the bar with current values
    let barWrapper = `<div class="barWrapper">
                            <div class=barValue >${value}</div>
                             <div class="bar" style="height:${value * 20}px; background-color:${color}"></div>   
                             <div class="barIndex">${index}</div>   
                      </div>`;
                      
    //adding the bar into parent element                  
    barCharts.innerHTML += barWrapper;
}


//iteration over the array with data
function fillTable(arr) {
    arr.forEach((e, i) => {
        createBar(e, i);
    });
}



//Run create function
fillTable(arr);