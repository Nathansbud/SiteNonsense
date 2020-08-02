const indexField = document.querySelector("#index")
const columnField = document.querySelector("#column")

const maxIndex = parseInt(indexField.getAttribute('max'))
const minIndex = parseInt(indexField.getAttribute('min'))

const ord = (chr) => chr.charCodeAt(0)

function columnToIndex(col) {
    if(Array.from(col).every(p => ord(p) >= 65 && ord(p) <= 90) && col.length < 4) {
        const minor = ord(col[col.length - 1]) - 65
        const major = ((col.length > 1) ? (26*(ord(col[col.length - 2]) - 65 + 1)) : (0))
        const supermajor = ((col.length > 2) ? (26**2*(ord(col[col.length - 3]) - 65 + 1)) : (0)) 
        return (minor + major + supermajor)
    }
    return -1
}

function indexToColumn(idx) {
    const supermajor = (idx > 26**2 + 25) ? (String.fromCharCode(65 + Math.floor((idx - 26) / (26**2) - 1))) : ("")
    const major = (idx > 25) ? (String.fromCharCode(65 + Math.floor((idx / 26 - 1)) % 26)) : ("")
    const minor = String.fromCharCode(65 + idx % 26)
    return supermajor + major + minor
}

indexField.addEventListener('change', (e) => {
    let iv = e.target.value

    if(iv > maxIndex) {
        iv = maxIndex
        indexField.value = maxIndex
    } else if(iv < minIndex + 1) {
        iv = 0 
        indexField.value = 0
    }
    
    columnField.value = indexToColumn(iv)
})

columnField.addEventListener('change', (e) => {
    let cv = e.target.value.toUpperCase().trim()
    columnField.value = cv
    indexField.value = columnToIndex(cv)
})

