var game = document.getElementById('input');
var genre = document.getElementById('genre');
var button = document.getElementById('review_button');
var return_button = document.getElementById('return_button');


button.addEventListener("click", function() {
    if(game.value != "" && genre.value != "") {
        document.getElementById("subject").textContent = String(game.value).toUpperCase();
        document.getElementById("field").textContent = String(genre.value).toUpperCase();
        document.getElementById("intro").style.display = "none";
        document.getElementById("review").style.display = "block";
    }  
});

return_button.addEventListener("click", function(){
    game.value = "";
    genre.value = "";

    document.getElementById("intro").style.display = "block";
    document.getElementById("review").style.display = "none";   
})