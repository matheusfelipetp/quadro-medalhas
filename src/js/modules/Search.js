import { Api } from "./Api.js";
import { Countries } from "./Countries.js";

const countriesList = await Api.getInfos();

export class Search {
  static searchCountry(country) {
    const search = country
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim();

    const arrayFilter = countriesList.filter((elem) => {
      const countryName = elem.country
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim();

      if (countryName.includes(search)) {
        return elem;
      }
    });
    return arrayFilter;
  }

  static filterCountry() {
    const input = document.getElementById("search-input");
    const btnSearch = document.querySelector(".search__btn");
    btnSearch.addEventListener("click", (event) => {
      event.preventDefault();

      const country = input.value;
      const result = this.searchCountry(country);

      Countries.renderCountries(result);
    });
  }
}
