let humanPanel = document.getElementById('charRaceHuman');
let elfPanel = document.getElementById('charRaceElf');
let dwarfPanel = document.getElementById('charRaceDwarf');
let dragonbornPanel = document.getElementById('charRaceDragonborn');
let charRaceName = document.createElement('h1');
let selectedColor = null;

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

            //display modal
            $(descModal).fadeIn(350);
            descModal.classList.add(selectedColor);
            descContent.classList.add(selectedColor);
            charRaceName.setAttribute('id','descTitle')
            charRaceName.classList.add(selectedColor);
            let descAbilities = document.createElement('div');
            let descTraits = document.createElement('div');
            let descSpeed = document.createElement('div');
            charRaceName.innerHTML = `${charRace.name}`;
            descContent.appendChild(charRaceName);
            if (charRace.name == "Human") {
                descAbilities.innerHTML = `<strong>Ability Score Bonuses:</strong><br>+1 to all abilities`
            }
            else {
                let bonusAbIndex= charRace.ability_bonuses.findIndex(element => {return element != 0});
                descAbilities.innerHTML = `<strong>Ability Score Bonuses:</strong><br>+${charRace.ability_bonuses[bonusAbIndex]} ${abilityLabels[bonusAbIndex]}`
            }
            descContent.appendChild(descAbilities);
            descTraits.innerHTML = `<strong>Traits:</strong>`;
            charRace.traits.forEach(trait => {
                traitTag = document.createElement('div');
                traitTag.innerHTML = trait.name;
                descTraits.appendChild(traitTag);
            });
            descContent.appendChild(descTraits);
            descSpeed.innerHTML = `<strong>Speed:</strong><br>${charRace.speed} feet/round<br>(6 seconds)`
            descContent.appendChild(descSpeed);
            let descRaceProfs = document.createElement('div');
            descRaceProfs.innerHTML = `<strong>Starting<br>Proficiencies:</strong>`;
            charRace.starting_proficiencies.forEach(prof => {
                profTag = document.createElement('div');
                profTag.innerHTML = prof.name;
                descRaceProfs.appendChild(profTag);
            });
            descContent.appendChild(descRaceProfs);
            let descSize = document.createElement('div');
            descSize.setAttribute('id','descSize');
            descSize.classList.add('descPara');
            descSize.innerHTML = `<strong>Size: </strong> ${charRace.size_description}`;
            descContent.appendChild(descSize);
            let descAge = document.createElement('div');
            descAge.classList.add('descPara');
            descAge.innerHTML = `<strong>Age: </strong> ${charRace.age}`;
            descContent.appendChild(descAge);
            let descAlign = document.createElement('div');
            descAlign.classList.add('descPara');
            descAlign.innerHTML = `<strong>Alignment: </strong> ${charRace.alignment}`;
            descContent.appendChild(descAlign);
            let descLang = document.createElement('div');
            descLang.classList.add('descPara');
            descLang.innerHTML = `<strong>Languages: </strong> ${charRace.language_desc}`;
            descContent.appendChild(descLang);
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
    selectedColor = "blue"
    grabApiInfo(4);
    refreshSpecs();
}

const selectElf = () => {
    clearSelected();
    elfPanel.classList.add('selected');
    selectedColor = "purple"
    grabApiInfo(2);
    refreshSpecs();
}

const selectDwarf = () => {
    clearSelected();
    dwarfPanel.classList.add('selected');
    selectedColor = "orange"
    grabApiInfo(1);
    refreshSpecs();
}

const selectDragonborn = () => {
    clearSelected();
    dragonbornPanel.classList.add('selected');
    selectedColor = "red"
    grabApiInfo(5);
    refreshSpecs();
}

window.onclick = (event) => {
    if (event.target == descModal){
    $(descModal).fadeOut(350);
    }
}

humanPanel.addEventListener("click", selectHuman);
elfPanel.addEventListener("click", selectElf);
dwarfPanel.addEventListener("click", selectDwarf);
dragonbornPanel.addEventListener("click", selectDragonborn);