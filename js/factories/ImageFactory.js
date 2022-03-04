/* eslint-disable space-before-function-paren */
/* eslint-disable prefer-const */
/* eslint-disable semi */
'use strict';

export default class ImageFactory {
  // CREATE ELEMENT IMG WITH SRC, ALT, ROLE
  createHTML(element) {
    let eltImage = document.createElement('img');
    eltImage.setAttribute('src', element.image);
    eltImage.setAttribute('alt', element.alt);
    eltImage.setAttribute('role', 'button');
    eltImage.className = 'ph-media';

    return eltImage;
  }
}
