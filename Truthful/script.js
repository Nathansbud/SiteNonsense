function and(a, b) {
    return a && b;
}

function or(a, b) {
    return a || b;
}

function nor(a, b) {
    return !a && !b;
}

function xnor(a, b) {
    return (!a && !b) || (a && b)
}

function xor(a, b) {
    return (a != b);
}

function nand(a, b) {
    return !(a && b) 
}

function not(a) {
    return !a;
}


function evaluateExpression(expr) {
    parts = expr.split(" ")
    for(part of parts) {
        console.log(part)
    }    
}

function evaluateExpression(expr) {
    parts = expr.split(" ")
    inputs = []
    operators = []

    for(part of parts) {
        if(part.length() > 0) {
            
        }
    } 
   
}


evaluateExpression("I HATE SHANAYA")