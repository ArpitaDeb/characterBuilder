// const changeTab = (toHide,toShow) => {
//     let tabToHide = document.getElementById(toHide);
//     let tabToShow = document.getElementById(toShow);
//     tabToHide.classList.remove('visibleGrid');
//     tabToHide.classList.add('hidden');
//     tabToShow.classList.remove('hidden');
//     tabToShow.classList.add('visibleGrid');
// }

const abilityLabels = ['Strength','Dexterity','Constitution','Intelligence','Wisdom','Charisma']
const currentChar = {
    "playerName": "",
    "charName": "Character Name",
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
    specsName.innerHTML = 'Hmm?'
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



window.onload = () => {
    refreshSpecs();
    // chooseRaceTab = document.getElementById('chooseRaceTab');
    // chooseRaceTab.classList.remove('hidden');
    // chooseRaceTab.classList.add('visibleGrid');

    let tab = document.querySelectorAll('.tab');
    let currentTab = 0;
    let btnNext = document.getElementById('btnNext');
    let btnBack = document.getElementById('btnBack');

    const showTab = (n) => {
        // let tab = document.querySelectorAll('.tab');
        tab[n].style.display = "inline-grid";
    }
    showTab(currentTab);



    btnNext.onclick = () => {
        tab[currentTab].style.display = "none";
        currentTab++
        showTab(currentTab);
    }
    
    btnBack.onclick = () => {
        tab[currentTab].style.display = "none";
        currentTab--
        showTab(currentTab);
}
}

