
const renderer = (function () {
    function displayNextWord(array, colorSwitch = false) {
        const lyric = document.querySelector('#lyric');
        lyric.classList.remove("fun");
        console.log("got here");
        console.log(array);
        lyric.textContent = array.shift();
        if(colorSwitch) {
            lyric.classList.add("fun");
        }
    }
    function show(toShow) {
        toShow.classList.remove("hidden");
    }
    function hide(toHide) {
        toHide.classList.add("hidden");
    }
    return {
        displayNextWord,
        show, 
        hide
    }
})();
export {
    renderer
}