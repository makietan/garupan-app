function calc() {
    let captain_select = document.getElementById('captain-skill');
    let captain = captain_select.options[captain_select.selectedIndex];
    let continuous_select = document.getElementById('continuous-skill');
    let continuous = continuous_select.options[continuous_select.selectedIndex];

    let sum = 1.0 + parseFloat(captain.dataset.rate) + parseFloat(continuous.dataset.rate);
    let is_max = 1.90 <= sum;
    let result = document.getElementById('result');
    result.textContent = 
            captain.textContent +
            " + " +
            continuous.textContent +
            " = " +
            sum.toFixed(2) +
            "倍" +
            (is_max ? " (MAX19発)" : "");
}

function showDescription(target) {
    target.nextElementSibling.textContent = target.options[target.selectedIndex].dataset.description;
}

function selectCharacter(event) {
    showDescription(event.target);
    calc();
}

window.onload = () => {
    document.getElementById('captain-skill').addEventListener('change', selectCharacter);
    document.getElementById('continuous-skill').addEventListener('change', selectCharacter);
    showDescription(document.getElementById('captain-skill'));
    showDescription(document.getElementById('continuous-skill'));
    calc();
};