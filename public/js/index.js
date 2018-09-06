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

const  clearSelected = () => {
    let selectedPanel = document.querySelector('.selected');
    let descBox = document.getElementById('descriptionBox');
    if(selectedPanel) {
        selectedPanel.classList.remove('selected');
    }
    if(descBox.innerHTML) {
        descBox.innerHTML = '';
    }
}

const refreshSpecs = () => {
    let specsRace = document.getElementById('specsRace');
    let specsClass = document.getElementById('specsClass');
    let specsAbilities = document.getElementById('specsAbilities');
    specsRace.innerHTML = `<div><strong>Race:</strong> ${currentChar.charRace}`;
    specsClass.innerHTML = `<div><strong>Class:</strong> ${currentChar.charClass}`;
    specsAbilities.innerHTML = `<div><strong>Strength:</strong> ${currentChar.baseSTR + currentChar.raceSTR}</div>
                                <div><strong>Dexterity:</strong> ${currentChar.baseDEX + currentChar.raceDEX}</div>
                                <div><strong>Constitution:</strong> ${currentChar.baseCON + currentChar.raceCON}</div>
                                <div><strong>Intelligence:</strong> ${currentChar.baseINT + currentChar.raceINT}</div>
                                <div><strong>Wisdom:</strong> ${currentChar.baseWIS + currentChar.raceWIS}</div>
                                <div><strong>Charisma:</strong> ${currentChar.baseCHA + currentChar.raceCHA}</div>`
}



window.onload = () => {
    refreshSpecs();
    chooseRaceTab = document.getElementById('chooseRaceTab');
    chooseRaceTab.classList.remove('hidden');
    chooseRaceTab.classList.add('visibleGrid');
}

