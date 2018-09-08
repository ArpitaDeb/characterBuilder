let btnSubmitRace = document.getElementById('btnSubmitRace');
let humanPanel = document.getElementById('charRaceHuman');
let elfPanel = document.getElementById('charRaceElf');
let dwarfPanel = document.getElementById('charRaceDwarf');
let halflingPanel = document.getElementById('charRaceHalfling');

const printCharRaceDescription = (num) => {
    fetch(`http://www.dnd5eapi.co/api/races/${num}/`)
        .then(res => {
            return res.json();
        })
        .then(charRace => {
            console.log(charRace.name);
            let descBox = document.getElementById('descriptionBox');

            let charRaceName = document.createElement('h2');
            charRaceName.innerText = charRace.name;
            descBox.appendChild(charRaceName);
            //CALL FUNCTIONS WITHIN THE .THEN!!!  PUSH stuff out from fetch, don't PULL from elsewhere! (Async issues)
            //Consider ONLY updating HTML, and then grabbing values from HTML when submitting. There may not really be a
            //need for the extra global JS object
        })

            // ToDo: Figure out how to grab each option and list (how is it passed from API?)
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
    printCharRaceDescription(4);
    humanPanel.classList.add('selected');
    currentChar.charRace = "Human";
    refreshSpecs();
}

const selectElf = () => {
    clearSelected();
    printCharRaceDescription(2);
    elfPanel.classList.add('selected');
    currentChar.charRace = "Elf";
    console.log(currentChar);
    refreshSpecs();
}

const selectDwarf = () => {
    clearSelected();
    printCharRaceDescription(1);
    dwarfPanel.classList.add('selected');
    currentChar.charRace = "Dwarf";
    console.log(currentChar);
    refreshSpecs();
}

const selectHalfling = () => {
    clearSelected();
    printCharRaceDescription(3);
    halflingPanel.classList.add('selected');
    currentChar.charRace = "Halfling";
    console.log(currentChar);
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