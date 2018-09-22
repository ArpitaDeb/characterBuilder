calcChar();

document.getElementById('finalName').innerHTML = currentChar.charName;
document.getElementById('finalClass').innerHTML = `<span class='gold'>Class: </span>${currentChar.charClass}`;
document.getElementById('finalBackground').innerHTML = `<span class='gold'>Background: </span>${currentChar.charBackgroundName}`;
document.getElementById('finalRace').innerHTML = `<span class='gold'>Race: </span>${currentChar.charRace}`;
document.getElementById('finalAlign').innerHTML = `<span class='gold'>Alignment: </span>${currentChar.charAlignment}`;
let finalBlanket = document.getElementById('finalBlanket')

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

    console.log(`${currentChar.charTotalAbs[5]} [${currentChar.charTotalMods[5]}]`);
$(finalBlanket).fadeOut(700);