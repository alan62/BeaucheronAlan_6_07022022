/* eslint-disable space-before-function-paren */
/* eslint-disable prefer-const */
/* eslint-disable semi */
'use strict';

export default class VideoFactory {
  // CREATE ELEMENT VIDEO WITH CONTROLS, SRC, ROLE
  createHTML(element) {
    let eltVideo = document.createElement('video');
    eltVideo.setAttribute('controls', 'controls')
    eltVideo.setAttribute('src', element.video);
    eltVideo.setAttribute('role', 'button');
    eltVideo.className = 'ph-media';

    return eltVideo;
  }
}
