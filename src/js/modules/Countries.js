export class Countries {
  static renderCountries(arr) {
    const list = document.querySelector(".table__list");
    list.innerHTML = "";

    arr.forEach((elem) => {
      const template = this.createCard(elem, arr);
      list.appendChild(template);
    });
  }

  static createCard(elem, arr) {
    const card = document.createElement("li");
    const divPosition = document.createElement("div");
    const divCountry = document.createElement("div");
    const flag = document.createElement("img");
    const nameCountry = document.createElement("p");
    const divGold = document.createElement("div");
    const divSilver = document.createElement("div");
    const divBronze = document.createElement("div");
    const divTotal = document.createElement("div");

    divPosition.classList.add("table__list-options");
    divPosition.innerText = `${arr.indexOf(elem) + 1} º`;
    divCountry.classList.add("table__list-country");
    flag.src = elem.flag_url;
    flag.alt = elem.country;
    nameCountry.innerText = elem.country;
    divGold.classList.add("table__list-options");
    divGold.innerText = elem.medal_gold;
    divSilver.classList.add("table__list-options");
    divSilver.innerText = elem.medal_silver;
    divBronze.classList.add("table__list-options");
    divBronze.innerText = elem.medal_bronze;
    divTotal.classList.add("table__list-options");
    divTotal.innerText =
      elem.medal_gold + elem.medal_silver + elem.medal_bronze;

    if (window.outerWidth <= 1000) {
      const select = document.querySelector("select");
      if (select.value === "gold") {
        divGold.innerText = elem.medal_gold;
      } else if (select.value === "silver") {
        divGold.innerText = elem.medal_silver;
      } else if (select.value === "bronze") {
        divGold.innerText = elem.medal_bronze;
      } else if (select.value === "total") {
        divGold.innerText =
          elem.medal_gold + elem.medal_silver + elem.medal_bronze;
      }
    }

    divCountry.append(flag, nameCountry);
    card.append(
      divPosition,
      divCountry,
      divGold,
      divSilver,
      divBronze,
      divTotal
    );

    return card;
  }
}
