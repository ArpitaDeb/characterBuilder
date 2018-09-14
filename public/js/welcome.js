let btnStart = document.getElementById('btnStart');
let welcomePageContainer = document.getElementById('welcomePageContainer');
let nameInput = document.getElementById('nameInput');




const goToIndex = () => {
    $(welcomePageContainer).hide();
    $(pageContainer).show();
    currentChar.charName = nameInput.value;
    console.log(tab);
    $(specsContainer).show();
    $(tab[currentTab]).show();
    $(btnNext).show();
    $(btnBack).show();
    refreshSpecs();
}

btnStart.addEventListener("click",goToIndex);