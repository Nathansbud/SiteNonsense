var timeString = document.getElementById("time")

function setTime() {
    t = new Date();
        
    hours = (t.getHours() < 10) ? ("0" + t.getHours()) : (t.getHours());
    minutes = (t.getMinutes() < 10) ? ("0" + t.getMinutes()) : (t.getMinutes());
    seconds = (t.getSeconds() < 10) ? ("0" + t.getSeconds()) : (t.getSeconds());

    hexString = ((9 < hours && hours < 16) ? "0" : "")+hours.toString(16) + ((9 < minutes && minutes < 16) ? "0" : "")+minutes.toString(16) + ((9 < seconds && seconds < 16) ? "0" : "")+seconds.toString(16)
    complement = ('000000' + (('0xffffff' ^ '0x'+hexString).toString(16))).slice(-6); //https://stackoverflow.com/questions/1664140/js-function-to-calculate-complementary-colour

    
    timeString.textContent = hours + ":" + minutes +":"+seconds;
    document.querySelector("body").style.backgroundColor ="#"+hexString
    timeString.style.color = "#" + complement 
}

window.onload = function() {
    timeString.style.fontSize = "500%";
    this.setTime()

    var interval = setInterval(function() {
        setTime()
    }, 1000)
}
