let wizardPanel = document.getElementById('charClassWizard');
let roguePanel = document.getElementById('charClassRogue');
let clericPanel = document.getElementById('charClassCleric');
let fighterPanel = document.getElementById('charClassFighter');
let charClassName = document.createElement('h1');
let btnRandomClass = document.getElementById('btnRandomClass');
let classIndex;


const grabApiClass = (num) => {
    fetch(`http://www.dnd5eapi.co/api/classes/${num}/`)
        .then(res => {
            return res.json();
        })
        .then(charClass => {
            //Update currentChar object
            currentChar.charClass = charClass.name;
            currentChar.classProfs = [];
            currentChar.classProfNumChoices = charClass.proficiency_choices[0].choose
            charClass.proficiencies.forEach((i) => {
                currentChar.classProfs.push(i.name);
            });
            currentChar.charProfs = currentChar.raceProfs.concat(currentChar.classProfs);
            currentChar.classSaves = [];
            charClass.saving_throws.forEach((save) => {
                currentChar.classSaves.push(save.name);

            });

            //display modal
            $(descModal).fadeIn(350);
            descModal.classList.add(selectedColor);
            descTitle.classList.add(selectedColor);
            descContent.classList.add(selectedColor);
            descTitle.innerHTML = `${charClass.name}`;
            descContent.appendChild(descTitle);
            let descClassProfs = document.createElement('div');
            descClassProfs.innerHTML = `<span class='gold'>Automatic<br>Proficiencies:</span>`;
            charClass.proficiencies.forEach(prof => {
                profTag = document.createElement('div');
                profTag.innerHTML = prof.name;
                descClassProfs.appendChild(profTag);
            });
            descContent.appendChild(descClassProfs);
            let descClassProfChoices = document.createElement('div');
            descClassProfChoices.setAttribute('id','descClassProfChoices');
            descClassProfChoices.innerHTML = `<span class='gold'>Optional<br>Proficiencies<br>(choose ${charClass.proficiency_choices[0].choose}):</span>`;
            let profPool = charClass.proficiency_choices[0].from;
            let i = 0;
            profPool.forEach(prof => {
                profTag = document.createElement('div');
                profTag.innerHTML = prof.name;
                profTag.setAttribute('id',`optionalProf${i}`);
                i++;
                descClassProfChoices.appendChild(profTag);
            });
            descContent.appendChild(descClassProfChoices);
            let descHitDie = document.createElement('div');
            descHitDie.innerHTML = `<span class='gold'>Hit Die:</span><br>${charClass.hit_die}<br>(1-${charClass.hit_die})`;
            descContent.appendChild(descHitDie);
            let classDescDiv = document.createElement('div');
            classDescDiv.classList.add('oneLinerDesc');
            classDescDiv.innerHTML = classDesc[classIndex].description;
            descContent.appendChild(classDescDiv);
            let descClassSavesDiv = document.createElement('div');
            descClassSavesDiv.innerHTML = `<span class='gold'>Saving<br>Throws:</span>`;
            charClass.saving_throws.forEach(save => {
                saveTag = document.createElement('div');
                switch (save.name) {
                    case 'STR':
                        saveTag.innerHTML = 'Strength';
                        break;
                    case 'DEX':
                        saveTag.innerHTML = 'Dexterity';
                        break;
                    case 'CON':
                        saveTag.innerHTML = 'Constitution';
                        break;
                    case 'INT':
                        saveTag.innerHTML = 'Intelligence';
                        break;
                    case 'WIS':
                        saveTag.innerHTML = 'Wisdom';
                        break;
                    case 'CHA':
                        saveTag.innerHTML = 'Charisma';
                        break;
                    default:
                        saveTag.innerHTML = 'ERROR';
                }
                descClassSavesDiv.appendChild(saveTag);
                })
                descContent.appendChild(descClassSavesDiv);

        })
        .then( () => {
            refreshSpecs();
        })
}

const selectWizard = () => {
    clearSelected();
    wizardPanel.classList.add('selected');
    selectedColor = "blue"
    classIndex = 3;
    grabApiClass(12);
}

const selectRogue = () => {
    clearSelected();
    roguePanel.classList.add('selected');
    selectedColor = "purple"
    classIndex = 1;
    grabApiClass(9);
}

const selectCleric = () => {
    clearSelected();
    clericPanel.classList.add('selected');
    selectedColor = "orange"
    classIndex = 2;
    grabApiClass(3);
}

const selectFighter = () => {
    clearSelected();
    fighterPanel.classList.add('selected');
    selectedColor = "red"
    classIndex = 0;
    grabApiClass(5);
}

const randomClass = () => {
    let rnd = Math.floor((Math.random()*4)+1);
    switch (rnd) {
        case 1:
            selectWizard();
            break;
        case 2:
            selectRogue();
            break;
        case 3:
            selectFighter();
            break;
        case 4:
            selectCleric();
            break;
    }
}


window.onclick = (event) => {
    if (event.target == descModal){
    $(descModal).fadeOut(350);
    }
    refreshSpecs();
}

$(function() {
    $(document.body).on("click", '[id^=optionalProf]', function(event){
        let thisSkillName;
        let thisSkillIndex;
        let thisProfName = this.innerHTML;

        if (this.classList.contains('classProfSelected')) {
            let thisProfIndex = currentChar.charProfs.findIndex(element => {return element.name == thisProfName});
            currentChar.charProfs.splice(thisProfIndex,1);
            this.classList.remove('classProfSelected');
            if (this.innerHTML.includes('Skill:')) {
                thisSkillName = thisProfName.slice(7);
                thisSkillIndex = currentChar.charSkills.findIndex(element => {return element.name == thisSkillName});
                currentChar.charSkills[thisSkillIndex].proficient = false;
            }
        }

        else if(document.querySelectorAll('.classProfSelected').length >= currentChar.classProfNumChoices) {
            alert(`Sorry, you can only select ${currentChar.classProfNumChoices} proficiencies with this class. You can de-select a proficiency by clicking it again.`)
        }
        else {
            this.classList.add('classProfSelected');
            currentChar.charProfs.push(this.innerHTML);
            if (this.innerHTML.includes('Skill:')) {
                thisSkillName = thisProfName.slice(7);
                thisSkillIndex = currentChar.charSkills.findIndex(element => {return element.name == thisSkillName});
                currentChar.charSkills[thisSkillIndex].proficient = true;
            }

        }
    });
});

wizardPanel.addEventListener("click", selectWizard);
roguePanel.addEventListener("click", selectRogue);
clericPanel.addEventListener("click", selectCleric);
fighterPanel.addEventListener("click", selectFighter);
btnRandomClass.addEventListener("click", randomClass);
