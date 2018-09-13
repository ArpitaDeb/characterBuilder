let specsContainer;
let tab;
let descModal;
let descContent;
let currentTab;
let pageContainer;
let btnNext;
let btnBack;


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

const show = (element) => {
    if (element.classList.contains('hidden')) {
        element.classList.remove('hidden');
    }
    element.classList.add('visibleGrid');
}

const hide = (element) => {
    if (element.classList.contains('visibleGrid')) {
        element.classList.remove('visibleGrid');
    }
    element.classList.add('hidden');
}
const tabNext = () => {
    hide(tab[currentTab]);
    currentTab++
    show(tab[currentTab]);
}

const tabBack = () => {
    if (currentTab > 0) {
        hide(tab[currentTab]);
        currentTab--
        show(tab[currentTab]);
    }
    else {
        window.location.replace('/')
    }

}

window.onload = () => {
    pageContainer = document.getElementById('pageContainer');
    descModal = document.getElementById('descModal');
    descContent = document.getElementById('descContent');
    specsContainer = document.getElementById('specsContainer');
    tab = document.querySelectorAll('.tab');
    btnNext = document.getElementById('btnNext')
    btnBack = document.getElementById('btnBack')
    btnNext.addEventListener("click",tabNext);
    btnBack.addEventListener("click",tabBack);
    hide(btnNext);
    hide(btnBack);
    show(welcomePageContainer);
    
    
    currentTab = 0;
}

    



// }

