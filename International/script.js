var rounds = ["2G", "1G 1R", "2R", "3G", "2G 1R", "2R 1G", "4G", "3R"]
var playerCount = 4;

var scoresheet = document.getElementById("scoresheet");
var playerChanger = document.getElementById("player_changer")


window.onload = function() {
    setupScoresheet();
    setupListeners();
    updatePlayerNames();
}

playerChanger.addEventListener("change", function(){
    if(playerChanger.checked) {
        changePlayers(4);
    } else {
        changePlayers(3);
    }

    updatePlayerNames();
})

function setupScoresheet() {
    for(let i = 0; i < rounds.length; i++) {
        let newRound = document.createElement("tr")
        newRound.setAttribute("id", "round_"+(i+1))
        newRound.setAttribute("class", "round")
        
        let roundCell = document.createElement("td")
        roundCell.setAttribute("class", "round_name")
        
        let cardCount = 0
        let cardParts = rounds[i].split(' ')
        for(let p = 0; p < cardParts.length; p++) {
            if(cardParts[p][1] == "G") {
                cardCount += 3 * parseInt(cardParts[p][0])
            } else {
                cardCount += 4 * parseInt(cardParts[p][0])
            }
        }

        roundCell.innerHTML = rounds[i] + " (" + cardCount + " Cards)"
        newRound.appendChild(roundCell)
        
        let playerCells = []
        for(let j = 0; j < playerCount; j++) {
            playerCells[j] = document.createElement("td")
            playerCells[j].innerHTML = '<input type="number" min=0 step=5 class="p'+(j+1)+'_scores" id="p'+(j+1)+'_r'+(i+1)+'_score">'
            newRound.appendChild(playerCells[j])
        }

        let dealCell = document.createElement("td")
        dealCell.setAttribute("class", "player_deal")
        newRound.append(dealCell)

        scoresheet.appendChild(newRound)
    }
    let finalRow = document.createElement("tr")
    
    let finalCellLabel = document.createElement("td")
    finalCellLabel.textContent = "Total"
    finalRow.appendChild(finalCellLabel)

    for(let i = 0; i < playerCount; i++) {
        let finalCellScore = document.createElement("td")
        finalCellScore.innerHTML = "<span class='final_scores' id='p"+(i+1)+"_final'>0</span>"
        finalRow.appendChild(finalCellScore)
    }

    let ruleCell = document.createElement("td")
    ruleCell.innerHTML = "<button id='rules'>Rules</button>" 
    finalRow.appendChild(ruleCell)

    scoresheet.append(finalRow)

    scoresheet.style.width = "100%";
    scoresheet.style.height = "100%";
}

function updatePlayerNames() {
    let dealCells = document.getElementsByClassName("player_deal")
    for(let i = 0; i < dealCells.length; i++) {
        if(playerChanger.checked) dealCells[i].innerHTML = document.getElementById("p"+((i%4)+1)+"_name").value
        else dealCells[i].innerHTML = dealCells[i].innerHTML = document.getElementById("p"+((i%3)+1)+"_name").value
    }
}

function changePlayers(count) {
    let fourthCells = document.querySelectorAll("#scoresheet tr > td:nth-child(5)");

    for(let i = 0; i < fourthCells.length; i++) {
        fourthCells[i].style.display = (count == 3 || !count) ? ("none") : ("table-cell");
    }
    
    document.getElementById("player_header").setAttribute("colspan", (count == 3 || !count) ? (3) : (4))
    document.getElementById("player_4").style.display = (count == 3 || !count) ? ("none") : ("table-cell")
}

function setupListeners() {
    for(let i = 0; i < rounds.length; i++) {
        for(let j = 0; j < playerCount; j++) {
            document.getElementById("p"+(j+1)+"_r"+(i+1)+"_score").addEventListener("change", function() {
                let scores = document.getElementsByClassName("p"+(j+1)+"_scores")
                let score = 0

                for(let k = 0; k < scores.length; k++) {
                    if(scores[k].value) score += parseInt(scores[k].value, 10)
                }
                
                document.getElementById("p"+(j+1)+"_final").innerHTML = score
            })
        }
    }

    for(let i = 0; i < document.getElementsByClassName("player_name").length; i++) {
        document.getElementsByClassName("player_name")[i].addEventListener('change', updatePlayerNames)  
    }
    document.getElementById('rules').addEventListener('click', function() {
        if(document.getElementById('rules_text').style.display == 'none') {
            document.getElementById('rules_text').style.display = 'inline';
        } else {
            document.getElementById('rules_text').style.display = 'none'; 
        }
    })
}

