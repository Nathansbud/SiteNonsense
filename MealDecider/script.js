var menuItems = {
    "main": {
        "soup":[
            {"item":"Minestrone Soup", "veg":true},
            {"item":"Lentil Soup", "veg":true},
            {"item":"Gypsy Soup", "veg":true},
            {"item":"Tortilla Soup", "veg":true}
        ],
        "salad":[
            {"item":"Greek Salad", "veg":true},
            {"item":"Tabouli", "veg":true},
            {"item":"Couscous", "veg":true},
            {"item":"Quinoa", "veg":true}
        ],
        "uncategorized":[
            {"item":"Pizza", "veg":true},
            {"item":"Spaghetti", "veg":true},
            {"item":"Baked Potatoes", "veg":true},
            {"item":"Veg Burger", "veg":true},
            {"item":"Burritos", "veg":true},
        ],
    },
    "side" : [
        {"item":"Egg Muffins", "veg":true},
        {"item":"Hummus", "veg":true},
        {"item":"Baba Ganoush", "veg":true},
        {"item":"Broccoli & Cauliflower", "veg":true},
        {"item":"Sweet Potatoes", "veg":true},
        {"item":"Papad & Veg", "veg":true},
    ]
}

var main_opts = Object.keys(menuItems.main);
var side_opts = Object.keys(menuItems.side);

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

function addOrdinalSuffix(day) {
    n = Math.abs(day) % 100;
    if(n > 10 && n < 14) {
        return day + "th";
    }

    switch(n % 10) {
        default: 
            return day + "th"
            break;
        case 1:
            return day + "st";
            break;
        case 2: 
            return day + "nd";
            break;
        case 3:
            return day + "rd";
            break;
    }
}

function generateDate() {
    var d = new Date();
    if(d.getDay() % 6 == 0) { //Weekend, 6 = Sat, 0 = Sun
        

    } 
    var week = "Week: " + addOrdinalSuffix(d.getDate()) + "";
    console.log(week);
}

generateDate();





