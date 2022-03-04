/* eslint-disable space-before-function-paren */
/* eslint-disable semi */
/* eslint-disable prefer-const */
'use strict';

// GET THE DATA from JSON file
export default class ApiFishEye {
  async getData() {
    let url = '/Api/FishEye/photographers.json';
    let response = await fetch(url);
    let data = await response.json();

    const dataPhotographers = [...data.photographers];
    const dataMedias = [...data.media];

    return {
      photographers: dataPhotographers,
      media: dataMedias
    };
  }
}
