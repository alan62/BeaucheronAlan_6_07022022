/**
 * Templates Photographe
 * @property {HTMLElement} btnModal
 */
export default class PhotographerTemplate {
  /**
   * @param {Photographer} photographer
   */
  constructor (photographer) {
    this._photographer = photographer
    this.$wrapperCard = null
    this.$wrapperHeader = null
    this.$wrapperLink = null

    this.$buttonModal = null
  }

  /**
   * GETTERS
   */
  get btnModal () {
    return this.$buttonModal
  }

  /**
   * Template pour la Card photographe
   * @returns {HTMLElement}
   */
  createPhotographerCard () {
    this.$wrapperCard = document.createElement('li')

    const card = `      
      <article class="photographer">
        <a href="photographer.html?id=${this._photographer.id}" aria-label="${this._photographer.name}">
          <div class="photographer__cover">
            <img width="100" src="${this._photographer.portrait}" alt="${this._photographer.name}" />
          </div>        
          <h2 class="photographer__title">${this._photographer.name}</h2>        
        </a>
          <div class="photographer__infos" tabindex="0">
            <div class="photographer__infos__local text--primary">${this._photographer.city}, ${this._photographer.country}</div>
            <div class="photographer__infos__tagline">${this._photographer.tagline}</div>
            <div class="photographer__infos__price text--grey">${this._photographer.price}€/jour</div>
          </div>
      </article>      
    `

    this.$wrapperCard.innerHTML = card
    return this.$wrapperCard
  }

  /**
   * Template pour le Header photographe
   * @returns {HTMLElement}
   */
  createPhotographerHeader () {
    this.$wrapperHeader = document.createElement('div')
    this.$wrapperHeader.classList.add('photographer-header')
    this.$wrapperHeader.setAttribute('data-hidden-on-modal', '')

    const content = `
      <div class="photographer__content">
        <h1 class="photographer__content__title display-h2" tabindex="0">${this._photographer.name}</h1>
        <p class="photographer__content__description" tabindex="0">
          <span class="photographer__content__description__local text--primary">${this._photographer.city}</span>
          <span class="photographer__content__description__tag text--grey">${this._photographer.tagline}</span>
        </p>
      </div>
      <div class="photographer__actions">
        <button class="button" aria-label="Contacter ${this._photographer.name}" aria-haspopup="dialog" aria-controls="contact-modal">Contactez-moi</button>
      </div>
      <div class="photographer__cover" tabindex="0">
        <img width="100" src="${this._photographer.portrait}" alt="${this._photographer.name}">
      </div>
    `

    this.$wrapperHeader.innerHTML = content
    this.$buttonModal = this.$wrapperHeader.querySelector('[aria-controls="contact-modal"]')
    return this.$wrapperHeader
  }

  /**
   * Template pour le compteur de likes photographe
   * @returns {HTMLElement}
   */
  createPhotographerContentLink () {
    this.$wrapperLink = document.createElement('aside')
    this.$wrapperLink.setAttribute('tabindex', '0')
    this.$wrapperLink.setAttribute('data-hidden-on-modal', '')
    this.$wrapperLink.classList.add('photographer-content-link')
    this.$wrapperLink.setAttribute('aria-label', `${this._photographer.likes} j'aimes, tarifs: ${this._photographer.price}€ par jour`)

    const content = `
      <div class="photographer-content-link__like" aria-hidden="true">${this._photographer.likes}</div>
      <div class="photographer-content-link__price" aria-hidden="true">${this._photographer.price}€ / jour</div>
    `
    this.$wrapperLink.innerHTML = content
    return this.$wrapperLink
  }

  /**
   * Rafraichie le compteur de like
   */
  refreshPhotographerContentLink () {
    if (this.$wrapperLink) {
      this.$wrapperLink.querySelector('.photographer-content-link__like').innerHTML = `${this._photographer.likes}`
      this.$wrapperLink.querySelector('.photographer-content-link__price').innerHTML = `${this._photographer.price} € / jour`
      this.$wrapperLink.setAttribute('aria-label', `${this._photographer.likes} j'aime, tarifs: ${this._photographer.price}€ par jour`)
    } else {
      throw new Error('$wrapperLink not exist yet, createPhotographerContentLink before')
    }
  }
}
