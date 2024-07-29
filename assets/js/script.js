let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];

let Yearresult = document.getElementById("Yearresult");
let Monthresult = document.getElementById("Monthresult");
let Dateresult = document.getElementById("Dateresult");

function calculateAge() {
    let birthDateValue = userInput.value;
    if (!birthDateValue) {
        alert("Please select a birthdate");
        return;
    }

    let birthDate = new Date(birthDateValue);

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;
    let y1 = birthDate.getFullYear();

    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let d3, m3, y3;

    y3 = y2 - y1;

    if (m2 >= m1) {
        m3 = m2 - m1;
    } else {
        y3--;
        m3 = 12 + m2 - m1;
    }

    if (d2 >= d1) {
        d3 = d2 - d1;
    } else {
        m3--;
        d3 = getDaysInMonth(y1, m1) + d2 - d1;
    }

    if (m3 < 0) {
        m3 = 11;
        y3--;
    }

    Yearresult.innerHTML = y3;
    Monthresult.innerHTML = m3;
    Dateresult.innerHTML = d3;

    var popup = document.getElementById("result-div");
    popup.style.display = "block";
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    var popup = document.getElementById("result-div");
    popup.style.display = "none";
}

function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}

userInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        calculateAge();
    }
});
