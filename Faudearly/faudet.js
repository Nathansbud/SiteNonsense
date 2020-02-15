poem_body = document.getElementById("poem_body")
generate_button = document.getElementById("generate")
num_poems = document.getElementById("num_poems")
poem_lines = document.getElementById("poem_lines")
function generate_faudet(num, n_per) {
    build_poem = ""
    selected = _.sample(poems, num) 
    c = 0
    for(poem of selected) {
        poem = poem.split("\n")
        if(c == 0) {
            build_poem += poem[0]+"\n"
            poem = poem.slice(1)
        }
        poem = _.shuffle(poem)
        if(n_per > poem.length) {
            build_poem += poem.join("\n")
        } else {
            build_poem += _.sample(poem, n_per).join("\n")
        }
        build_poem += "\n"
    }
    lines = build_poem.split("\n")
    poem_body.innerHTML = ""
    for(line of lines) {
        poem_body.innerHTML += line + "<br>"   
    }
}

generate_button.addEventListener("click", function() {
    generate_faudet(num_poems.value, poem_lines.value)
})