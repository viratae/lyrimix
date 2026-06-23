
const renderer = (function () {
    const lyric = document.querySelector('#lyric');
    function displayNextWord(array, colorSwitch = false) {
        lyric.classList.remove("fun");
        lyric.textContent = array.shift();
        if(colorSwitch) {
            lyric.classList.add("fun");
        }
    }
    function appendNextWord(array, colorSwitch = false) {
        if(!colorSwitch) {
            lyric.textContent += (" " + array.shift());
        }
        else if(colorSwitch) {
            const span = document.createElement("span");
            span.classList.add("fun");
            span.textContent = " " + array.shift();
            lyric.append(span);
        }
    }
    function clearText() {
        lyric.textContent = "";
    }
    function addClass(element, className) {
        element.classList.add(className)
    }
    function show(toShow) {
        toShow.classList.remove("hidden");
    }
    function hide(toHide) {
        toHide.classList.add("hidden");
    }
    return {
        displayNextWord,
        appendNextWord,
        clearText,
        addClass,
        show, 
        hide
    }
})();
export {
    renderer
}