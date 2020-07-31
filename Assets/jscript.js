// create variables to store/loop
let daySch = [
    {
        id: "0",
        hour: "06",
    },
    {
        id: "1",
        hour: "07",
    },
    {
        id: "2",
        hour: "08",
    },
    {
        id: "3",
        hour: "09",
    },
    {
        id: "4",
        hour: "10",
    },
    {
        id: "5",
        hour: "11",
    },
    {
        id: "6",
        hour: "12",
    },
    {
        id: "7",
        hour: "01",
    },
    {
        id: "8",
        hour: "02",
    },
    {
        id: "9",
        hour: "03",
    },
    {
        id: "10",
        hour: "04",
    },
    {
        id: "11",
        hour: "05",
    },
    {
        id: "12",
        hour: "06",
    },
    {
        id: "13",
        hour: "07",
    },
    

]


// moment.js data for date

function momentDate() {
    let currentMomentDate = moment().format("dddd, MMM do YYY, h:mm:ss a");
    $("#currentDay").text(currentMomentDate);
    console.log(currentMomentDate);
};

momentDate();

// create scheduling form / rows
daySch.forEach(function (timeBlock) {
    let timeRow = $("<form>").attr({
        "class": "row"
    });
$(".container").append(timeRow);
console.log(timeRow);

// create time for rows
let hourRow = $("<div>").text()
});


// create save button
let saveBtn = $("<i class='fas fa-bolt'></i>");
let saveSch = $("<button>").attr("class", "col-md-1")


});
// local storage 



// save data to local storage


// view exsisting local storage 