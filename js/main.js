const countriesGetelement = document.querySelector(".countries ");
async function getCountry() {
  const url = await fetch(
    "https://ap-countries-api.vercel.app/all?page=1&limit=10"
  );
  const res = await url.json();
  console.log(res);
  res.forEach((element) => {
    showCountry(element);
  });
}
getCountry();
function showCountry(data) {
  let country = document.createElement("div");
  country.classList.add("country");
  country.innerHTML = ` <div class="country-img">
                <img src="${data.flags} alt="flag" />
              </div>
              <div class="country-info">
                <h5>${data.name}</h5>
                <p><span>Population:</span>${data.population}</p>
                <p><span>Region:</span>${data.region}</p>
                <p><span>Capital:</span>${data.subregion}</p>
              </div>`;
  countriesGetelement.appendChild(country);
}
