let btnStart = document.getElementById('btnStart');
let welcomePageContainer = document.getElementById('welcomePageContainer');
let nameInput = document.getElementById('nameInput');




const goToIndex = () => {
    $(welcomePageContainer).fadeOut(350);
    $(pageContainer).fadeIn(700);
    currentChar.charName = nameInput.value;
    console.log(tab);
    $(specsContainer).fadeIn(700);
    $(tab[currentTab]).fadeIn(700);
    $(btnNext).fadeIn(700);
    $(btnBack).fadeIn(700);
    refreshSpecs();
}

btnStart.addEventListener("click",goToIndex);