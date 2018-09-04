const changeTab = (toHide,toShow) => {
    let tabToHide = document.getElementById(toHide);
    let tabToShow = document.getElementById(toShow);
    tabToHide.classList.remove('visibleGrid');
    tabToHide.classList.add('hidden');
    tabToShow.classList.remove('hidden');
    tabToShow.classList.add('visibleGrid');
}


window.onload = () => {
    chooseRaceTab = document.getElementById('chooseRaceTab');
    chooseRaceTab.classList.remove('hidden');
    chooseRaceTab.classList.add('visibleGrid');
}

