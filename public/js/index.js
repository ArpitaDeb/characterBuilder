const abilityLabels = ['Strength','Dexterity','Constitution','Intelligence','Wisdom','Charisma'];
const currentChar = {
    "playerName": "",
    "charName": "Mysterious Person",
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

const refreshSpecs = () => {
    let specsName = document.getElementById('specsName');
    let specsRace = document.getElementById('specsRace');
    let specsClass = document.getElementById('specsClass');
    let specsAbilities = document.getElementById('specsAbilities');
    let specsSpeed = document.getElementById('specsSpeed');
    let specsSize = document.getElementById('specsSize');
    let specsTraits = document.getElementById('specsTraits');
    currentChar.charTotalAbs = currentChar.charBaseAbs.map(function (num, idx) {
        return num + currentChar.charRaceAbs[idx];
    });
    specsName.innerHTML = `<h1>${currentChar.charName}</h1>`;
    specsRace.innerHTML = `<div><strong>Race:</strong> ${currentChar.charRace}`;
    specsClass.innerHTML = `<div><strong>Class:</strong> ${currentChar.charClass}`;
    specsAbilities.innerHTML = ``;
    let i = -1;
    abilityLabels.forEach(ability => {
        i++
        abilityLabel = document.createElement('div');
        abilityLabel.innerHTML = `<strong>${ability}:</strong> ${currentChar.charTotalAbs[i]}`;
        specsAbilities.appendChild(abilityLabel);
    });
    specsSpeed.innerHTML = `<div><strong>Speed:</strong> ${currentChar.charSpeed} ft./round</div>`;
    specsSize.innerHTML = `<div><strong>Size:</strong> ${currentChar.charSize}</div>`;
    specsTraits.innerHTML = '<div><strong>Racial Traits:</div>';
    currentChar.raceTraits.forEach(trait => {
        traitTag = document.createElement('div');
        traitTag.innerHTML = trait.name;
        specsTraits.appendChild(traitTag);
    });
}

const clearSelected = () => {
    let selectedPanel = document.querySelector('.selected');
    let specsTraits = document.getElementById('specsTraits');
    specsTraits.innerHTML = '';
    if (selectedPanel) {
        selectedPanel.classList.remove('selected');
    }
    if(descContent.innerHTML) {
        descContent.innerHTML = '';
    }
    if(selectedColor) {
        charRaceName.classList.remove(selectedColor);
        descModal.classList.remove(selectedColor);
        descContent.classList.remove(selectedColor);
    }
}
let currentTab;
let tab;

const showTab = (n) => {
    tab[n].style.display = "grid";
}
const tabNext = () => {
    tab[currentTab].style.display = "none";
    currentTab++
    showTab(currentTab);
}

const tabBack = () => {
    tab[currentTab].style.display = "none";
    currentTab--
    showTab(currentTab);
}

window.onload = () => {
    document.getElementById('pageContainer').display = 'none';
    document.getElementById('btnNext').addEventListener("click",tabNext);
    document.getElementById('btnBack').addEventListener("click",tabBack);
    tab = document.querySelectorAll('.tab');
    welcomePageContainer.classList.add('visibleGrid');
}

    



// }

