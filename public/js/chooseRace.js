let btnSubmitRace = document.getElementById('btnSubmitRace');
let humanPanel = document.getElementById('charRaceHuman');
let elfPanel = document.getElementById('charRaceElf');
let dwarfPanel = document.getElementById('charRaceDwarf');
let halflingPanel = document.getElementById('charRaceHalfling');

const grabApiInfo = (num) => {
    fetch(`http://www.dnd5eapi.co/api/races/${num}/`)
        .then(res => {
            return res.json();
        })
        .then(charRace => {
            //Update currentChar object
            currentChar.charRace = charRace.name;
            currentChar.charRaceAbs = charRace.ability_bonuses;
            currentChar.charSpeed = charRace.speed;
            currentChar.charSize = charRace.size;
            currentChar.charLanguages = charRace.languages;
            currentChar.raceProfs = charRace.starting_proficiencies;
            currentChar.raceTraits = charRace.traits;

            //Update Description Box
            let descBox = document.getElementById('descriptionBox');
            let charRaceName = document.createElement('div');
            let descAbilities = document.createElement('div');
            charRaceName.innerHTML = `<h2 id="raceDescTitle">${charRace.name}</h2>`;
            descBox.appendChild(charRaceName);
            if (charRace.name == "Human") {
                descAbilities.innerHTML = `<strong>Ability Score Bonuses:</strong><br>+1 to all abilities`
                console.log(currentChar.charRace);
            }
            else {
                let bonusAbIndex= charRace.ability_bonuses.findIndex(element => {return element != 0});
                descAbilities.innerHTML = `<strong>Ability Score Bonuses:</strong><br>+${charRace.ability_bonuses[bonusAbIndex]} ${abilityLabels[bonusAbIndex]}`
            }
            descBox.appendChild(descAbilities);

            currentChar.raceTraits.forEach(trait => {
                traitTag = document.createElement('div');
                traitTag.innerHTML = trait.name;
                specsTraits.appendChild(traitTag);
            });
        })
        .then( () => {
            refreshSpecs();
        })
}

const resetRacialAbilities = () => {
    currentChar.raceSTR = 0;
    currentChar.raceDEX = 0;
    currentChar.raceCON = 0;
    currentChar.raceINT = 0;
    currentChar.raceWIS = 0;
    currentChar.raceCHA = 0;
}

const selectHuman = () => {
    clearSelected();
    humanPanel.classList.add('selected');
    grabApiInfo(4);
    refreshSpecs();
}

const selectElf = () => {
    clearSelected();
    grabApiInfo(2);
    elfPanel.classList.add('selected');
    refreshSpecs();
}

const selectDwarf = () => {
    clearSelected();
    grabApiInfo(1);
    dwarfPanel.classList.add('selected');
    refreshSpecs();
}

const selectHalfling = () => {
    clearSelected();
    grabApiInfo(3);
    halflingPanel.classList.add('selected');
    refreshSpecs();
}

humanPanel.addEventListener("click", selectHuman);
elfPanel.addEventListener("click", selectElf);
dwarfPanel.addEventListener("click", selectDwarf);
halflingPanel.addEventListener("click", selectHalfling);

btnSubmitRace.onclick = () => {
    //Submit Race data to database?
    changeTab('chooseRaceTab','chooseClassTab');

}

btnUndoRace.onclick = () => {
    //Wipe all Race data from current character object
    changeTab('chooseRaceTab','???')
}