let humanPanel = document.getElementById('charRaceHuman');
let elfPanel = document.getElementById('charRaceElf');
let dwarfPanel = document.getElementById('charRaceDwarf');
let dragonbornPanel = document.getElementById('charRaceDragonborn');
let charRaceName = document.createElement('h1');
let selectedColor = null;
let raceIndex;

const grabApiRace = (num) => {
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
            currentChar.raceTraits = charRace.traits;
            currentChar.raceProfs = [];
            charRace.starting_proficiencies.forEach((i) => {
                currentChar.raceProfs.push(i.name);
            });
            currentChar.charProfs = currentChar.raceProfs.concat(currentChar.classProfs);

            //display modal
            $(descModal).fadeIn(350);
            descModal.classList.add(selectedColor);
            descTitle.classList.add(selectedColor);
            descContent.classList.add(selectedColor);
            let descAbilities = document.createElement('div');
            let descTraits = document.createElement('div');
            let descSpeed = document.createElement('div');
            descTitle.innerHTML = `${charRace.name}`;
            descContent.appendChild(descTitle);
            if (charRace.name == "Human") {
                descAbilities.innerHTML = `<span class='gold'>Ability Score Bonuses:</span><br>+1 to all abilities`
            }
            else {
                let bonusAbIndex= charRace.ability_bonuses.findIndex(element => {return element != 0});
                descAbilities.innerHTML = `<span class='gold'>Ability Score Bonuses:</span><br>+${charRace.ability_bonuses[bonusAbIndex]} ${abilityLabels[bonusAbIndex]}`
            }
            descContent.appendChild(descAbilities);
            descTraits.innerHTML = `<span class='gold'>Traits:</span>`;
            charRace.traits.forEach(trait => {
                traitTag = document.createElement('div');
                traitTag.innerHTML = trait.name;
                descTraits.appendChild(traitTag);
            });
            descContent.appendChild(descTraits);
            descSpeed.innerHTML = `<span class='gold'>Speed:</span><br>${charRace.speed} feet/round<br>(6 seconds)`
            descContent.appendChild(descSpeed);
            let descRaceProfs = document.createElement('div');
            descRaceProfs.innerHTML = `<span class='gold'>Starting<br>Proficiencies:</span>`;
            charRace.starting_proficiencies.forEach(prof => {
                profTag = document.createElement('div');
                profTag.innerHTML = prof.name;
                descRaceProfs.appendChild(profTag);
            });
            descContent.appendChild(descRaceProfs);
            let descSize = document.createElement('div');
            descSize.setAttribute('id','descSize');
            descSize.classList.add('descPara');
            descSize.innerHTML = `<span class='gold'>Size: </span> ${charRace.size_description}`;
            descContent.appendChild(descSize);
            let descAge = document.createElement('div');
            descAge.classList.add('descPara');
            descAge.innerHTML = `<span class='gold'>Age: </span> ${charRace.age}`;
            descContent.appendChild(descAge);
            let descAlign = document.createElement('div');
            descAlign.classList.add('descPara');
            descAlign.innerHTML = `<span class='gold'>Alignment: </span> ${charRace.alignment}`;
            descContent.appendChild(descAlign);
            let descLang = document.createElement('div');
            descLang.classList.add('descPara');
            descLang.innerHTML = `<span class='gold'>Languages: </span> ${charRace.language_desc}`;
            descContent.appendChild(descLang);
            let raceDescDiv = document.createElement('div');
            raceDescDiv.classList.add('oneLinerDesc');
            raceDescDiv.innerHTML = raceDesc[raceIndex].description;
            descContent.appendChild(raceDescDiv);
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
    raceIndex = 0;
    grabApiRace(4);
    // refreshSpecs();
}

const selectElf = () => {
    clearSelected();
    elfPanel.classList.add('selected');
    selectedColor = "purple"
    raceIndex = 1;
    grabApiRace(2);
    // refreshSpecs();
}

const selectDwarf = () => {
    clearSelected();
    dwarfPanel.classList.add('selected');
    selectedColor = "orange"
    raceIndex = 2;
    grabApiRace(1);
    // refreshSpecs();
}

const selectDragonborn = () => {
    clearSelected();
    dragonbornPanel.classList.add('selected');
    selectedColor = "red"
    raceIndex = 3;
    grabApiRace(5);
    // refreshSpecs();
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