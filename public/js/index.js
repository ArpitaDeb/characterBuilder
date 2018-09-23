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
let finalPageContainer



const abilityLabels = ['Strength','Dexterity','Constitution','Intelligence','Wisdom','Charisma'];
const classDesc = [
    {"name": "Fighter", "description": "A master of martial combat, skilled with a variety of weapons and armor."},
    {"name": "Rogue", "description": "A scoundrel who uses stealth and trickery to overcome obstacles and enemies."},
    {"name": "Cleric", "description": "A priestly champion who wields divine magic in service of a higher power."},
    {"name": "Wizard", "description": "A scholarly magic-user capable of manipulating the structures of reality."}
]
const raceDesc = [
    {"name": "Human", "description": "Humans are the most adaptable and ambitious people among the common races. Whatever drives them, humans are the innovators, the achievers, and the pioneers of the worlds."},
    {"name": "Elf", "description": "Elves are a magical people of otherworldly grace, living in the world but not entirely part of it."},
    {"name": "Dwarf", "description": "Bold and hardy, dwarves are known as skilled warriors, miners, and workers of stone and metal."},
    {"name": "Dragonborn", "description": "Dragonborn look very much like dragons standing erect in humanoid form, though they lack wings or a tail."},
]

const calcChar = () => {
    currentChar.charTotalAbs = currentChar.charBaseAbs.map(function (num, idx) {
        return num + currentChar.charRaceAbs[idx];
    });

    abilityLabels.forEach((ab) => {
        let i = abilityLabels.indexOf(ab);
        switch (currentChar.charTotalAbs[i]) {
            case 8:
            case 9:
                currentChar.charTotalMods[i] = -1;
                break;
            case 10:
            case 11:
                currentChar.charTotalMods[i] = 0;
                break;
            case 12:
            case 13:
                currentChar.charTotalMods[i] = 1;
                break;
            case 14:
            case 15:
                currentChar.charTotalMods[i] = 2;
                break;
            case 16:
            case 17:
                currentChar.charTotalMods[i] = 3;
                break;
            case 18:
            case 19:
                currentChar.charTotalMods[i] = 4;
                break;
            case 20:
            case 21:
                currentChar.charTotalMods[i] = 5;
                break;
            default:
                currentChar.charTotalMods[i] = 0;
        }
    });

    currentChar.charSkills.forEach((skill) => {
        if (skill.proficient == true) {
        skill.value = currentChar.charTotalMods[skill.abMod] + currentChar.profBonus;
        }
        else {
            skill.value = currentChar.charTotalMods[skill.abMod];
        }
    })
    currentChar.classSavesArr = [0,0,0,0,0,0];
    currentChar.classSaves.forEach(save => {
        switch (save) {
            case 'STR':
                currentChar.classSavesArr[0] = currentChar.profBonus;
                break;
            case 'DEX':
                currentChar.classSavesArr[1] = currentChar.profBonus;
                break;
            case 'CON':
                currentChar.classSavesArr[2] = currentChar.profBonus;
                break;
            case 'INT':
                currentChar.classSavesArr[3] = currentChar.profBonus;
                break;
            case 'WIS':
                currentChar.classSavesArr[4] = currentChar.profBonus;
                break;
            case 'CHA':
                currentChar.classSavesArr[5] = currentChar.profBonus;
                break;
        }
    })
    currentChar.charSavesArr = currentChar.charTotalMods.map(function (num, idx) {
        return num + currentChar.classSavesArr[idx];
    });
    
}

const refreshSpecs = () => {
    let specsName = document.getElementById('specsName');
    let specsRace = document.getElementById('specsRace');
    let specsClass = document.getElementById('specsClass');
    let specsAbilities = document.getElementById('specsAbilities');
    let specsSpeed = document.getElementById('specsSpeed');
    let specsSize = document.getElementById('specsSize');
    let specsTraits = document.getElementById('specsTraits');
    let specsSkills = document.getElementById('specsSkills');

    calcChar();

    specsName.innerHTML = `<h1>${currentChar.charName}</h1>`;
    specsRace.innerHTML = `<span class='gold'>Race:</span> ${currentChar.charRace}`;
    specsClass.innerHTML = `<span class='gold'>Class:</span> ${currentChar.charClass}`;
    specsAbilities.innerHTML = ``;
    let i = -1;
    abilityLabels.forEach(ability => {
        i++
        abilityLabel = document.createElement('div');
        abilityLabel.innerHTML = `<span class='gold'>${ability}:</span> ${currentChar.charTotalAbs[i]} [${currentChar.charTotalMods[i]}]`;
        specsAbilities.appendChild(abilityLabel);
    });
    specsSpeed.innerHTML = `<span class='gold'>Speed:</span> ${currentChar.charSpeed} ft./round`;
    specsSize.innerHTML = `<span class='gold'>Size:</span> ${currentChar.charSize}`;
    specsTraits.innerHTML = `<span class='gold'>Racial Traits:</span>`;
    currentChar.raceTraits.forEach(trait => {
        traitTag = document.createElement('div');
        traitTag.innerHTML = trait.name;
        specsTraits.appendChild(traitTag)
    });
    specsProfs.innerHTML = `<span class='gold'>Proficiencies:</span>`;
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
    calcChar();
    if (currentTab < 1) {   //CHANGE WITH FINAL PAGE VALUE
        $(tab[currentTab]).fadeOut(350);
        currentTab++
        setTimeout(() => {
            $(tab[currentTab]).fadeIn(700);
        }, 350);
    }
    else {
        refreshFinal();
        $(pageContainer).fadeOut(350);
        setTimeout(() => {
            $(finalPageContainer).fadeIn(700);
        },350);
    }
}

const tabBack = () => {
    if (currentTab > 0) {  //CHANGE WITH FINAL PAGE VALUE
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
    finalPageContainer = document.getElementById('finalPageContainer');
    $(finalPageContainer).hide();
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
    currentTab = 0;

}

