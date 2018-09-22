let btnStart = document.getElementById('btnStart');
let welcomePageContainer = document.getElementById('welcomePageContainer');
let nameInput = document.getElementById('nameInput');





const goToIndex = () => {
    $(welcomePageContainer).fadeOut(350);
    setTimeout(() => {
        $(pageContainer).fadeIn(700);
        currentChar.charName = nameInput.value;
        $(specsContainer).fadeIn(700);
        $(tab[currentTab]).fadeIn(700);
        $(btnNext).fadeIn(700);
        $(btnBack).fadeIn(700);
        refreshSpecs();
    }, 350);
}

btnStart.addEventListener("click",goToIndex);