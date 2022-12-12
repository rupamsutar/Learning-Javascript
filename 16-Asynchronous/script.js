'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');


const request = fetch("https://restcountries.com/v3.1/alpha/IN");
// console.log(request);




const getCountryCode = function(countryCode) {
  fetch("https://restcountries.com/v3.1/alpha/" + countryCode).then(function(response) {
      console.log(response);
      return response.json();
  }).then(function(data) {
    console.log(data);
  });
}

getCountryCode("IN");

























///////////////////////////////////////
//  const request = new XMLHttpRequest();

//  request.open("GET", "https://restcountries.com/v3.1/alpha/IN");
//  request.send();

// //  console.log(request.responseText);

// request.addEventListener("load", function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const html = `
//     <article class="country">
//         <img class="country__img" src="${data.flags.svg}" />
//         <div class="country__data">
//           <h3 class="country__name">${data.name.common}</h3>
//           <h4 class="country__region">${data.region}</h4>
//           <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} B people</p>
//           <p class="country__row"><span>🗣️</span>${data.languages.eng}</p>
//           <p class="country__row"><span>💰</span>${data.currencies.INR.name}</p>
//         </div>
//     </article>`;
//     countriesContainer.insertAdjacentHTML("beforeend", html);
//     countriesContainer.style.opacity = 1;
// });
