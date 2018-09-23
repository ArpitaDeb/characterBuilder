const refreshFinal = () => {
document.getElementById('finalName').innerHTML = currentChar.charName;
document.getElementById('finalClass').innerHTML = `<span class='gold'>Class: </span>${currentChar.charClass}`;
document.getElementById('finalBackground').innerHTML = `<span class='gold'>Background: </span>${currentChar.charBackgroundName}`;
document.getElementById('finalRace').innerHTML = `<span class='gold'>Race: </span>${currentChar.charRace}`;
document.getElementById('finalAlign').innerHTML = `<span class='gold'>Alignment: </span>${currentChar.charAlignment}`;
let btnFinalBack = document.getElementById('btnFinalBack');

let i = -1;
let absFinal = document.querySelectorAll('.finalAb');
    abilityLabels.forEach(ability => {
        i++
        abilityLabel = document.createElement('div');
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
        if (currentChar.charSavesArr[i] > 0) {
        abilityLabel.innerHTML = `<span class='gold'>${ability}:</span> +${currentChar.charSavesArr[i]}`;
        }
        else abilityLabel.innerHTML = `<span class='gold'>${ability}:</span> ${currentChar.charSavesArr[i]}`;
        document.getElementById('finalSaves').appendChild(abilityLabel);
    });

    const clearFinal = () => {
        finalPageContainer.innerHTML = '';
        finalPageContainer.innerHTML = '<div id="finalHeader"><h1 id="finalName">Character Name:</h1><h2 id="finalClass">Class:</h2><h2 id="finalBackground">Backgound:</h2><h2 id="finalRace">Race:</h2><h2 id="finalAlign">Alignment:</h2></div><div id="finalSpecs"><div class="finalBox" id="finalAbs"><div class="finalAb" id="finalStr"><h3 class="gold" style="margin-bottom: 0;">Strength:</h3></div><div class="finalAb" id="finalDex"><h3 class="gold" style="margin-bottom: 0;">Dexterity:</h3></div><div class="finalAb" id="finalCon"><h3 class="gold" style="margin-bottom: 0;">Constitution:</h3></div><div class="finalAb" id="finalInt"><h3 class="gold" style="margin-bottom: 0;">Intelligence:</h3></div><div class="finalAb" id="finalWis"><h3 class="gold" style="margin-bottom: 0;">Wisdom:</h3></div><div class="finalAb" id="finalCha"><h3 class="gold" style="margin-bottom: 0;">Charisma:</h3></div></div><div class="finalBox" id="finalSaves"><h3 class="gold">Saving Throws:</h3></div><div class="finalBox" id="finalSkills"><h3 class="gold">Skills:</h3></div></div><div id="finalNums"><div class="finalBox" id="finalAC"><h3 class="gold">Armor Class:</h3></div><div class="finalBox" id="finalInit"><h3 class="gold">Initiatve:</h3></div><div class="finalBox" id="finalSpeed"><h3 class="gold">Speed:</h3></div><div class="finalBox" id="finalHP"><h3 class="gold">Hit Points:</h3></div><div class="finalBox" id="finalHD"><h3 class="gold">Hit Dice:</h3></div></div><div id="finalDetails"><div class="finalBox" id="finalPersonTraits"><h3 class="gold">Personality Traits:</h3></div><div class="finalBox" id="finalIdeals"><h3 class="gold">Ideals:</h3></div><div class="finalBox" id="finalBonds"><h3 class="gold">Bonds:</h3></div><div class="finalBox" id="finalFlaws"><h3 class="gold">Flaws:</h3></div></div><div class="finalBox" id="finalAttacks"><h3 class="gold">Attacks:</h3></div><div class="finalBox" id="finalFeatures"><h3 class="gold">Features and Traits:</h3></div><div class="finalBox" id="finalOtherSpecs"><h3 class="gold">Other Proficiencies and Languages:</h3></div><div class="finalBox" id="finalEquip"><h3 class="gold">Equipment:</h3></div><div id="finalFooter"><button id="btnFinalBack" type="button">Back</button></div>'
    }
    const goBackToIndex = () => {
        $(finalPageContainer).fadeOut(350);
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
    

btnFinalBack.addEventListener("click",goBackToIndex);
};