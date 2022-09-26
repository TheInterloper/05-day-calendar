var savebutton = document.querySelectorAll("saveBtn")
var now = moment().format('H');
var highlight = document.querySelectorAll(".time-block")
var storage = JSON.parse(localStorage.getItem("daily")) || []

var rightNow = moment()
console.log(rightNow)

var rightNowStr = moment().format("MM DD YYYY")
console.log(rightNowStr)
// console.log(typeof now)


//gets current time upon page load
function getInitDayTime(){
    $("#currentDay").text(moment().format('MMMM Do YYYY, H:mm'));  
}


function buildRows(hour){
    var inputClass = "col-10 description"

    var tod = $("<div>").attr("class", "col-1 time-block").text(hour + ":00")
    //creates a <div> for the time slot

    var currHour = parseInt(rightNow.format("H"))

    let className

    if( hour < currHour  ){
      className = " past"
    } else if( hour === currHour ){
        className = " present"
    } else {
        className = " future"
    }

    // add the class before before/after/during to inputClass
    inputClass += className

    var event = $("<input>").attr( "class", inputClass, "type", "text",)
    //creates the <input> for the events

    var save = $("<button>").attr("class", 'saveBtn').text('Save')
    //creates the <button> to save text entered in the input area

    //creates div and adds the above to this new div as children
    return $('<div>').attr("class", 'row')
        .append(tod)
        .append(event)
        .append(save)
}

//creates time slots for 9-5
function buildSchedule() {

    for (i = 9; i <= 17; i++) {  
        $('.container').append(buildRows(i));
    }
    
}

//checks whether the current time is before or after times on the calendar --NOT WORKING

/*
function beforeAfter(i){
    var now = moment().format('H');
    var highlight = document.querySelectorAll("time-block")

    if (i < now) {
        highlight.setAttribute("style", "background-color: yellow;")

    } else if (i == now) {
        highlight.setAttribute("style", "background-color: blue;")     

    } else (i > now) 
        highlight.setAttribute("style", "background-color: green;")
}*/


//save events to local storage  --  Not working
function saving(){
    var todo = document.querySelectorAll(".description")

    savebutton.addEventListener('click', function() {
        storage.push( {todo:todo.value} )
        localStorage.setItem("daily", JSON.stringify(storage))
        
})
}

function init(){
    buildSchedule()
    
}
getInitDayTime()
init()

// beforeAfter()
// saving()


