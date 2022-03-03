'use strict'

// DATA
import ApiFishEye from './provider/ApiFishEye.js'

// HOMEPAGE
import HomePageBuilder from './home/HomePageBuilder.js'

// PHOTOGRAPHE PAGES

import Profil from './photographers/Profil.js'
import MediaBuilder from './photographers/MediaBuilder.js'
import DropDownMenu from './photographers/DropDown.js'

(function appDispatch () {
  new ApiFishEye().getData().then((data) => {
    if (window.location.pathname.includes('/photographer.html')) {
      new Profil().displayProfil(data)
      // DROPDOWNMENU
      new DropDownMenu().dropDown(data)

      // gallery & likes box
      new MediaBuilder().photographersMedias(data)
      return
    }
    // show details into homepage
    new HomePageBuilder().displayPhotographers(data)
  }).catch(() => {
    console.error('Failed to load data')
  })
})()
