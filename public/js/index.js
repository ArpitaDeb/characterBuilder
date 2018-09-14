let specsContainer;
let tab;
let descModal;
let descContent;
let currentTab;
let pageContainer;
let btnNext;
let btnBack;
let chooseRaceTab;
let chooseClassTab;
let descTitle = document.createElement('h1');



const abilityLabels = ['Strength','Dexterity','Constitution','Intelligence','Wisdom','Charisma'];
const currentChar = {
    "playerName": "",
    "charName": "Mysterious Person",
    "charRace": "",
    "charClass": "",
    "charProfs": [],
    "charBaseAbs": [12,14,17,8,10,13],
    "charRaceAbs": [0,0,0,0,0,0],
    "charTotalMods": [0,0,0,0,0,0],
    "charSpeed": 0,
    "charSize": "",
    "charLanguages": [],
    "raceProfs":[],
    "classProfs":[],
    "raceTraits":[],
    "charSkills": [
        {"name": "Acrobatics", "abMod": 1,
        "value": 0},
        {"name": "Animal Handling", "abMod": 4,
        "value": 0},
        {"name": "Arcana", "abMod": 3,
        "value": 0},
        {"name": "Athletics", "abMod": 0,
        "value": 0},
        {"name": "Deception", "abMod": 5,
        "value": 0},
        {"name": "History", "abMod": 3,
        "value": 0},
        {"name": "Insight", "abMod": 4,
        "value": 0},
        {"name": "Intimidation", "abMod": 5,
        "value": 0},
        {"name": "Investigation", "abMod": 3,
        "value": 0},
        {"name": "Medicine", "abMod": 4,
        "value": 0},
        {"name": "Nature", "abMod": 3,
        "value": 0},
        {"name": "Perception", "abMod": 4,
        "value": 0},
        {"name": "Performance", "abMod": 5,
        "value": 0},
        {"name": "Persuasion", "abMod": 5,
        "value": 0},
        {"name": "Religion", "abMod": 3,
        "value": 0},
        {"name": "Sleight of Hand", "abMod": 1,
        "value": 0},
        {"name": "Stealth", "abMod": 1,
        "value": 0},
        {"name": "Survival", "abMod": 4,
        "value": 0},
    ]
}



const refreshSpecs = () => {
    console.log('refreshSpecs called');
    let specsName = document.getElementById('specsName');
    let specsRace = document.getElementById('specsRace');
    let specsClass = document.getElementById('specsClass');
    let specsAbilities = document.getElementById('specsAbilities');
    let specsSpeed = document.getElementById('specsSpeed');
    let specsSize = document.getElementById('specsSize');
    let specsTraits = document.getElementById('specsTraits');
    let specsSkills = document.getElementById('specsSkills');

    currentChar.charTotalAbs = currentChar.charBaseAbs.map(function (num, idx) {
        return num + currentChar.charRaceAbs[idx];
    });
    abilityLabels.forEach((ab) => {
        let i = abilityLabels.indexOf(ab);
        switch (currentChar.charTotalAbs[i]) {
            case (8 || 9):
                currentChar.charTotalMods[i] = -1;
                break;
            case (10 || 11):
                currentChar.charTotalMods[i] = 0;
                break;
            case (12 || 13):
                currentChar.charTotalMods[i] = 1;
                break;
            case (14 || 15):
                currentChar.charTotalMods[i] = 2;
                break;
            case (16 || 17):
                currentChar.charTotalMods[i] = 3;
                break;
            case (18 || 19):
                currentChar.charTotalMods[i] = 4;
                break;
            default:
                currentChar.charTotalMods[i] = 0;
        }
    });

    currentChar.charSkills.forEach((skill) => {
        console.log(`charTotalMods: ${currentChar.charTotalMods[skill.abMod]}`);
        skill.value = currentChar.charTotalMods[skill.abMod] + 1;
    })

    specsName.innerHTML = `<h1>${currentChar.charName}</h1>`;
    specsRace.innerHTML = `<div><strong>Race:</strong> ${currentChar.charRace}`;
    specsClass.innerHTML = `<div><strong>Class:</strong> ${currentChar.charClass}`;
    specsAbilities.innerHTML = ``;
    let i = -1;
    abilityLabels.forEach(ability => {
        i++
        abilityLabel = document.createElement('div');
        abilityLabel.innerHTML = `<strong>${ability}:</strong> ${currentChar.charTotalAbs[i]} [${currentChar.charTotalMods[i]}]`;
        specsAbilities.appendChild(abilityLabel);
    });
    specsSpeed.innerHTML = `<div><strong>Speed:</strong> ${currentChar.charSpeed} ft./round</div>`;
    specsSize.innerHTML = `<div><strong>Size:</strong> ${currentChar.charSize}</div>`;
    specsTraits.innerHTML = '<div><strong>Racial Traits:</strong></div>';
    currentChar.raceTraits.forEach(trait => {
        traitTag = document.createElement('div');
        traitTag.innerHTML = trait.name;
        specsTraits.appendChild(traitTag)
    });
    specsProfs.innerHTML = '<strong>Proficiencies:</strong>';
    currentChar.charProfs.forEach(prof => {
        profTag = document.createElement('div');
        profTag.innerHTML = prof;
        specsProfs.appendChild(profTag);
    });
    specsSkills.innerHTML = '<strong>Skills:</strong>';
    currentChar.charSkills.forEach(skill => {
        skillTag = document.createElement('div');
        skillTag.innerHTML = `${skill.name}: ${skill.value}`;
        specsSkills.appendChild(skillTag);
    });
}

const clearSelected = () => {
    let selectedPanel = document.querySelector('.selected');
    let specsTraits = document.getElementById('specsTraits');
    let specsProfs = document.getElementById('specsProfs');
    specsTraits.innerHTML = '';
    specsProfs.innerHTML = '';
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
        descTitle.classList.remove(selectedColor);
    }
}

const tabNext = () => {
    $(tab[currentTab]).fadeOut(350);
    currentTab++
    setTimeout(() => {
        $(tab[currentTab]).fadeIn(700);
    },350);
}

const tabBack = () => {
    if (currentTab > 0) {
        $(tab[currentTab]).fadeOut(350);
        currentTab--
        setTimeout(() => {
            $(tab[currentTab]).fadeIn(700);
        }, 350);
    }
    else {
        const backToStart = () => {
            window.location.replace('/');
        }
        $(pageContainer).fadeOut(350,backToStart);
    }

}

window.onload = () => {
    pageContainer = document.getElementById('pageContainer');
    $(pageContainer).hide();
    chooseRaceTab = document.getElementById('chooseRaceTab');
    chooseClassTab = document.getElementById('chooseClassTab');
    $(chooseClassTab).hide();
    descModal = document.getElementById('descModal');
    $(descModal).hide();
    descContent = document.getElementById('descContent');
    specsContainer = document.getElementById('specsContainer');
    descTitle.setAttribute('id','descTitle');
    $(specsContainer).hide();
    tab = document.querySelectorAll('.tab');
    btnNext = document.getElementById('btnNext')
    btnBack = document.getElementById('btnBack')
    btnNext.addEventListener("click",tabNext);
    btnBack.addEventListener("click",tabBack);
    $(btnNext).hide();
    $(btnBack).hide();
    $(welcomePageContainer).show();
    let blanket = document.getElementById('blanket');
    $(blanket).fadeOut(350);
    setTimeout(() => {
        blanket.parentNode.removeChild(blanket);
    },400);
    
    currentTab = 0;
}

