import './css/styles.css';
import { fetchCountries } from "./js/fetchCountries.js";
import { countryFullInfo, countrySearchList } from "./js/createMarkup.js";
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';


const DEBOUNCE_DELAY = 300;

const refs = {
    input: document.querySelector('#search-box'),
    countryList: document.querySelector('.country-list'),
    wrapperInfo: document.querySelector('.country-info'),
};

refs.input.addEventListener('input', debounce(onInputChange, DEBOUNCE_DELAY));

function onInputChange(e) {
    let nameOfSearch = e.target.value.trim();
    if (nameOfSearch === '') {
        refs.wrapperInfo.innerHTML = '';
        refs.countryList.innerHTML = '';
    return;
    };
    fetchCountries(nameOfSearch)
        .then(showResultPage)
        .catch(() => Notiflix.Notify.failure('Oops, there is no country with that name'));
}

function showResultPage(data) {
    if (data.length > 10) {
       return Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
    } else if (data.length === 1) {
        refs.wrapperInfo.innerHTML = countryFullInfo(data);
        refs.countryList.innerHTML = '';
        return;
    } else {
        refs.countryList.innerHTML =  countrySearchList(data);
        refs.wrapperInfo.innerHTML = '';
    }
}
