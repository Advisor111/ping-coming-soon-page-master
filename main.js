/*start section*/
var
    email = document.getElementById("email"),
    submit = document.getElementById("submit"),
    error = document.getElementById("error");
    query = window.matchMedia("(min-width: 768px)");

document.addEventListener("DOMContentLoaded", init());

submit.onclick = function() {
    "use strict"
    if (email.value == "") {
        email.style.outline = "2px solid var(--Light-Red)";
        error.style.margin = "-2px 0 25px";
        error.style.display = "block";
        if (query.matches) {
            error.style.marginBottom = "-12px";
            error.style.marginTop = "0px";
        } else {}
    } else if (email.value !== "") {
        submit.type = "submit"
        error.style.display = "none"
        email.style.outline = "none";
    } else {};
}

function init() {
    "use strict"
    if (query.matches) {}
    else {} ;
};

/*end section*/