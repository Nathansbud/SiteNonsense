function getAmount(distance, waitTime) {
    return Math.round(12.9*(distance - 1.5) + 1.2*waitTime + 18)
}

document.getElementById("submit").addEventListener("click", function() {
    document.getElementById("cost").innerHTML = getAmount(document.getElementById("distance").value, document.getElementById("wait").value) + " rupees"
})