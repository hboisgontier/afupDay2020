window.onload = init;

var numAnimation = 1;
var main;
var aside;

function init() {
    document.onkeydown = navigation;
    main = document.getElementsByTagName("main")[0];
    aside = document.getElementsByTagName("aside")[0];
}

function navigation(e) {
    var code = e.keyCode ? e.keyCode : e.charCode;
    if(code == 36) { // home
        document.getElementById('home').click();
    } else if(code === 39 || code === 34) { // page down ou flèche bas
        var elems = document.getElementsByClassName('animation'+numAnimation);
        if(elems.length === 0) {
            document.getElementById('courant').nextElementSibling.click();
        } else {
            for(element of elems) {
                if(element.tagName === 'AUDIO') {
                    element.play();
                } else if(element.tagName === 'UL') {
                    element.style.display = 'list-item';
                } else {
                    element.style.display = 'inherit';
                }
            }
            if(main) main.scroll(0, 99999);
            if(aside) aside.scroll(0, 99999);
            ++numAnimation;
        }
    } else if(code === 37 || code === 33) { // page up ou flèche haut
        document.getElementById('courant').previousElementSibling.click();
    }
}