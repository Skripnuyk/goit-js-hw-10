export function countryCardTemplate({ name, capital, flags, population, languages }) {
    return `<div class="country-info__container">
    <div class="country-info__wrap">
    <img class="country-info__flags" src="${flags.svg}" alt="${name.official}"
    width="50" />
    <h2 class="country-info__name">${name.official}</h2>
    </div>
    <p class="country-info__capital"><span class="country-info__weight">Capital:</span>${capital}</p>
    <p class="country-info__population"><span class="country-info__weight">Population:</span>${population}</p>
    <p class="country-info__languages"><span class="country-info__weight">Languages:</span>${Object.values(languages)}</p>
    </div>`;
}

export function countryListTemplate({ name, flags }) {
    return `<li class="country-list__item">
    <img class="country-list__img" src="${flags.svg}" alt="${name.official}"
    width="25" />
    <h2 class="country-list__name">${name.official}</h2></li>`;
}