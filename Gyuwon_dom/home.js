var frame = document.getElementById("section_iframe");
frame.addEventListener('load', iframe_onload);
var setting_clicked = false;
function change(id) {
    switch (id) {
        case 1:
            document.getElementById("section_iframe").src = "problem1.html"
            document.getElementById("problem1").style.color = "black"
            document.getElementById("problem2").style.color = "lightslategray"
            document.getElementById("problem3").style.color = "lightslategray"
            document.getElementById("problem4").style.color = "lightslategray"
            break;
        case 2:
            document.getElementById("section_iframe").src = "problem2.html"
            document.getElementById("problem2").style.color = "black"
            document.getElementById("problem1").style.color = "lightslategray"
            document.getElementById("problem3").style.color = "lightslategray"
            document.getElementById("problem4").style.color = "lightslategray"
            break;
        case 3:
            document.getElementById("section_iframe").src = "problem3.html"
            document.getElementById("problem3").style.color = "black"
            document.getElementById("problem2").style.color = "lightslategray"
            document.getElementById("problem1").style.color = "lightslategray"
            document.getElementById("problem4").style.color = "lightslategray"
            break;
        case 4:
            document.getElementById("section_iframe").src = "problem4.html"
            document.getElementById("problem4").style.color = "black"
            document.getElementById("problem2").style.color = "lightslategray"
            document.getElementById("problem3").style.color = "lightslategray"
            document.getElementById("problem1").style.color = "lightslategray"
            break;
    }
}

function reload() {
    location.reload(true);
}

// function setting_click() {
//     if (setting_clicked) {
//         document.getElementById("div_setting_box").style.display = "none"
//         setting_clicked = false;
//     } else {
//         document.getElementById("div_setting_box").style.display = "block"
//         setting_clicked = true;
//     }
// }

function iframe_onload(e) {
    var iframeHeight = frame.contentDocument.body.scrollHeight;
    frame.style.height = iframeHeight + 64 + "px";
}

window.addEventListener("message", (event) => {
    frame.style.height = (event.data + 64) + "px";
}, false)