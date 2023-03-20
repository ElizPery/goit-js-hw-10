export function countryFullInfo(name) {
    return name
    .map(({ name, flags, capital, population, languages }) => {
        return `<div class='country-list-item'>
      <img 
      src="${flags.svg}" 
      alt="${name.official}" width = "25" height = "15" />
      <h1 class='country-info-name'>${name.official}</h1>
      </div>
          <p>Capital: ${capital}</p>
          <p>Population: ${population}</p>
          <p>Languages: ${Object.values(languages).join(', ')}</p>`;
    })
    .join('');
}

export function countrySearchList(name) {
    return name
    .map(({ name, flags }) => {
      return `<li class='country-list-item'>
    <img src="${flags.svg}" 
    alt="${name.official}" 
    width = "25" 
    height = "15" />
    <p class='country-list-name'>${name.official}</p>
    </li>`;
    })
    .join('');
}
