function printSkillDescription(num) {
    fetch(`http://www.dnd5eapi.co/api/skills/${num}/`)
        .then(res => {
            return res.json();
        })
        .then(skill => {
            let descBox = document.getElementById('descriptionBox');

            let skillName = document.createElement('h2');
            skillName.innerText = skill.name;
            descBox.appendChild(skillName);
            
            let skillDescAll = skill.desc;
            for (let i=0; i<skillDescAll.length; i++) {
                let skillDesc = document.createElement('p');
                skillDesc.innerText = skill.desc[i];
                descBox.appendChild(skillDesc);
            }

            })
}

window.onclick = () => {
    if (event.target == descModal){
    descModal.style.display = "none";
    }
}

// btnSubmitProfs.onclick = () => {
//     //Submit Profs data to database?
//     changeTab('chooseProfsTab','???')
// }

// btnUndoProfs.onclick = () => {
//     //Wipe all Profs data from current character object
//     changeTab('chooseProfsTab','chooseClassTab');
// }