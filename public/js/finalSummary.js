const clearFinal = () => {
    finalPageContainer.innerHTML = '';
    finalPageContainer.innerHTML = '<html><body><div id="finalHeader"><h1 id="finalName">Character Name:</h1><h2 id="finalClass">Class:</h2><h2 id="finalBackground">Backgound:</h2><h2 id="finalRace">Race:</h2><h2 id="finalAlign">Alignment:</h2></div><div id="finalSpecs"><div class="finalBox" id="finalAbs"><div class="finalAb" id="finalStr"><h3 class="gold" style="margin-bottom: 0;">Strength:</h3></div><div class="finalAb" id="finalDex"><h3 class="gold" style="margin-bottom: 0;">Dexterity:</h3></div><div class="finalAb" id="finalCon"><h3 class="gold" style="margin-bottom: 0;">Constitution:</h3></div><div class="finalAb" id="finalInt"><h3 class="gold" style="margin-bottom: 0;">Intelligence:</h3></div><div class="finalAb" id="finalWis"><h3 class="gold" style="margin-bottom: 0;">Wisdom:</h3></div><div class="finalAb" id="finalCha"><h3 class="gold" style="margin-bottom: 0;">Charisma:</h3></div></div><div class="finalBox" id="finalSaves"><h3 class="gold">Saving Throws:</h3></div><div class="finalBox" id="finalSkills"><h3 class="gold">Skills:</h3></div></div><div class="finalBox" id="finalProfs"><h3 class="gold">Proficiencies:</h3></div><div id="finalNums"><div class="finalBox" id="finalAC"><h3 class="gold">Armor Class:</h3></div><div class="finalBox" id="finalInit"><h3 class="gold">Initiative:</h3></div><div class="finalBox" id="finalSpeed"><h3 class="gold">Speed:</h3></div><div class="finalBox" id="finalHP"><h3 class="gold">Hit Points:</h3></div><div class="finalBox" id="finalHD"><h3 class="gold">Hit Dice:</h3></div><div class="finalBox" id="finalProfBonus"><h3 class="gold">Proficiency Bonus:</h3></div></div><div class="finalBox" id="finalRaceTraits"><h3 class="gold">Racial Traits and Languages:</h3></div><div id="finalDetails"><div class="finalBox" id="finalPersonTraits"><h3 class="gold">Personality Traits:</h3></div><div class="finalBox" id="finalIdeals"><h3 class="gold">Ideals:</h3></div><div class="finalBox" id="finalBonds"><h3 class="gold">Bonds:</h3></div><div class="finalBox" id="finalFlaws"><h3 class="gold">Flaws:</h3></div></div><div class="finalBox" id="finalAttacks"><h3 class="gold">Attacks:</h3></div><div class="finalBox" id="finalEquip"><h3 class="gold">Equipment:</h3></div><div id="finalFooter"><button id="btnFinalBack" type="button">Back</button></div></body></html>'
}
const goBackToIndex = () => {
    $(finalPageContainer).fadeOut(350);
    currentTab = tab.length - 1;
    setTimeout(() => {
        $(pageContainer).fadeIn(700);
        $(specsContainer).fadeIn(700);
        $(tab[currentTab]).fadeIn(700);
        $(btnNext).fadeIn(700);
        $(btnBack).fadeIn(700);
        refreshSpecs();
        clearFinal();
    }, 350);

}

const refreshFinal = () => {
document.getElementById('finalName').innerHTML = currentChar.charName;
document.getElementById('finalClass').innerHTML = `<span class='gold'>Class: </span>${currentChar.charClass}`;
document.getElementById('finalBackground').innerHTML = `<span class='gold'>Background: </span>${currentChar.charBackgroundName}`;
document.getElementById('finalRace').innerHTML = `<span class='gold'>Race: </span>${currentChar.charRace}`;
document.getElementById('finalAlign').innerHTML = `<span class='gold'>Alignment: </span>${currentChar.charAlignment}`;
let finalSkills = document.getElementById('finalSkills');
let btnFinalBack = document.getElementById('btnFinalBack');

let i = -1;
let absFinal = document.querySelectorAll('.finalAb');
    abilityLabels.forEach(ability => {
        i++
        abilityLabel = document.createElement('div');
        abilityLabel.classList.add('bottomSpace');
        if (currentChar.charTotalMods[i] > 0){
            abilityLabel.innerHTML = `${currentChar.charTotalAbs[i]} [+${currentChar.charTotalMods[i]}]`;
        }
        else abilityLabel.innerHTML = `${currentChar.charTotalAbs[i]} [${currentChar.charTotalMods[i]}]`;
        absFinal[i].appendChild(abilityLabel);
    });

i = -1;
    abilityLabels.forEach(ability => {
        i++
        abilityLabel = document.createElement('div');
        abilityLabel.classList.add('bottomSpace');
        if (currentChar.charSavesArr[i] > 0) {
        abilityLabel.innerHTML = `<span class='gold'>${ability}:</span> +${currentChar.charSavesArr[i]}`;
        }
        else abilityLabel.innerHTML = `<span class='gold'>${ability}:</span> ${currentChar.charSavesArr[i]}`;
        document.getElementById('finalSaves').appendChild(abilityLabel);
    });
    currentChar.charSkills.forEach(skill => {
        skillLabel = document.createElement('div');
        skillLabel.classList.add('bottomSpace');
        if (skill.value > 0) {
        skillLabel.innerHTML = `<span class='gold'>${skill.name}:</span> +${skill.value}`;
        }
        else skillLabel.innerHTML = `<span class='gold'>${skill.name}:</span> ${skill.value}`;
        document.getElementById('finalSkills').appendChild(skillLabel);
    });
let acLabel = document.createElement('div');
acLabel.classList.add('big');
acLabel.innerHTML = currentChar.charAC;
document.getElementById('finalAC').appendChild(acLabel);

let initLabel = document.createElement('div');
initLabel.classList.add('big');
initLabel.innerHTML = currentChar.charInit;
document.getElementById('finalInit').appendChild(initLabel);

let speedLabel = document.createElement('div');
speedLabel.classList.add('big');
speedLabel.innerHTML = currentChar.charSpeed;
document.getElementById('finalSpeed').appendChild(speedLabel);

let hpLabel = document.createElement('div');
hpLabel.classList.add('big');
hpLabel.innerHTML = currentChar.charHP;
document.getElementById('finalHP').appendChild(hpLabel);

let hdLabel = document.createElement('div');
hdLabel.classList.add('big');
hdLabel.innerHTML = currentChar.charHD;
document.getElementById('finalHD').appendChild(hdLabel);

let profBonusLabel = document.createElement('div');
profBonusLabel.classList.add('big');
profBonusLabel.innerHTML = currentChar.profBonus;
document.getElementById('finalProfBonus').appendChild(profBonusLabel);

currentChar.charProfs.forEach(prof => {
    profTag = document.createElement('div');
    profTag.classList.add('bottomSpace');
    profTag.innerHTML = prof;
    document.getElementById('finalProfs').appendChild(profTag);
});

currentChar.raceTraits.forEach(trait => {
    traitTag = document.createElement('div');
    traitTag.classList.add('bottomSpace');
    traitTag.innerHTML = trait.name;
    document.getElementById('finalRaceTraits').appendChild(traitTag);
});

currentChar.charLanguages.forEach(language => {
    langTag = document.createElement('div');
    langTag.classList.add('bottomSpace');
    langTag.innerHTML = `Language: ${language.name}`;
    document.getElementById('finalRaceTraits').appendChild(langTag);
});

    btnFinalBack.addEventListener("click",goBackToIndex);
};

    


