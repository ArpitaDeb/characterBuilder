let btnStart = document.getElementById('btnStart');
let welcomePageContainer = document.getElementById('welcomePageContainer')
let nameInput = document.getElementById('nameInput');
const goToIndex = () => {
    welcomePageContainer.classList.remove('visibleGrid');
    welcomePageContainer.classList.add('hidden');
    console.log(`Class List: ${document.getElementById('welcomePageContainer').classList}`)
    document.getElementById('pageContainer').display = 'grid';
    currentChar.charName = nameInput.value;
    currentTab = 0;
    showTab(currentTab);
    refreshSpecs();
}

btnStart.addEventListener("click",goToIndex);