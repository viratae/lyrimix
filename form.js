import {
    renderer
} from "./render.js"
const form = (function formController() {
    const homePage = document.querySelector('#homePage');
    const lyric = document.querySelector('#lyric');
    const lyricPage = document.querySelector('#lyricPage');
    const settingsForm = document.querySelector('#settingsForm');
    const lyricInput = document.querySelector('#lyricInput');

    const modeInput = document.querySelector('#modeInput');
    const pulsingInput = document.querySelector('#pulsingInput');
    const removeSpecialInput = document.querySelector('#removeSpecialInput');
    const colorSwitchInput = document.querySelector('#colorSwitchInput');

    let lyricArray;
    let settings = {
        mode: "single",
        pulsing: true,
        removeSpecial: true,
        colorSwitch: false
    }
    let lyricMode = false;
    settingsForm.addEventListener('submit', (e) => {
        e.preventDefault();
        settings.mode = modeInput.value;
        settings.pulsing = pulsingInput.checked;
        settings.removeSpecial = removeSpecialInput.checked;
        settings.colorSwitch = colorSwitchInput.checked;
        if(settings.pulsing) {
            renderer.addClass(lyric, "pulsing")
        }
        const lyrics = lyricInput.value;
        lyricArray = lyricController.cleanLyrics(lyrics, settings.removeSpecial);

        renderer.hide(homePage);
        renderer.show(lyricPage);
        lyricMode = true;

        console.log(settings);
        
    });
    document.addEventListener('keydown', (e) => {
        // SPACE KEY (displays next word)
        if(e.key === " " && lyricMode && settings.mode == "single"){
            e.preventDefault();
            renderer.displayNextWord(lyricArray, false);
        }
        else if(e.key === " " && lyricMode && settings.mode == "line"){
            e.preventDefault();
            renderer.appendNextWord(lyricArray, false);
        }
        // SHIFT KEY (displays next word in color)
        if(e.shiftKey && lyricMode && settings.colorSwitch && settings.mode == "single") {
            e.preventDefault();
            renderer.displayNextWord(lyricArray, true);
        }
        else if(e.shiftKey && lyricMode && settings.colorSwitch && settings.mode == "line") {
            e.preventDefault();
            renderer.appendNextWord(lyricArray, true);
            console.log("Detected");
        }
        // BACKSPACE (clears screen)
        if(e.key === "Backspace" && lyricMode) {
            e.preventDefault();
            renderer.clearText();
        }
        // ENTER (clears screen and shows next word)
        if(e.key === "Enter" && lyricMode) {
            renderer.clearText();
            e.preventDefault();
            if(settings.mode == "single") {
                renderer.displayNextWord(lyricArray, false);
            }
            else if(settings.mode == "line") {
                renderer.appendNextWord(lyricArray, false);
            }
        }
    });
    
    return {

    }
})();
export {
    form
}
const lyricController = (function () {
    function cleanLyrics(lyrics, removeSpecial) {
        let filtered = lyrics
        if(removeSpecial) {
            filtered = lyrics
                .replaceAll('(', '')
                .replaceAll(')', '')
                .replaceAll('"', '')
        }
        const filteredArray = filtered.split(/\s+/);
        return filteredArray;
    }
    return {
        cleanLyrics
    }
})();