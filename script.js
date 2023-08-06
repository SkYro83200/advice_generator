/* Get information from this API : https://api.adviceslip.com/advice */
/* Modifie mon h1 avec cette ID : advice_number en ajoutant après le # l'id de l'avis */

const url = "https://api.adviceslip.com/advice";
const advice = document.getElementById("advice_number");
const adviceT = document.getElementById("advice");

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const adviceId = data.slip.id;
    const adviceText = data.slip.advice;
    advice.innerHTML = `advice #${adviceId}`;
    adviceT.innerHTML = `"${adviceText}"`;

});

/* When "button" is click then random advice */
const button = document.getElementById("button");
button.addEventListener("click", () => {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
        const adviceId = data.slip.id;
        const adviceText = data.slip.advice;
        advice.innerHTML = `advice #${adviceId}`;
        adviceT.innerHTML = `"${adviceText}"`;
        });
    });
