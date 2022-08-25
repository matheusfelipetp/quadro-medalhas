import { Countries } from "./Countries.js";

export class Sort {
  static sortPosition(arr) {
    const btnPosition = document.getElementById("position");
    btnPosition.addEventListener("click", (event) => {
      event.preventDefault();
      const newArray = arr.sort((a, b) => a.id - b.id);
      const imgAll = document.querySelectorAll(".btn-table img");
      imgAll.forEach((elem) => {
        if (elem.className === "spin-arrow") {
          elem.classList.remove("spin-arrow");
        }
      });
      const btnImg = document.querySelector("#position img");
      btnImg.classList.add("spin-arrow");
      Countries.renderCountries(newArray);
    });
  }

  static sortGold(arr) {
    const btnGold = document.getElementById("gold");
    btnGold.addEventListener("click", (event) => {
      event.preventDefault();
      const newArray = arr.sort((a, b) => b.medal_gold - a.medal_gold);
      const imgAll = document.querySelectorAll(".btn-table img");
      imgAll.forEach((elem) => {
        if (elem.className === "spin-arrow") {
          elem.classList.remove("spin-arrow");
        }
      });
      const btnImg = document.querySelector("#gold img");
      btnImg.classList.add("spin-arrow");

      Countries.renderCountries(newArray);
    });
  }

  static sortSilver(arr) {
    const btnSilver = document.getElementById("silver");
    btnSilver.addEventListener("click", (event) => {
      event.preventDefault();
      const newArray = arr.sort((a, b) => b.medal_silver - a.medal_silver);
      const imgAll = document.querySelectorAll(".btn-table img");
      imgAll.forEach((elem) => {
        if (elem.className === "spin-arrow") {
          elem.classList.remove("spin-arrow");
        }
      });
      const btnImg = document.querySelector("#silver img");
      btnImg.classList.add("spin-arrow");

      Countries.renderCountries(newArray);
    });
  }

  static sortBronze(arr) {
    const btnBronze = document.getElementById("bronze");
    btnBronze.addEventListener("click", (event) => {
      event.preventDefault();
      const newArray = arr.sort((a, b) => b.medal_bronze - a.medal_bronze);
      const imgAll = document.querySelectorAll(".btn-table img");
      imgAll.forEach((elem) => {
        if (elem.className === "spin-arrow") {
          elem.classList.remove("spin-arrow");
        }
      });
      const btnImg = document.querySelector("#bronze img");
      btnImg.classList.add("spin-arrow");

      Countries.renderCountries(newArray);
    });
  }

  static sortTotal(arr) {
    const btnTotal = document.getElementById("total");
    btnTotal.addEventListener("click", (event) => {
      event.preventDefault();
      const newArray = arr.sort(
        (a, b) =>
          b.medal_gold +
          b.medal_silver +
          b.medal_bronze -
          (a.medal_gold + a.medal_silver + a.medal_bronze)
      );

      const imgAll = document.querySelectorAll(".btn-table img");
      imgAll.forEach((elem) => {
        if (elem.className === "spin-arrow") {
          elem.classList.remove("spin-arrow");
        }
      });
      const btnImg = document.querySelector("#total img");
      btnImg.classList.add("spin-arrow");

      Countries.renderCountries(newArray);
    });
  }
}
