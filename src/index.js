import './css/styles.css';
import { fetchCountries } from './js/fetchCountries';
import { countryCardTemplate, countryListTemplate } from './js/country-template';
import { refs } from './js/refs';
import { Notify } from 'notiflix';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;
refs.searchBox.addEventListener('input', debounce(onInputCountry, DEBOUNCE_DELAY));

function onInputCountry(event) {
    event.preventDefault();
    let countryName = refs.searchBox.value;
    if (countryName.trim() === '') {
        refs.countryInfo.innerHTML = '';
        refs.countryList.innerHTML = '';
        return;
    }

    fetchCountries(countryName.trim())
        .then(countries => {
            if (countries.length > 10) {
                Notify.info('Too many matches found. Please enter a more specific name.');
                refs.countryInfo.innerHTML = '';
                refs.countryList.innerHTML = '';
                return;
            }
            
            if (countries.length > 1 && countries.length <= 10) {
                const listMarkup = countries.map(country => countryListTemplate(country));
                refs.countryList.innerHTML = listMarkup.join('');
                refs.countryInfo.innerHTML = '';
                }
            
            if (countries.length === 1) {
                const infoMarkup = countries.map(country => countryCardTemplate(country));
                refs.countryInfo.innerHTML = infoMarkup.join('');
                refs.countryList.innerHTML = '';
                }
    })
        .catch(error => {
            Notify.failure('Oops, there is no country with that name')
            refs.countryInfo.innerHTML = '';
            refs.countryList.innerHTML = '';
            return error;
});
};
