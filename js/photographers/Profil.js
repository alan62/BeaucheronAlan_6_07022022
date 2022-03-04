/* eslint-disable eqeqeq */
/* eslint-disable prefer-const */
/* eslint-disable space-before-function-paren */
/* eslint-disable indent */
/* eslint-disable semi */

'use strict';

import Modal from '../utils/contactForm.js';
import Form from './Form.js';

export default class Profil {
    // Check on which page the user is located, if the position corresponds with the photographer's "id", create the photographer's 'Profile' section
    displayProfil(data) {
        let photographersData = data.photographers;
        const id = window.location.search.split('id=')[1];
        const photographers = !id ? photographersData : photographersData.filter(photographer => photographer.id == id);
        const sectionProfil = document.getElementById('ph-profil-header');
        const templateProfil = `
            <article aria-label="Photographer Profil" class="ph-profil">
                <div class='ph-infos'>
                    <h2>${photographers[0].name}</h2>
                    <p class="ph-city">${photographers[0].city}, ${photographers[0].country}</p>
                    <p class="ph-tagline">${photographers[0].tagline}</p>
                    <p >${photographers[0].tags.map(tag => `<a class="ph-tags" href="index.html">#${tag}</a>`).join(' ')}</p>
                </div>
                <button id="ph-contact" title='Contact Me'">Contactez-moi</button>
                <a href='#' title='${photographers[0].alt}'><img src="${photographers[0].portrait}" alt="${photographers[0].alt}"></a>
            </article>
            `

        sectionProfil.innerHTML = templateProfil;
        new Modal().modal(photographersData);
        new Form().fields();
    }
}
