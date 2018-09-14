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

            //display modal
            $(descModal).fadeIn(350);
            descModal.classList.add(selectedColor);
            descTitle.classList.add(selectedColor);
            descContent.classList.add(selectedColor);
            let descAbilities = document.createElement('div');
            let descTraits = document.createElement('div');
            let descSpeed = document.createElement('div');
            descTitle.innerHTML = `${charClass.name}`;
            descContent.appendChild(descTitle);
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
