let btnSubmitRace = document.getElementById('btnSubmitRace');

btnSubmitRace.onclick = () => {
    //Submit Race data to database?
    changeTab('chooseRaceTab','chooseClassTab');

}

btnUndoRace.onclick = () => {
    //Wipe all Race data from current character object
    changeTab('chooseRaceTab','???')
}