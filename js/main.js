'use strict';
/////////////////////////////////////////

// DATA
import ApiFishEye from './provider/ApiFishEye.js';

// HOMEPAGE
import HomePageBuilder from './home/HomePageBuilder.js';


(function appDispatch() {
    new ApiFishEye().getDataFishEye().then((data) => {
        if (window.location.pathname.includes("/photographers.html")) {
            // PHOTOGRAPHER PROFIL HEADER à venir
        }
        // affichage des données sur la page d'accueil
        new HomePageBuilder().displayPhotographers(data); 
    })
})();