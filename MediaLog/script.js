movie_list = document.getElementById("movie_list");
movie_div = document.getElementById("movies");

tv_list = document.getElementById("tv_list");
tv_div = document.getElementById("tv");


book_list = document.getElementById("book_list");
book_div = document.getElementById("books");

searchbar = document.getElementById("searchbar");

window.onload = function() {
    for(m of movies) {
        let n = document.createElement("li");
        n.setAttribute("class", "movie_item item");
        n.setAttribute("data-name", m['name'].toLowerCase())
        n.textContent = m['name'];
        movie_list.appendChild(n);    
    }

    for(t of tv) {
        let n = document.createElement("li")
        n.setAttribute("class", "tv_item item")
        n.setAttribute("data-name", (t.name).toLowerCase())
        n.textContent = t.name + " - [";
        console.log(t.total_seasons)
        for(let i = 1; i < (parseInt(t.total_seasons)+1); i++) {
            let sn = document.createElement("span");
            if(t.unwatched.includes(i)) {
                sn.setAttribute("class", "unwatched")
            } else if(t.in_progress == i) {
                sn.setAttribute("class", "in_progress")
            } else {
                sn.setAttribute("class", "watched")
            }
            sn.textContent = (i==t.total_seasons)?(i):(i+" ");
            n.appendChild(sn)
            if(i == t.total_seasons) {
                tn = document.createTextNode("]")
                n.appendChild(tn)
            }
        }

        tv_list.appendChild(n);
    }

    for(b of books) {
        console.log(b)
        let n = document.createElement("li")
        n.setAttribute("class", "book_item item")
        n.setAttribute("data-name", (b.name).toLowerCase())
        n.textContent = b.name + " - [";
        let sn = document.createElement("span");
        sn.textContent = b.author
        if(b.series != undefined) sn.textContent += " | " + b.series
        n.appendChild(sn)
        tn = document.createTextNode("]")
        n.appendChild(tn)
        book_list.appendChild(n);
    }   

    tv_div.style.display = "block";
    movie_div.style.display = "none";
    book_div.style.display = "none";

}

function filterItems() {
    let items = document.getElementsByClassName("item");
    if(searchbar.value == "") {
        for(let i = 0; i < items.length; i++) {
            items[i].style.display = "list-item";
        }
    } else {
        for(let i = 0; i < items.length; i++) {
            if(!items[i].getAttribute("data-name").includes(searchbar.value.toLowerCase())) {
                items[i].style.display = "none";
            } else {
                items[i].style.display = "list-item"
            }
        }
    }
}

document.getElementById("movie_button").addEventListener("click", function() {
   if(movie_div.style.display == "none") {
       movie_div.style.display = "block";
       tv_div.style.display = "none";
       book_div.style.display = "none";
   }
})

document.getElementById("tv_button").addEventListener("click", function() {
    if(tv_div.style.display == "none") {
        tv_div.style.display = "block";
        movie_div.style.display = "none";
        book_div.style.display = "none";
    }
})

document.getElementById("book_button").addEventListener("click", function() {
    if(book_div.style.display == "none") {
        tv_div.style.display = "none";
        movie_div.style.display = "none";
        book_div.style.display = "block";
    }
})

searchbar.addEventListener("keyup", filterItems);