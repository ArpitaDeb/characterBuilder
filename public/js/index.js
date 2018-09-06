const changeTab = (toHide,toShow) => {
    let tabToHide = document.getElementById(toHide);
    let tabToShow = document.getElementById(toShow);
    tabToHide.classList.remove('visibleGrid');
    tabToHide.classList.add('hidden');
    tabToShow.classList.remove('hidden');
    tabToShow.classList.add('visibleGrid');
}

const currentChar = {
    "playerName": "",
    "charName": "",
    "charRace": "",
    "charClass": "",
    "charProfs": [],
    "baseSTR": 8,
    "baseDEX": 8,
    "baseCON": 8,
    "baseINT": 8,
    "baseWIS": 8,
    "baseCHA": 8,
    "raceSTR": 0,
    "raceDEX": 0,
    "raceCON": 0,
    "raceINT": 0,
    "raceWIS": 0,
    "raceCHA": 0,
}

window.onload = () => {
    chooseRaceTab = document.getElementById('chooseRaceTab');
    chooseRaceTab.classList.remove('hidden');
    chooseRaceTab.classList.add('visibleGrid');
}

