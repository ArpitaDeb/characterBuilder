let btnStart = document.getElementById('btnStart');
let welcomePageContainer = document.getElementById('welcomePageContainer');
let nameInput = document.getElementById('nameInput');




const goToIndex = () => {
    hide(welcomePageContainer);
    show(pageContainer);
    currentChar.charName = nameInput.value;
    console.log(tab);
    show(specsContainer);
    show(tab[currentTab]);
    show(btnNext);
    show(btnBack);
    refreshSpecs();
}

btnStart.addEventListener("click",goToIndex);