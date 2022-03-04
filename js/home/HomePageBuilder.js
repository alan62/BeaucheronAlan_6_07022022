/* eslint-disable space-before-function-paren */
/* eslint-disable array-callback-return */
/* eslint-disable prefer-const */
/* eslint-disable semi */
'use strict';

// CREATE ARTICLE INTO #PHOTOGRAPHERS THEN DISPLAY ALL PHOTOGRAPHERS BY DEFAULT
export default class HomePageBuilder {
  displayPhotographers(data) {
    let photographers = data.photographers;
    photographers.map(photographe => {
      let sectionPhotographers = document.getElementById('photographers');
      let articlePhotographers = document.createElement('article');
      let templatePhotographer = `
            <a href="photographer.html?id=${photographe.id}" title="${photographe.name}"> 
                <img src="${photographe.portrait}" alt="${photographe.alt}">
                <h2 class="name">${photographe.name}</h2>
            </a> 
            <p class="location">${photographe.city}, ${photographe.country}</p>
            <p class="tagline">${photographe.tagline}</p>
            <p class="price">${photographe.price}€/jour</p>
            `

      sectionPhotographers.appendChild(articlePhotographers);
      articlePhotographers.innerHTML = templatePhotographer;
    })
  }
}
