
function printCharClassDescription(num) {
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


            // let profChoicesData = charClass.proficiency_choices[0];
            // let profChoicesP = document.createElement('p');
            // for (let i=0; i<profChoicesData.length; i++) {
            //     profChoicesP.innerText = `${profChoicesP.innerText}, ${profChoicesData[i].name}`
            })
            // descBox.appendChild(profChoicesP);
            // ToDo: Figure out how to grab each option and list (how is it passed from API?)
}

function clearSelected() {
    let selectedPanel = document.querySelector('.selected');
    let descBox = document.getElementById('descriptionBox');
    if(selectedPanel) {
        selectedPanel.classList.remove('selected');
    }
    if(descBox.innerHTML) {
        descBox.innerHTML = '';
    }
}
let fighterPanel = document.getElementById('charClassFighter');
let clericPanel = document.getElementById('charClassCleric');
let roguePanel = document.getElementById('charClassRogue');
let wizardPanel = document.getElementById('charClassWizard');

const selectFighter = () => {
    clearSelected();
    printCharClassDescription(5);
    fighterPanel.classList.add('selected');
}

const selectCleric = () => {
    clearSelected();
    printCharClassDescription(3);
    clericPanel.classList.add('selected');
}

const selectRogue = () => {
    clearSelected();
    printCharClassDescription(9);
    roguePanel.classList.add('selected');
}

const selectWizard = () => {
    clearSelected();
    printCharClassDescription(12);
    wizardPanel.classList.add('selected');
}

fighterPanel.addEventListener("click", selectFighter);
clericPanel.addEventListener("click", selectCleric);
roguePanel.addEventListener("click", selectRogue);
wizardPanel.addEventListener("click", selectWizard);

btnSubmitClass.onclick = () => {
    //Submit Class data to database?
    //Hide Race tab
    //Display Race tab
}

btnUndoClass.onclick = () => {
    //Wipe all Class data from current character object
    //Hide Class tab
    //Display Attributes? tab
}