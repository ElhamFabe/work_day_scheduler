// create variables to store/loop
let daySch = [
    {
        id: "0",
        hour: "08",
        time:"08",
        mid:"am",
        agenda: ""

    },
    {
        id: "1",
        hour: "09",
        time:"09",
        mid:"am",
        agenda: ""
    },
    {
        id: "2",
        hour: "10",
        time: "10",
        mid:"am",
        agenda: ""
    },
    {
        id: "3",
        hour: "11",
        time: "11",
        mid:"am",
        agenda: ""
    },
    {
        id: "4",
        hour: "12",
        time: "12",
        mid:"pm",
        agenda: ""
    },
    {
        id: "5",
        hour: "01",
        time: "01",
        mid:"pm",
        agenda: ""
    },
    {
        id: "6",
        hour: "02",
        time:"02",
        mid: "pm",
        agenda: ""
    },
    {
        id: "7",
        hour: "03",
        time: "03",
        mid:"pm",
        agenda: ""
    },
    {
        id: "8",
        hour: "04",
        time: "04",
        mid:"pm",
        agenda: ""
    },
    {
        id: "9",
        hour: "05",
        time: "05",
        mid: "pm",
        agenda:""
    },
    {
        id: "10",
        hour: "06",
        time: "06",
        mid: "pm",
        agenda:""
    },
    {
        id: "11",
        hour: "07",
        time: "07",
        mid: "pm",
        agenda:""
    },
    {
        id: "12",
        hour: "08",
        time: "08",
        mid: "pm",
        agenda:""
    }
]


// moment.js data for date

function momentDate() {
    let currentMomentDate = moment().format("dddd, MMM do YYY, h:mm:ss a");
    $("#currentDay").text(currentMomentDate);
    console.log(currentMomentDate);
};

momentDate();

// // create scheduling form / rows // using forEach to called for each element in the array. 
daySch.forEach(function (timeBlock) {
    let timeRow = $("<form>").attr({
        "class": "row"

    });

    $(".container").append(timeRow);
    console.log(timeRow);

    // create time for rows
    let hrRow = $("<div>")
    .text(`${timeBlock.hour}${timeBlock.time}`)
    .attr({"class":"col-md-1 hour"
    });

    
});


// // create save button
// let saveBtn = $("<i class='fas fa-bolt'></i>");
// let saveSch = $("<button>").attr("class", "col-md-1")



// local storage 
// function save


// save data to local storage


// view exsisting local storage 