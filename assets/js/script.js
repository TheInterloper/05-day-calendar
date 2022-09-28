var savebutton = document.getElementById("saveBtn")
var now = moment().format('H');
var highlight = document.querySelectorAll(".time-block")
var task = document.querySelectorAll(".description")

var rightNow = moment()
// console.log(rightNow)

var rightNowStr = moment().format("MM DD YYYY")
// console.log(rightNowStr)
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

    if ( hour < currHour  ){
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

    var save = $("<button>").attr("id", 'saveBtn').text('Save')
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


//save events to local storage
function saving(value){

    var todo = JSON.parse(localStorage.getItem('event')) || [];

    todo.push(value)

    localStorage.setItem("event", JSON.stringify(todo))
    
    
}
//load from local storage
function loadSaved(value) {
    var todo = JSON.parse(localStorage.getItem('event')) || []

    for (var i = 0; i < todo.length; i++) {
        var task = todo[i];

        console.log("event ", task);
    }
}

function init(){
    buildSchedule()
    
}

getInitDayTime()
init()
loadSaved()


savebutton.addEventListener('click')
