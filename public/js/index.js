


window.onload = () => {
    let tab = document.querySelectorAll('.tab');
    let currentTab = 0;

    const showTab = (n) => {
        let tab = document.querySelectorAll('.tab');
        tab[n].style.display = "grid";
    }
    showTab(currentTab);

    btnNxt = document.querySelector('#btnNxt');
    btnBack = document.querySelector('#btnBack');

    btnNxt.onclick = () => {
        tab[currentTab].style.display = "none";
        currentTab++
        showTab(currentTab);
    }
    
    btnBack.onclick = () => {
        tab[currentTab].style.display = "none";
        currentTab--
        showTab(currentTab);
    }






    // const changeForm = (toHide, toReveal) => {
    //     let hiding = document.getElementById(toHide);
    //     let revealing = document.getElementById(toReveal);

    //     hiding.classList.remove('visible');
    //     hiding.classList.add('hidden');
    //     revealing.classList.remove('hidden');
    //     revealing.classList.add('visible');
    // }




    const charClassFighter = document.getElementById("charClassFighter");
    let charClass;
    charClassFighter.onclick = () => {
        charClass = "Fighter";
        console.log = `Class: ${charClass}`;
    }

}