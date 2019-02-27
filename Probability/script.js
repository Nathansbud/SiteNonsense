let binompdf = document.getElementById("binompdf");
let binomcdf = document.getElementById("binomcdf");
let rate = document.getElementById("probability_success");
let trialInput = document.getElementById("trial_input");
let cdfCheck = document.getElementById("check_cdf");
let maxForm = document.getElementById("max");
let maxValue = document.getElementById("max_value");
let minText = document.getElementById("value_text");
let minValue = document.getElementById("min_value");
let binomType = document.getElementById("binom_type");
let submit_binom = document.getElementById("submit_binom");

function factorial(input) {
    if(input == 0) {
        return 1;
    } else {
        for(let i = input-1; i > 0; i--) {
            input *= i;
        }
        return input;
    }
}


function combination(input, choice) {
    return factorial(input)/(factorial(input - choice)*factorial(choice))
}


function calculateBinomial(trials, success, min, max) {
    let chance = 0;
    let failure = 1-success;
    if(max < min || max > trials) {
        // alert("Invalid max!")
        max = trials;
    } 
    if(min < 0 || min > max) {
        // alert("Invalid min")
        min = 0;
    }

    for(let i = 0; i < trials+1; i++) {
        if(i >= min && i <= max) {
            chance += combination(trials, i)*Math.pow(failure, trials - i)*Math.pow(success, i);
        }
    }
    return chance;
}

function calculateBinompdf(trials, success, value) {
    return calculateBinomial(trials, success, value, value);
}

function calculateBinomcdf(trials, success, min, max) {
    return calculateBinomial(trials, success, min, max);
}

cdfCheck.addEventListener("change", function (){
    if(maxForm.style.display == "inline") {
        maxForm.style.display = "none";
        minText.innerHTML = "Value: ";
        binomType.innerHTML = "Binompdf"
    } else {
        maxForm.style.display = "inline"
        minText.innerHTML = "Lower Bound: ";
        binomType.innerHTML = "Binomcdf"
    }
})

trialInput.addEventListener("change", function() {
    maxValue.setAttribute("max", trialInput.value);
})

submit_binom.addEventListener("click", function() { //Todo—error checking
    if(cdfCheck.checked) {
        binomcdf.textContent = calculateBinomcdf(trialInput.value, rate.value, minValue.value, maxValue.value);
    } else {
        binompdf.textContent = calculateBinompdf(trialInput.value, rate.value, minValue.value);
    }
})

window.onload = function() {
    cdfCheck.checked = false;
    trialInput.value = 0;
    rate.value = 0;
    maxValue.value = 0;
    minValue.value = 0;
}
