// create variables to store/loop
let daySch = [
    {
        id: "0",
        hour: "08",
        time: "08",
        mid: "am",
        agenda: ""

    },
    {
        id: "1",
        hour: "09",
        time: "09",
        mid: "am",
        agenda: ""
    },
    {
        id: "2",
        hour: "10",
        time: "10",
        mid: "am",
        agenda: ""
    },
    {
        id: "3",
        hour: "11",
        time: "11",
        mid: "am",
        agenda: ""
    },
    {
        id: "4",
        hour: "12",
        time: "12",
        mid: "pm",
        agenda: ""
    },
    {
        id: "5",
        hour: "01",
        time: "01",
        mid: "pm",
        agenda: ""
    },
    {
        id: "6",
        hour: "02",
        time: "02",
        mid: "pm",
        agenda: ""
    },
    {
        id: "7",
        hour: "03",
        time: "03",
        mid: "pm",
        agenda: ""
    },
    {
        id: "8",
        hour: "04",
        time: "04",
        mid: "pm",
        agenda: ""
    },
    {
        id: "9",
        hour: "05",
        time: "05",
        mid: "pm",
        agenda: ""
    },
    {
        id: "10",
        hour: "06",
        time: "06",
        mid: "pm",
        agenda: ""
    },
    {
        id: "11",
        hour: "07",
        time: "07",
        mid: "pm",
        agenda: ""
    },
    {
        id: "12",
        hour: "08",
        time: "08",
        mid: "pm",
        agenda: ""
    }
]
// moment.js data for date
function momentDate() {
    let today = moment().format('LLLL');
    $("#currentDay").text(today);
    console.log(today);
};
// setItem allows to set any of the user data into local storage
// local storage 
// function save
function saveAgenda() {
    localStorage.setItem("daySch", JSON.stringify(daySch));
}
// allows users to view their saved data
// view exsisting local storage 
function showAgenda() {
    daySch.forEach(function (hourly) {
        $(`#${hourly.id}`).val(hourly.agenda);
    })
}
// instead of using document.ready / use init
function init() {
    let savedDaySch = JSON.parse(localStorage.getItem("daySch"));

    if (savedDaySch) {
        daySch = savedDaySch;
    };
    saveAgenda();
    showAgenda();
}
momentDate();

// // create scheduling form / rows // using forEach to called for each element in the array. 
daySch.forEach(function (timeBlock) {
    let tRow = $("<form>").addClass("row");

    $(".container-fluid").append(tRow);
    console.log(tRow);

    // create time row
    let hrRow = $("<div>")
        .text(`${timeBlock.hour}${timeBlock.mid}`)
        .addClass("col-md-1 hour");
    // create data holder for past, present and future
    let agendaHolder = $("<div>").addClass("col-md-10 user");

    let userAgenda = $("<textarea>");

    agendaHolder.append(userAgenda);
    // h -12 hr, m- minutes 0..59
    userAgenda.attr("id", timeBlock.id);
    if (timeBlock.time < moment().format("h:m")) {
        userAgenda.addClass("past");
    } else if (timeBlock.time === moment().format("h:m")) {
        userAgenda.addClass("present");
    } else if (timeBlock.time > moment().format("h:m")) {
        userAgenda.addClass("future");
    }
    console.log(userAgenda)



    // // create save button
    let btnSave = $('<i class="fas fa-bolt"></i>')
    let saveSch = $("<button>")
        .addClass("col-md-1 saveBtn");

    saveSch.append(btnSave);

    tRow.append(hrRow, agendaHolder, saveSch);

    console.log(saveSch);

});

init();

// save data to local storage
$(".saveBtn").on("click", function (event) {
    event.preventDefault();

    let savedIndex = $(this).siblings
    (".user").children(".future").attr("id");

    daySch[savedIndex].agenda = $(this).siblings(".user").children(".future").val();

    console.log(savedIndex);

    saveAgenda();
    showAgenda();

});
