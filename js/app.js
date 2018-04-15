document.getElementById('player').style.top = '50px';
document.getElementById('player').style.left = '50px';


document.body.onkeydown = function (e) {
    var el = document.getElementById('player');

    var KEYCODE_LEFT = 37;
    var KEYCODE_TOP = 38;
    var KEYCODE_RIGHT = 39;
    var KEYCODE_BOTTOM = 40;
    var KEYCODE_SPACEDOWN = 32;

    if (e.keyCode == KEYCODE_LEFT) {
        el.style.left = (parseInt(el.style.left) - 10) + 'px';
        if (parseInt(el.style.left) < 0) {
            el.style.left = (parseInt(el.style.left) + 10) + 'px';
        }
    }
    else if (e.keyCode == KEYCODE_RIGHT) {
        el.style.left = (parseInt(el.style.left) + 10) + 'px';
        if (document.body.clientWidth < parseInt(el.style.left)) {
            el.style.left = (parseInt(el.style.left) - 10) + 'px';
        }
    }
    else if (e.keyCode == KEYCODE_TOP)
    {
        el.style.top = (parseInt(el.style.top) - 10) + 'px';
        if (parseInt(el.style.top) < 0) {
            el.style.top = (parseInt(el.style.top) + 10) + 'px';
        }
    }
    else if (e.keyCode == KEYCODE_BOTTOM)
    {
        el.style.top = (parseInt(el.style.top) + 10) + 'px';
        if (document.documentElement.clientHeight - 5 < parseInt(el.style.top)) {
            el.style.top = (parseInt(el.style.top) - 10) + 'px';
        }
    }
    else if (e.keyCode == KEYCODE_SPACEDOWN) {
        var piv_piv = document.createElement("span");
        piv_piv.classList.add('piuv');
        piv_piv.style.top = parseInt(el.style.top) + 5 +'px';
        piv_piv.style.left = parseInt(el.style.left) + 5 + 'px';
        animate(function() {
            if (parseInt(piv_piv.style.top) < document.documentElement.clientHeight) {
                document.body.appendChild(piv_piv);
                piv_piv.style.top = parseInt(piv_piv.style.top) + 5 + 'px';
            } else {
                piv_piv.classList.remove('piuv');
            }
        }, 100000);
    }
}

function animate(draw, duration) {
    var start = performance.now();

    requestAnimationFrame(function animate(time) {
        var timePassed = time - start;
        if (timePassed > duration) timePassed = duration;

        draw(timePassed);
        if (timePassed < duration) {
            requestAnimationFrame(animate);
        }

    });
}