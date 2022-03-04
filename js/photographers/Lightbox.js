/* eslint-disable brace-style */
/* eslint-disable eqeqeq */
'use strict'

export default class LightBox {
  constructor () {
    this.currentIndex = 0
  }

  // initialize the lightbox when clicking on a media, call the functions allowing to navigate in the lightbox
  init (currentMedia, currentMediaName) {
    const getMedias = Array.from(document.getElementsByClassName('ph-media'))
    getMedias.forEach((mediaWorks, index) => mediaWorks.addEventListener('click', () => {
      const lightBoxMedia = document.getElementById('works-lightbox-media')
      const lightBoxName = document.getElementById('works-lightbox-name')
      const src = currentMedia[index]
      const nameSrc = currentMediaName[index]
      this.currentIndex = index

      document.getElementById('works-lightbox').style.display = 'block'
      lightBoxMedia.innerHTML = `${src}`
      lightBoxName.innerHTML = `${nameSrc}`
    }))
    this.previous(document.querySelector('.left-arrow-lightbox'), currentMedia, currentMediaName)
    this.next(document.querySelector('.right-arrow-lightbox'), currentMedia, currentMediaName)
    this.close()
    this.keyboard(currentMedia, currentMediaName)
    return this
  }

  // return to previous media
  previous (elt, media, name) {
    elt.addEventListener('click', () => {
      this.currentIndex -= 1
      const lightBoxMedia = document.getElementById('works-lightbox-media')
      const lightBoxName = document.getElementById('works-lightbox-name')

      if (this.currentIndex < 0) {
        this.currentIndex = media.length - 1
        this.currentIndex = name.length - 1
      }

      const src = media[this.currentIndex]
      const nameSrc = name[this.currentIndex]

      lightBoxMedia.innerHTML = `${src}`
      lightBoxName.innerHTML = `${nameSrc}`
    })
  }

  // turn to the next media
  next (elt, media, name) {
    elt.addEventListener('click', () => {
      this.currentIndex += 1
      const lightBoxMedia = document.getElementById('works-lightbox-media')
      const lightBoxName = document.getElementById('works-lightbox-name')

      if (this.currentIndex > name.length - 1) {
        this.currentIndex = 0
      }

      const src = media[this.currentIndex]
      const nameSrc = name[this.currentIndex]

      lightBoxMedia.innerHTML = `${src}`
      lightBoxName.innerHTML = `${nameSrc}`
    })
  }

  close () {
    document.querySelector('.close-lightbox-icon').addEventListener('click', () => {
      const lightbox = document.getElementById('works-lightbox')

      lightbox.style.display = 'none'
    })
  }

  keyboard (currentMedia, currentMediaName) {
    document.addEventListener('keydown', (key) => {
      const lightBoxMedia = document.getElementById('works-lightbox-media')
      const lightBoxName = document.getElementById('works-lightbox-name')

      // ESCAPE TO CLOSE
      if (key.code == 'Escape') {
        const lightBox = document.getElementById('works-lightbox')
        lightBox.style.display = 'none'
      }

      // ARROW RIGHT TO STEP RIGHT
      else if (key.code == 'ArrowRight') {
        this.currentIndex += 1

        if (this.currentIndex > currentMediaName.length - 1) {
          this.currentIndex = 0
        }

        const src = currentMedia[this.currentIndex]
        const nameSrc = currentMediaName[this.currentIndex]

        lightBoxMedia.innerHTML = `${src}`
        lightBoxName.innerHTML = `${nameSrc}`
      }

      // ARROW LEFT TO STEP LEFT
      else if (key.code == 'ArrowLeft') {
        this.currentIndex -= 1

        if (this.currentIndex < 0) {
          this.currentIndex = currentMedia.length - 1
          this.currentIndex = currentMediaName.length - 1
        }

        const src = currentMedia[this.currentIndex]
        const nameSrc = currentMediaName[this.currentIndex]

        lightBoxMedia.innerHTML = `${src}`
        lightBoxName.innerHTML = `${nameSrc}`
      }
    })
  }
}
