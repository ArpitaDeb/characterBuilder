
const printCharClassDescription = (num) => {
    fetch(`http://www.dnd5eapi.co/api/classes/${num}/`)
        .then(res => {
            return res.json();
        })
        .then(charClass => {
            let descBox = document.getElementById('descriptionBox');

            let charClassName = document.createElement('h2');
            charClassName.innerText = charClass.name;
            descBox.appendChild(charClassName);

            let hitDie = document.createElement('p');
            hitDie.innerText = `Hit Die: ${charClass.hit_die}`;
            descBox.appendChild(hitDie);
        })

            // ToDo: Figure out how to grab each option and list (how is it passed from API?)
}


let fighterPanel = document.getElementById('charClassFighter');
let clericPanel = document.getElementById('charClassCleric');
let roguePanel = document.getElementById('charClassRogue');
let wizardPanel = document.getElementById('charClassWizard');

const selectFighter = () => {
    clearSelected();
    printCharClassDescription(5);
    fighterPanel.classList.add('selected');
    currentChar.charClass = "Fighter";
    console.log(currentChar);
    refreshSpecs();
}

const selectCleric = () => {
    clearSelected();
    printCharClassDescription(3);
    clericPanel.classList.add('selected');
    currentChar.charClass = "Cleric";
    console.log(currentChar);
    refreshSpecs();
}

const selectRogue = () => {
    clearSelected();
    printCharClassDescription(9);
    roguePanel.classList.add('selected');
    currentChar.charClass = "Rogue";
    console.log(currentChar);
    refreshSpecs();
}

const selectWizard = () => {
    clearSelected();
    printCharClassDescription(12);
    wizardPanel.classList.add('selected');
    currentChar.charClass = "Wizard";
    console.log(currentChar);
    refreshSpecs();
}

fighterPanel.addEventListener("click", selectFighter);
clericPanel.addEventListener("click", selectCleric);
roguePanel.addEventListener("click", selectRogue);
wizardPanel.addEventListener("click", selectWizard);

btnSubmitClass.onclick = () => {
    //Submit Class data to database?
    changeTab('chooseClassTab','chooseProfsTab');
}

btnUndoClass.onclick = () => {
    //Wipe all Class data from current character object
    changeTab('chooseClassTab','chooseRaceTab');
}