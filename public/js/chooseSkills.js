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

btnSubmitSkills.onclick = () => {
    //Submit Skills data to database?
    //Hide Skills tab
    //Display Next tab (???)
}

btnUndoSkills.onclick = () => {
    //Wipe all Skills data from current character object
    //Hide Skills tab
    //Display Previous tab (Race?)
}