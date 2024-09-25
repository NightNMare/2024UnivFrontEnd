var frame = document.getElementById("section_iframe");
frame.addEventListener('load', iframe_onload);
var setting_clicked = false;
function change(id) {
    switch (id) {
        case 1:
            document.getElementById("section_iframe").src = "intro.html"
            document.getElementById("intro_text").style.color = "black"
            document.getElementById("interest_text").style.color = "lightslategray"
            document.getElementById("study_text").style.color = "lightslategray"
            break;
        case 2:
            document.getElementById("section_iframe").src = "interest.html"
            document.getElementById("intro_text").style.color = "lightslategray"
            document.getElementById("interest_text").style.color = "black"
            document.getElementById("study_text").style.color = "lightslategray"
            break;
        case 3:
            document.getElementById("section_iframe").src = "study.html"
            document.getElementById("intro_text").style.color = "lightslategray"
            document.getElementById("interest_text").style.color = "lightslategray"
            document.getElementById("study_text").style.color = "black"
            break;
    }
}

function reload() {
    location.reload(true);
}

function setting_click() {
    if (setting_clicked) {
        document.getElementById("div_setting_box").style.display = "none"
        setting_clicked = false;
    } else {
        document.getElementById("div_setting_box").style.display = "block"
        setting_clicked = true;
    }
}
function iframe_onload(e) {
    var iframeHeight = frame.contentDocument.body.scrollHeight;
    frame.style.height = iframeHeight + 64 + "px";
}
window.addEventListener("message", (event) => {
    frame.style.height = (event.data + 64) + "px";
}, false)