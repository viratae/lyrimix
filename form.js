import {
    renderer
} from "./render.js"
const form = (function formController() {
    const homePage = document.querySelector('#homePage');
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
        const lyrics = lyricInput.value;
        lyricArray = lyricController.cleanLyrics(lyrics, settings.removeSpecial);
        console.log(lyricArray);
        renderer.hide(homePage);
        renderer.show(lyricPage);
        lyricMode = true;
        console.log(settings);
        
    });
    document.addEventListener('keydown', (e) => {
        if(e.key === " " && lyricMode){
            e.preventDefault();
            renderer.displayNextWord(lyricArray, false);
        }
    });
    document.addEventListener('keydown', (e) => {
        if(e.shiftKey && lyricMode){
            e.preventDefault();
            renderer.displayNextWord(lyricArray, true);
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