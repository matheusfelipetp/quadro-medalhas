import { Api } from "./modules/Api.js";
import { Search } from "./modules/Search.js";
import { Countries } from "./modules/Countries.js";
import { Sort } from "./modules/Sort.js";
import { SortMobile } from "./modules/Sort-mobile.js";

const countriesList = await Api.getInfos();

Countries.renderCountries(countriesList);
Search.filterCountry();
Sort.sortPosition(countriesList);
Sort.sortGold(countriesList);
Sort.sortSilver(countriesList);
Sort.sortBronze(countriesList);
Sort.sortTotal(countriesList);
SortMobile.sortMobileGold(countriesList);
SortMobile.sortMobileSilver(countriesList);
SortMobile.sortMobileBronze(countriesList);
SortMobile.sortMobileTotal(countriesList);


