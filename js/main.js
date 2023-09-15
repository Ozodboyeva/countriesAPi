const countriesGetelement = document.querySelector(".countries ");
async function getCountry() {
  fetch("https://ap-countries-api.vercel.app/all?page=1&limit=10")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      data.data.map((element) => {
        showCountry(element);
      });
    })
    .catch(function (err) {
      console.warn("Something went wrong.", err);
    });
}
getCountry();
function showCountry(data) {
  let country = document.createElement("div");
  country.classList.add("country");
  country.innerHTML = ` <div class="country-img">
                <img src="${data.flags.png}" alt="flag" />
              </div>
              <div class="country-info">
                <h5>${data.name.common}</h5>
                <p><span>Population:</span>${data.population}</p>
                <p><span>Region:</span>${data.region}</p>
                <p><span>Capital:</span>${data.subregion}</p>
              </div>`;
  countriesGetelement.appendChild(country);
}
