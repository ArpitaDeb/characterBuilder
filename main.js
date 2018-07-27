window.onload = () => {

    const btnCharClassSubmit = document.getElementById('charClassSubmit');
    const btnCharRaceBack = document.getElementById('charRaceBack');

    const changeForm = (toHide, toReveal) => {
        let hiding = document.getElementById(toHide);
        let revealing = document.getElementById(toReveal);

        hiding.classList.remove('visible');
        hiding.classList.add('hidden');
        revealing.classList.remove('hidden');
        revealing.classList.add('visible');
    }

    btnCharClassSubmit.onclick = () => {
        changeForm('charClassForm', 'charRaceForm');
    }

    btnCharRaceBack.onclick = () => {
        changeForm('charRaceForm', 'charClassForm');
    }
}