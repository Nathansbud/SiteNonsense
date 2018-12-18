var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

var dd = document.getElementById("dropdown"); 
var dayText = document.getElementById("day");
var leapButton = document.getElementById("leap-button");
var leapExplanation = document.getElementById("leap-explanation");

for(let i = 0; i < months.length; i++) {
    var option = document.createElement("option");
    option.text = months[i];
    dd.add(option);
}

dayText.innerHTML = days[dd.selectedIndex];
document.getElementsByTagName("title")[0].innerHTML = "Days in " + months[dd.selectedIndex];

function isLeapYear(year) {
    if(year % 4 == 0) {
        if(year % 100 == 0 && year % 400 != 0) {
            return false;
        } 
        return true;
    }
    return false;
}

dd.addEventListener('change', function(event) {
    document.getElementsByTagName("title")[0].innerHTML = "Days in " + months[dd.selectedIndex];
    for(let i = 0; i < document.getElementsByClassName("leap").length; i++) {
        document.getElementsByClassName("leap")[i].style.visibility = "hidden";
    }

    if(dd.selectedIndex != 1) {
        dayText.innerHTML = days[dd.selectedIndex];
    } else {
        leapButton.style.visibility = "visible";
        var d = (new Date()).getFullYear();
        var leapYear = isLeapYear(d);
        if(leapYear) {
            leapExplanation.innerText = "* " + d + " is a leap year!"
            dayText.innerHTML = days[dd.selectedIndex] + 1;
        } else {
            if(d % 100 == 0) {
                leapExplanation.innerText = "* " + d + " is not a leap year, as it is divisible by 100 and not 400!"
            } else {
                leapExplanation.innerText = "* " + d + " is not a leap year, as it is not divisible by 4!"
            }
            dayText.innerHTML = days[dd.selectedIndex]
        }
    }
});

leapButton.addEventListener('click', function() {
    var c = document.getElementById("leap-div");
    c.style.visibility = (c.style.visibility == "hidden") ? ("visible") : ("hidden"); 
});
