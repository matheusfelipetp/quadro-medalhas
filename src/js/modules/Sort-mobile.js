import { Countries } from "./Countries.js";

export class SortMobile {
  static sortMobileGold(arr) {
    const select = document.querySelector("select");

    select.addEventListener("change", () => {
      if (select.value === "gold") {
        const newArray = arr.sort((a, b) => b.medal_gold - a.medal_gold);

        Countries.renderCountries(newArray);
      }
    });
  }

  static sortMobileSilver(arr) {
    const select = document.querySelector("select");

    select.addEventListener("change", () => {
      if (select.value === "silver") {
        const newArray = arr.sort((a, b) => b.medal_silver - a.medal_silver);

        Countries.renderCountries(newArray);
      }
    });
  }

  static sortMobileBronze(arr) {
    const select = document.querySelector("select");

    select.addEventListener("change", () => {
      if (select.value === "bronze") {
        const newArray = arr.sort((a, b) => b.medal_bronze - a.medal_bronze);

        Countries.renderCountries(newArray);
      }
    });
  }

  static sortMobileTotal(arr) {
    const select = document.querySelector("select");

    select.addEventListener("change", () => {
      if (select.value === "total") {
        const newArray = arr.sort(
          (a, b) =>
            b.medal_gold +
            b.medal_silver +
            b.medal_bronze -
            (a.medal_gold + a.medal_silver + a.medal_bronze)
        );

        Countries.renderCountries(newArray);
      }
    });
  }
}
