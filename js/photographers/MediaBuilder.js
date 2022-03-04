/* eslint-disable eqeqeq */
/* eslint-disable space-before-function-paren */
/* eslint-disable no-new */
'use strict'

import GalleryFactory from '../factories/GalleryFactory.js'
import LikeSubscriber from './Likes.js'

export default class MediaBuilder {
  // call the GalleryFactory to create the media section with 'Like' function and the box
  photographersMedias(data) {
    const media = data.media
    const gallery = new GalleryFactory().builder(media)
    this.boxLikesAndPrice(gallery.totalLike, data.photographers)
    new LikeSubscriber()
  }

  // creates a box containing the total number of likes and the photographer's price
  boxLikesAndPrice(totalLike, photographers) {
    const id = window.location.search.split('id=')[1]

    photographers.forEach(element => {
      if (id == element.id) {
        const box = document.getElementById('box')
        const boxTemplate = `
                <span id="total-likes">${totalLike}</span>
                <i class="fas fa-heart" aria-label='likes'></i>
                <span>${element.price} €/ jour</span>
                `
        box.innerHTML = boxTemplate
      }
    })
  }
}
