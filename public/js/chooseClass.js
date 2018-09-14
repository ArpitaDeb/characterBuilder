let wizardPanel = document.getElementById('charClassWizard');
let roguePanel = document.getElementById('charClassRogue');
let clericPanel = document.getElementById('charClassCleric');
let fighterPanel = document.getElementById('charClassFighter');
let charClassName = document.createElement('h1');

const grabApiClass = (num) => {
    fetch(`http://www.dnd5eapi.co/api/classes/${num}/`)
        .then(res => {
            return res.json();
        })
        .then(charClass => {
            //Update currentChar object
            currentChar.charClass = charClass.name;
            currentChar.classProfs = [];
            charClass.proficiencies.forEach((i) => {
                currentChar.classProfs.push(i.name);
            });
            currentChar.charProfs = currentChar.raceProfs.concat(currentChar.classProfs);

            //display modal
            $(descModal).fadeIn(350);
            descModal.classList.add(selectedColor);
            descTitle.classList.add(selectedColor);
            descContent.classList.add(selectedColor);
            descTitle.innerHTML = `${charClass.name}`;
            descContent.appendChild(descTitle);
            let descClassProfs = document.createElement('div');
            descClassProfs.innerHTML = `<strong>Automatic<br>Proficiencies:</strong>`;
            charClass.proficiencies.forEach(prof => {
                profTag = document.createElement('div');
                profTag.innerHTML = prof.name;
                descClassProfs.appendChild(profTag);
            });
            descContent.appendChild(descClassProfs);
            let descClassProfChoices = document.createElement('div');
            descClassProfChoices.innerHTML = `<strong>Optional<br>Proficiencies<br>(choose ${charClass.proficiency_choices[0].choose}):</strong>`;
            let profPool = charClass.proficiency_choices[0].from;
            profPool.forEach(prof => {
                profTag = document.createElement('div');
                profTag.innerHTML = prof.name;
                descClassProfChoices.appendChild(profTag);
            });
            descContent.appendChild(descClassProfChoices);
            let descHitDie = document.createElement('div');
            descHitDie.innerHTML = `<strong>Hit Die:</strong> ${charClass.hit_die}`;
            descContent.appendChild(descHitDie);


        })
        .then( () => {
            refreshSpecs();
        })
}

const selectWizard = () => {
    clearSelected();
    wizardPanel.classList.add('selected');
    selectedColor = "blue"
    grabApiClass(12);
    refreshSpecs();
}

const selectRogue = () => {
    clearSelected();
    roguePanel.classList.add('selected');
    selectedColor = "purple"
    grabApiClass(9);
    refreshSpecs();
}

const selectCleric = () => {
    clearSelected();
    clericPanel.classList.add('selected');
    selectedColor = "orange"
    grabApiClass(3);
    refreshSpecs();
}

const selectFighter = () => {
    clearSelected();
    fighterPanel.classList.add('selected');
    selectedColor = "red"
    grabApiClass(5);
    refreshSpecs();
}

window.onclick = (event) => {
    if (event.target == descModal){
    $(descModal).fadeOut(350);
    }
}

wizardPanel.addEventListener("click", selectWizard);
roguePanel.addEventListener("click", selectRogue);
clericPanel.addEventListener("click", selectCleric);
fighterPanel.addEventListener("click", selectFighter);
