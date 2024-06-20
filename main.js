function clickNumButton(button) {
    let result = document.getElementById("result");
    let buttonNum = button.innerHTML;
    let resultFoot = result.innerHTML.slice(-1)
    if ( buttonNum == "AC") {
        result.innerHTML = "0"
    } else if ( buttonNum == "=") {
        result.innerHTML = eval(result.innerHTML)
    } else if ( buttonNum == "0") {
        if (result.innerHTML == "0") {
            result.innerHTML = "0"
        } else {
            result.innerHTML += buttonNum
        }
    } else if ( buttonNum == "00") {
        if (result.innerHTML == "0") {
            result.innerHTML = "0"
        } else {
            result.innerHTML += buttonNum
        }
    } else if ( buttonNum == ".") {
        if (result.innerHTML == "0") {
            result.innerHTML = "0"
        } else if (resultFoot == ".") {
            result.innerHTML = result.innerHTML.slice(0,-1) + buttonNum
        } else {
            result.innerHTML += buttonNum
        }
    } else {
        if (result.innerHTML == "0") {
            result.innerHTML = buttonNum
        } else {
            result.innerHTML += buttonNum 
        }
    }

}

function clickButton(button) {
    let result = document.getElementById("result");
    let buttonNum = button.innerHTML;
    let resultFoot = result.innerHTML.slice(-1)
    if ( result.innerHTML == "0") {
        result.innerHTML = "0"
    } else if (resultFoot == "+" || resultFoot == "-" || resultFoot =="*" || resultFoot =="/" || resultFoot =="." ) {
        result.innerHTML = result.innerHTML.slice(0,-1) + buttonNum
    } else {
        result.innerHTML += buttonNum
    }
}