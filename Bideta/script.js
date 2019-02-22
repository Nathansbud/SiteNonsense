let trigger = document.getElementById('trigger')



trigger.addEventListener('click', function() {
    document.getElementById('intro').style.visibility = "hidden";
    document.getElementById('main').style.visibility = "block";
})