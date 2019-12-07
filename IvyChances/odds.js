let calculateButton = document.getElementById("calculate_button")
let collegeSelect = document.getElementById("schools")
let studentName = document.getElementById("name")
let nameReplace = document.getElementById("name_replace")
let oddsReplace = document.getElementById("odds_replace")
let schoolReplace = document.getElementById("school_replace")
let oddsText = document.getElementById("odds_text")

function stringToLowerList(s) {
    return s.toLowerCase().split("")
}

function intersection(a, b) {
    if(typeof a === 'string') a = stringToLowerList(a)
    if(typeof b === 'string') b = stringToLowerList(b)
    return b.filter(x => a.includes(x)); //b intersect a rather than a intersect b, this checks school against name rather than vice versa
}

function calculateOdds(name, school) {
    return intersection(name, school).length / school.length
}

function decimalToPercent(dec, places, appendSign) {
    return (appendSign) ? (dec*100).toFixed(places) + "%" : (dec * 100).toFixed(places)
}

function capitalize(str) {
    return str.substr(0, 1).toUpperCase() + str.substr(1);
}

calculateButton.addEventListener("click", function() {
    name = studentName.value.split(" ")[0]
    school = collegeSelect.options[collegeSelect.selectedIndex].text
    if(name.length > 0) {
        oddsText.style.display = "block";
        oddsReplace.textContent = decimalToPercent(calculateOdds(name, school), 2, true)
        schoolReplace.textContent = school
        nameReplace.textContent = (name.endsWith("s")) ? (capitalize(name) + "'"):(capitalize(name) + "'s")
        console.log(oddsText.textContent)
    }   
})


