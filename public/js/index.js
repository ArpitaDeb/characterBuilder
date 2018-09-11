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
    "charRace": "",
    "charClass": "",
    "charProfs": [],
    "charBaseAbs": [8,8,8,8,8,8],
    "charRaceAbs": [0,0,0,0,0,0],
    "charSpeed": 0,
    "charSize": "",
    "charLanguages": [],
    "raceProfs":[],
    "raceTraits":[]
}



const  clearSelected = () => {
    let selectedPanel = document.querySelector('.selected');
    let descBox = document.getElementById('descriptionBox');
    let specsTraits = document.getElementById('specsTraits')
    specsTraits.innerHTML = '';
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
    let specsSpeed = document.getElementById('specsSpeed');
    let specsSize = document.getElementById('specsSize');
    let specsTraits = document.getElementById('specsTraits');
    currentChar.charTotalAbs = currentChar.charBaseAbs.map(function (num, idx) {
        return num + currentChar.charRaceAbs[idx];
    });
    specsRace.innerHTML = `<div><strong>Race:</strong> ${currentChar.charRace}`;
    specsClass.innerHTML = `<div><strong>Class:</strong> ${currentChar.charClass}`;
    specsAbilities.innerHTML = `<div><strong>Strength:</strong> ${currentChar.charTotalAbs[0]}</div>
                                <div><strong>Dexterity:</strong> ${currentChar.charTotalAbs[1]}</div>
                                <div><strong>Constitution:</strong> ${currentChar.charTotalAbs[2]}</div>
                                <div><strong>Intelligence:</strong> ${currentChar.charTotalAbs[3]}</div>
                                <div><strong>Wisdom:</strong> ${currentChar.charTotalAbs[4]}</div>
                                <div><strong>Charisma:</strong> ${currentChar.charTotalAbs[5]}</div>`;
    specsSpeed.innerHTML = `<div><strong>Speed:</strong> ${currentChar.charSpeed} ft./round</div>`;
    specsSize.innerHTML = `<div><strong>Size:</strong> ${currentChar.charSize}</div>`;
    specsTraits.innerHTML = '<div><strong>Racial Traits:</div>';
    currentChar.raceTraits.forEach(trait => {
        traitTag = document.createElement('div');
        traitTag.innerHTML = trait.name;
        specsTraits.appendChild(traitTag);
    });
}



window.onload = () => {
    refreshSpecs();
    chooseRaceTab = document.getElementById('chooseRaceTab');
    chooseRaceTab.classList.remove('hidden');
    chooseRaceTab.classList.add('visibleGrid');
}

