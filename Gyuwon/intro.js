var cur_page = 0;
var p1 = document.getElementById('first_view');
var p2 = document.getElementById('second_view');
var p3 = document.getElementById('third_view');
var p4 = document.getElementById('fourth_view');
p2.style.display = 'none';
p3.style.display = 'none';
p4.style.display = 'none';
var rightarrow = document.getElementById("intro_img_right_arrow");
rightarrow.addEventListener('click', Right_Arrow_Clicked);
rightarrow.addEventListener('load', onload);
function Right_Arrow_Clicked() {

    switch (cur_page) {
        case 0:
            p1.style.display = 'none'
            p2.style.display = 'block'
            onload();
            cur_page++;
            break;
        case 1:
            p2.style.display = 'none'
            p3.style.display = 'block'
            onload();
            cur_page++;
            break;
        case 2:
            p3.style.display = 'none'
            p4.style.display = 'block'
            onload();
            cur_page++;
            break;
        case 3:
            p4.style.display = 'none'
            p1.style.display = 'inline-flex'
            cur_page = 0;
            onload();
            break;

    }
    window.parent.postMessage(document.body.scrollHeight, "*")
}
function onload() {
    var bodyheight = document.body.scrollHeight;
    rightarrow.style.top = bodyheight / 2 + 'px';
}
onload()