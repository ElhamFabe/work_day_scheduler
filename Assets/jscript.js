// create variables to store/loop
let daySch = [
    {
        id: "",
        hour: "",
    }

]


// moment.js data for date

function momentDate() {
    let currentMomentDate = moment().format("dddd, MMM do YYY, h:mm:ss a");
    $("#currentDay").text(currentMomentDate);
    console.log(currentMomentDate);
};

momentDate();

// create scheduling blocks
let timeBlock = $("<div class='daysch'>");


// create save button
let saveBtn = $("<i class='fas fa-bolt'></i>");
let saveSch = $("<button>").attr("class", "col-md-1")



// local storage 



// save data to local storage


// view exsisting local storage 