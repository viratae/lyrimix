
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
        const span = document.createElement("span");
        span.textContent = " " + array.shift();
        if(colorSwitch) {
            span.classList.add("fun");
        }
        lyric.append(span);
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