/*
    Todo:
        - Sort by dropdown
*/

movie_list = document.getElementById("movie_list");
movie_div = document.getElementById("movies");

tv_list = document.getElementById("tv_list");
tv_div = document.getElementById("tv");


book_list = document.getElementById("book_list");
book_div = document.getElementById("books");

searchbar = document.getElementById("searchbar");

String.prototype.removeStart = function (ss) {
    return (this.startsWith(ss) ? this.substring(ss.length) : this)
}

window.onload = function() {
    name_sort = function(a, b) {
        aa = a['name'].toLowerCase().removeStart("the ")
        ba = b['name'].toLowerCase().removeStart("the ")
        
        if(aa > ba) return 1
        else if(aa < ba) return -1
        else 0
    }

    movies.sort(name_sort)
    tv.sort(name_sort)
    books.sort(name_sort)

    for(m of movies) {
        let elem = document.createElement("li");
        elem.setAttribute("class", "movie_item item");
        elem.setAttribute("data-name", m['name'].toLowerCase())
        let tooltipDiv = document.createElement("div")
        tooltipDiv.setAttribute("class", "tooltip")
        let elemName = document.createElement("span")
        elemName.textContent = m['name']
        tooltipDiv.appendChild(elemName)
        if('watches' in m) {
            let tt = document.createElement("span")
            tt.setAttribute("class", "tooltiptext")
            tt.textContent = "Watches: " + m['watches']
            tooltipDiv.appendChild(tt)
        }
        elem.appendChild(tooltipDiv)
        movie_list.appendChild(elem);    
    }

    for(t of tv) {
        let elem = document.createElement("li")
        elem.setAttribute("class", "tv_item item")
        elem.setAttribute("data-name", (t['name']).toLowerCase())
        let elemDiv = document.createElement("div");
        elemDiv.setAttribute("class", "season_div")
        elemName = document.createElement("span")
        elemName.textContent = t['name']
        elemDiv.append(elemName)
        elemDiv.appendChild(document.createTextNode(" ["))
        for(let i = 1; i < t.seasons+1; i++) {
            let tooltipDiv = document.createElement('div')
            tooltipDiv.setAttribute("class", "tooltip")
            let sn = document.createElement("span")
            if(!("unwatched" in t) && !("unfinished" in t)) {
                sn.setAttribute("class", "watched")
            } else if("unwatched" in t && t["unwatched"].includes(i)) {
                sn.setAttribute("class", "unwatched")
            } else if("unfinished" in t && t["unfinished"] == i) {
                sn.setAttribute("class", "unfinished")
            } 
            sn.textContent = i
            tooltipDiv.appendChild(sn)
            if(i != t.seasons) tooltipDiv.appendChild(document.createTextNode("-"))
            if("watches" in t && i in t['watches']) {
                let tt = document.createElement("span")
                tt.setAttribute("class", "tooltiptext")
                tt.textContent = "Watches: " + t['watches'][i]
                tooltipDiv.appendChild(tt)
            }
            elemDiv.appendChild(tooltipDiv)
            elem.appendChild(elemDiv)
        }
        elemDiv.appendChild(document.createTextNode("]"))
        tv_list.appendChild(elem);
    }

    for(b of books) {
        let n = document.createElement("li")
        
        n.textContent = b.name + " - [";
        let sn = document.createElement("span");
        if(!('series' in b)) b['series'] = {'name':"", "book":""}
        else if(typeof b['series'] == "string") b['series'] = {'name':b['series'], "book":""}

        sn.textContent = [b['author'], b['series']['name'], b['series']['book']].filter(function(p) {
            return p != null && p != ""
        }).join(" | ")

        n.appendChild(sn)
        tn = document.createTextNode("]")
        n.appendChild(tn)
        n.setAttribute("class", "book_item item")
        n.setAttribute("data-name", (b.name).toLowerCase() + " " + b.series['name'].toLowerCase() + " " + b.author.toLowerCase())
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