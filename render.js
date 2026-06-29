const renderer = (function () {
    const questionIcon = document.querySelector('#questionIcon');
    const modal = document.querySelector('.modal');
    questionIcon.addEventListener('click', () => {
        modal.classList.add("show");
        console.log("dsfkjfsd");
    });
    const closeModal = document.querySelector('#closeModal');
    closeModal.addEventListener('click', () => {
        modal.classList.remove("show");
    });
    const lyric = document.querySelector('#lyric');
    function displayNextWord(array, colorSwitch = false) {
        lyric.classList.remove("fun");
        lyric.textContent = array.shift();
        if(colorSwitch) {
            lyric.classList.add("fun");
        }
    }
    function appendNextWord(array, colorSwitch = false) {
        if(array.length < 1) {
            return;
        }
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
