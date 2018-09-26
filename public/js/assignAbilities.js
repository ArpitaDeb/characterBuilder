let availablePoints = 27;

const showAbDesc = (index) => {
    console.log(`Showing Description: ${index}`);
    let abDescP = document.getElementById('abDescP');
    
    fetch(`http://www.dnd5eapi.co/api/ability-scores/${index}/`)
        .then(res => {
            return res.json();
        })
        .then(ability => {
            abDescP.innerHTML = '';
            abilityDesc = ability.desc;
            abilityDesc.forEach((fetchedP) => {
                toAppend = document.createElement('p');
                toAppend.innerHTML = fetchedP;
                abDescP.appendChild(toAppend);
            })
        })
};

const increaseAb = (abIndex) => {
    let currentBaseAb = currentChar.charBaseAbs[abIndex];
    switch (currentBaseAb) {
        default: return null;
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
            if (availablePoints > 0) {
                availablePoints--;
                currentChar.charBaseAbs[abIndex]++;
            }
            else { alert(`Sorry, not enough points!`) };
            break;
        case 13:
        case 14:
            if (availablePoints > 1) {
                availablePoints -= 2;
                currentChar.charBaseAbs[abIndex]++;
            }
            else { 
                alert(`Sorry, not enough points! Remember, ability increases after 13 (before racial bonuses) cost 2 points each!`)}
            break;
        }
    let boxToChange;
    switch (abIndex) {
        default: return null;
        case 0: boxToChange = 'currentStrBox'; break;
        case 1: boxToChange = 'currentDexBox'; break;
        case 2: boxToChange = 'currentConBox'; break;
        case 3: boxToChange = 'currentIntBox'; break;
        case 4: boxToChange = 'currentWisBox'; break;
        case 5: boxToChange = 'currentChaBox'; break;

    }
    document.getElementById(`${boxToChange}`).innerHTML = currentChar.charBaseAbs[abIndex];
    refreshSpecs()
    console.log(`Points Remaining: ${availablePoints}`);
}

const decreaseAb = (abIndex) => {
    currentBaseAb = currentChar.charBaseAbs[abIndex];
    switch (currentBaseAb) {
        default: return null;
        case 15:
        case 14:
            availablePoints += 2;
            currentChar.charBaseAbs[abIndex]--;
            break;
        case 13:
        case 12:
        case 11:
        case 10:
        case 9:
            availablePoints++;
            currentChar.charBaseAbs[abIndex]--;
            break;
    }
    let boxToChange;
    switch (abIndex) {
        default: return null;
        case 0: boxToChange = 'currentStrBox'; break;
        case 1: boxToChange = 'currentDexBox'; break;
        case 2: boxToChange = 'currentConBox'; break;
        case 3: boxToChange = 'currentIntBox'; break;
        case 4: boxToChange = 'currentWisBox'; break;
        case 5: boxToChange = 'currentChaBox'; break;

    }
    document.getElementById(`${boxToChange}`).innerHTML = currentChar.charBaseAbs[abIndex];
    refreshSpecs()
    console.log(`Points Remaining: ${availablePoints}`);
}

document.getElementById('assignSTR').addEventListener('click',() => {showAbDesc(1);});
document.getElementById('assignDEX').addEventListener('click',() => {showAbDesc(2);});
document.getElementById('assignCON').addEventListener('click',() => {showAbDesc(3);});
document.getElementById('assignINT').addEventListener('click',() => {showAbDesc(4);});
document.getElementById('assignWIS').addEventListener('click',() => {showAbDesc(5);});
document.getElementById('assignCHA').addEventListener('click',() => {showAbDesc(6);});

document.getElementById('strUp').addEventListener('click', () => {increaseAb(0);});
document.getElementById('dexUp').addEventListener('click', () => {increaseAb(1);});
document.getElementById('conUp').addEventListener('click', () => {increaseAb(2);});
document.getElementById('intUp').addEventListener('click', () => {increaseAb(3);});
document.getElementById('wisUp').addEventListener('click', () => {increaseAb(4);});
document.getElementById('chaUp').addEventListener('click', () => {increaseAb(5);});

document.getElementById('strDown').addEventListener('click', () => {decreaseAb(0);});
document.getElementById('dexDown').addEventListener('click', () => {decreaseAb(1);});
document.getElementById('conDown').addEventListener('click', () => {decreaseAb(2);});
document.getElementById('intDown').addEventListener('click', () => {decreaseAb(3);});
document.getElementById('wisDown').addEventListener('click', () => {decreaseAb(4);});
document.getElementById('chaDown').addEventListener('click', () => {decreaseAb(5);});