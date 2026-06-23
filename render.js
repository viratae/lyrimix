
const renderer = (function () {
    function displayNextWord(array, colorSwitch = false) {
        const lyric = document.querySelector('#lyric');
        lyric.classList.remove("fun");
        lyric.textContent = array.shift();
        if(colorSwitch) {
            lyric.classList.add("fun");
        }
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
        addClass,
        show, 
        hide
    }
})();
export {
    renderer
}