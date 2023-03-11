export function fetchCountries(name) {
    const url = 'https://restcountries.com/v3.1/name/';
    const filter = '?fields=name,capital,population,flags,languages';
    return fetch(`${url}${name}${filter}`).then(responce => {
        if (!responce.ok) {
            throw new Error(response.status);
        }
        return response.json();
    })
}