var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var yearSelect = document.getElementById("dropdown")
var dateText = document.getElementById('date')

for(let i = 1900; i < 2100; i++) {
    let option = document.createElement("option")
    option.text = i
    yearSelect.add(option)
}

function div(a, b) {return Math.floor(a/b)}
function calculateEasterGregorian(year) {
    let a = year % 19
    let b = div(year, 100)
    let c = year % 100
    let d = div(b, 4)
    let e = b % 4
    let f = div(b + 8, 25)
    let g = div(b - f + 1, 3)
    let h = (19*a + b - d - g + 15) % 30
    let i = div(c, 4)
    let k = c % 4
    let l = (32 + 2 * e + 2 * i - h - k) % 7
    let m = div(a + 11*h + 22 * l, 451)
    let month = div(h + l - 7*m + 114, 31)
    let day = ((h+l-7*m+114)%31)+1

    return months[month - 1]+" "+day
}

function setDateText(value) {
    dateText.textContent = value
}



yearSelect.addEventListener('change', function(event) {
    setDateText(calculateEasterGregorian(parseInt(yearSelect.options[yearSelect.selectedIndex].text)))
})

window.onload = function() {
    yearSelect.value = new Date().getFullYear()
    setDateText(calculateEasterGregorian(new Date().getFullYear()))
}


