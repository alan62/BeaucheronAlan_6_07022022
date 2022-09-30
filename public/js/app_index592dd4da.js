/* eslint-disable no-sequences */
/* eslint-disable no-var */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-func-assign */
/* eslint-disable no-return-assign */
(() => {
  const t = {
    757: (t, r, e) => {
      t.exports = e(666)
    },
    666: t => {
      const r = (function (t) {
        'use strict'
        let r; const e = Object.prototype
        const n = e.hasOwnProperty
        const o = typeof Symbol === 'function' ? Symbol : {}
        const i = o.iterator || '@@iterator'
        const a = o.asyncIterator || '@@asyncIterator'
        const c = o.toStringTag || '@@toStringTag'

        function h (t, r, e) {
          return Object.defineProperty(t, r, {
            value: e,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }), t[r]
        }
        try {
          h({}, '')
        } catch (t) {
          h = function (t, r, e) {
            return t[r] = e
          }
        }

        function u (t, r, e, n) {
          const o = r && r.prototype instanceof y ? r : y
          const i = Object.create(o.prototype)
          const a = new $(n || [])
          return i._invoke = (function (t, r, e) {
            let n = p
            return function (o, i) {
              if (n === f) throw new Error('Generator is already running')
              if (n === d) {
                if (o === 'throw') throw i
                return O()
              }
              for (e.method = o, e.arg = i; ;) {
                const a = e.delegate
                if (a) {
                  const c = P(a, e)
                  if (c) {
                    if (c === g) continue
                    return c
                  }
                }
                if (e.method === 'next') e.sent = e._sent = e.arg
                else if (e.method === 'throw') {
                  if (n === p) throw n = d, e.arg
                  e.dispatchException(e.arg)
                } else e.method === 'return' && e.abrupt('return', e.arg)
                n = f
                const h = s(t, r, e)
                if (h.type === 'normal') {
                  if (n = e.done ? d : l, h.arg === g) continue
                  return {
                    value: h.arg,
                    done: e.done
                  }
                }
                h.type === 'throw' && (n = d, e.method = 'throw', e.arg = h.arg)
              }
            }
          }(t, e, a)), i
        }

        function s (t, r, e) {
          try {
            return {
              type: 'normal',
              arg: t.call(r, e)
            }
          } catch (t) {
            return {
              type: 'throw',
              arg: t
            }
          }
        }
        t.wrap = u
        var p = 'suspendedStart'
        var l = 'suspendedYield'
        var f = 'executing'
        var d = 'completed'
        var g = {}

        function y () {}

        function _ () {}

        function v () {}
        let m = {}
        h(m, i, function () {
          return this
        })
        const w = Object.getPrototypeOf
        const k = w && w(w(M([])))
        k && k !== e && n.call(k, i) && (m = k)
        const b = v.prototype = y.prototype = Object.create(m)

        function L (t) {
          ['next', 'throw', 'return'].forEach(function (r) {
            h(t, r, function (t) {
              return this._invoke(r, t)
            })
          })
        }

        function x (t, r) {
          function e (o, i, a, c) {
            const h = s(t[o], t, i)
            if (h.type !== 'throw') {
              const u = h.arg
              const p = u.value
              return p && typeof p === 'object' && n.call(p, '__await')
                ? r.resolve(p.__await).then(function (t) {
                  e('next', t, a, c)
                }, function (t) {
                  e('throw', t, a, c)
                })
                : r.resolve(p).then(function (t) {
                  u.value = t, a(u)
                }, function (t) {
                  return e('throw', t, a, c)
                })
            }
            c(h.arg)
          }
          let o
          this._invoke = function (t, n) {
            function i () {
              return new r(function (r, o) {
                e(t, n, r, o)
              })
            }
            return o = o ? o.then(i, i) : i()
          }
        }

        function P (t, e) {
          const n = t.iterator[e.method]
          if (n === r) {
            if (e.delegate = null, e.method === 'throw') {
              if (t.iterator.return && (e.method = 'return', e.arg = r, P(t, e), e.method === 'throw')) return g
              e.method = 'throw', e.arg = new TypeError("The iterator does not provide a 'throw' method")
            }
            return g
          }
          const o = s(n, t.iterator, e.arg)
          if (o.type === 'throw') return e.method = 'throw', e.arg = o.arg, e.delegate = null, g
          const i = o.arg
          return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, e.method !== 'return' && (e.method = 'next', e.arg = r), e.delegate = null, g) : i : (e.method = 'throw', e.arg = new TypeError('iterator result is not an object'), e.delegate = null, g)
        }

        function E (t) {
          const r = {
            tryLoc: t[0]
          }
          1 in t && (r.catchLoc = t[1]), 2 in t && (r.finallyLoc = t[2], r.afterLoc = t[3]), this.tryEntries.push(r)
        }

        function j (t) {
          const r = t.completion || {}
          r.type = 'normal', delete r.arg, t.completion = r
        }

        function $ (t) {
          this.tryEntries = [{
            tryLoc: 'root'
          }], t.forEach(E, this), this.reset(!0)
        }

        function M (t) {
          if (t) {
            const e = t[i]
            if (e) return e.call(t)
            if (typeof t.next === 'function') return t
            if (!isNaN(t.length)) {
              let o = -1
              const a = function e () {
                for (; ++o < t.length;) { if (n.call(t, o)) return e.value = t[o], e.done = !1, e }
                return e.value = r, e.done = !0, e
              }
              return a.next = a
            }
          }
          return {
            next: O
          }
        }

        function O () {
          return {
            value: r,
            done: !0
          }
        }
        return _.prototype = v, h(b, 'constructor', v), h(v, 'constructor', _), _.displayName = h(v, c, 'GeneratorFunction'), t.isGeneratorFunction = function (t) {
          const r = typeof t === 'function' && t.constructor
          return !!r && (r === _ || (r.displayName || r.name) === 'GeneratorFunction')
        }, t.mark = function (t) {
          return Object.setPrototypeOf ? Object.setPrototypeOf(t, v) : (t.__proto__ = v, h(t, c, 'GeneratorFunction')), t.prototype = Object.create(b), t
        }, t.awrap = function (t) {
          return {
            __await: t
          }
        }, L(x.prototype), h(x.prototype, a, function () {
          return this
        }), t.AsyncIterator = x, t.async = function (r, e, n, o, i) {
          void 0 === i && (i = Promise)
          const a = new x(u(r, e, n, o), i)
          return t.isGeneratorFunction(e)
            ? a
            : a.next().then(function (t) {
              return t.done ? t.value : a.next()
            })
        }, L(b), h(b, c, 'Generator'), h(b, i, function () {
          return this
        }), h(b, 'toString', function () {
          return '[object Generator]'
        }), t.keys = function (t) {
          const r = []
          for (const e in t) r.push(e)
          return r.reverse(),
          function e () {
            for (; r.length;) {
              const n = r.pop()
              if (n in t) return e.value = n, e.done = !1, e
            }
            return e.done = !0, e
          }
        }, t.values = M, $.prototype = {
          constructor: $,
          reset: function (t) {
            if (this.prev = 0, this.next = 0, this.sent = this._sent = r, this.done = !1, this.delegate = null, this.method = 'next', this.arg = r, this.tryEntries.forEach(j), !t) { for (const e in this) e.charAt(0) === 't' && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = r) }
          },
          stop: function () {
            this.done = !0
            const t = this.tryEntries[0].completion
            if (t.type === 'throw') throw t.arg
            return this.rval
          },
          dispatchException: function (t) {
            if (this.done) throw t
            const e = this

            function o (n, o) {
              return c.type = 'throw', c.arg = t, e.next = n, o && (e.method = 'next', e.arg = r), !!o
            }
            for (let i = this.tryEntries.length - 1; i >= 0; --i) {
              const a = this.tryEntries[i]
              var c = a.completion
              if (a.tryLoc === 'root') return o('end')
              if (a.tryLoc <= this.prev) {
                const h = n.call(a, 'catchLoc')
                const u = n.call(a, 'finallyLoc')
                if (h && u) {
                  if (this.prev < a.catchLoc) return o(a.catchLoc, !0)
                  if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                } else if (h) {
                  if (this.prev < a.catchLoc) return o(a.catchLoc, !0)
                } else {
                  if (!u) throw new Error('try statement without catch or finally')
                  if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                }
              }
            }
          },
          abrupt: function (t, r) {
            for (let e = this.tryEntries.length - 1; e >= 0; --e) {
              const o = this.tryEntries[e]
              if (o.tryLoc <= this.prev && n.call(o, 'finallyLoc') && this.prev < o.finallyLoc) {
                var i = o
                break
              }
            }
            i && (t === 'break' || t === 'continue') && i.tryLoc <= r && r <= i.finallyLoc && (i = null)
            const a = i ? i.completion : {}
            return a.type = t, a.arg = r, i ? (this.method = 'next', this.next = i.finallyLoc, g) : this.complete(a)
          },
          complete: function (t, r) {
            if (t.type === 'throw') throw t.arg
            return t.type === 'break' || t.type === 'continue' ? this.next = t.arg : t.type === 'return' ? (this.rval = this.arg = t.arg, this.method = 'return', this.next = 'end') : t.type === 'normal' && r && (this.next = r), g
          },
          finish: function (t) {
            for (let r = this.tryEntries.length - 1; r >= 0; --r) {
              const e = this.tryEntries[r]
              if (e.finallyLoc === t) return this.complete(e.completion, e.afterLoc), j(e), g
            }
          },
          catch: function (t) {
            for (let r = this.tryEntries.length - 1; r >= 0; --r) {
              const e = this.tryEntries[r]
              if (e.tryLoc === t) {
                const n = e.completion
                if (n.type === 'throw') {
                  var o = n.arg
                  j(e)
                }
                return o
              }
            }
            throw new Error('illegal catch attempt')
          },
          delegateYield: function (t, e, n) {
            return this.delegate = {
              iterator: M(t),
              resultName: e,
              nextLoc: n
            }, this.method === 'next' && (this.arg = r), g
          }
        }, t
      }(t.exports))
      try {
        regeneratorRuntime = r
      } catch (t) {
        typeof globalThis === 'object' ? globalThis.regeneratorRuntime = r : Function('r', 'regeneratorRuntime = r')(r)
      }
    }
  }
  const r = {}

  function e (n) {
    const o = r[n]
    if (void 0 !== o) return o.exports
    const i = r[n] = {
      exports: {}
    }
    return t[n](i, i.exports, e), i.exports
  }
  e.n = t => {
    const r = t && t.__esModule ? () => t.default : () => t
    return e.d(r, {
      a: r
    }), r
  }, e.d = (t, r) => {
    for (const n in r) {
      e.o(r, n) && !e.o(t, n) && Object.defineProperty(t, n, {
        enumerable: !0,
        get: r[n]
      })
    }
  }, e.o = (t, r) => Object.prototype.hasOwnProperty.call(t, r), (() => {
    'use strict'

    function t (t, r, e, n, o, i, a) {
      try {
        var c = t[i](a)
        var h = c.value
      } catch (t) {
        return void e(t)
      }
      c.done ? r(h) : Promise.resolve(h).then(n, o)
    }

    function r (r) {
      return function () {
        const e = this
        const n = arguments
        return new Promise(function (o, i) {
          const a = r.apply(e, n)

          function c (r) {
            t(a, o, i, c, h, 'next', r)
          }

          function h (r) {
            t(a, o, i, c, h, 'throw', r)
          }
          c(void 0)
        })
      }
    }
    const n = e(757)
    const o = e.n(n)

    function i (t, r) {
      if (!(t instanceof r)) throw new TypeError('Cannot call a class as a function')
    }

    function a (t, r) {
      for (let e = 0; e < r.length; e++) {
        const n = r[e]
        n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
      }
    }

    function c (t, r, e) {
      return r && a(t.prototype, r), e && a(t, e), Object.defineProperty(t, 'prototype', {
        writable: !1
      }), t
    }
    const h = (function () {
      function t (r) {
        i(this, t), this._url = r
      }
      let e, n, a, h
      return c(t, [{
        key: 'getPhotographers',
        value: (h = r(o().mark(function t () {
          return o().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  return t.abrupt('return', fetch(this._url).then(function (t) {
                    return t.json()
                  }).then(function (t) {
                    return t.photographers
                  }).catch(function (t) {
                    throw new Error('La requete api getPhotographer a échoué : ', t)
                  }))
                case 1:
                case 'end':
                  return t.stop()
              }
            }
          }, t, this)
        })), function () {
          return h.apply(this, arguments)
        })
      }, {
        key: 'getPhotographerById',
        value: (a = r(o().mark(function t (r) {
          return o().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  return t.abrupt('return', fetch(this._url).then(function (t) {
                    return t.json()
                  }).then(function (t) {
                    return t.photographers.filter(function (t) {
                      return t.id === r
                    })[0]
                  }).catch(function (t) {
                    throw new Error('La requete api getPhotographer a échoué : ', t)
                  }))
                case 1:
                case 'end':
                  return t.stop()
              }
            }
          }, t, this)
        })), function (t) {
          return a.apply(this, arguments)
        })
      }, {
        key: 'getPortfolioByUserId',
        value: (n = r(o().mark(function t (r) {
          return o().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  return t.abrupt('return', fetch(this._url).then(function (t) {
                    return t.json()
                  }).then(function (t) {
                    return t.media.filter(function (t) {
                      return t.photographerId === r
                    })
                  }).catch(function (t) {
                    throw new Error('La requete api getPhotographer a échoué : ', t)
                  }))
                case 1:
                case 'end':
                  return t.stop()
              }
            }
          }, t, this)
        })), function (t) {
          return n.apply(this, arguments)
        })
      }, {
        key: 'getAllMedias',
        value: (e = r(o().mark(function t () {
          return o().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  return t.abrupt('return', fetch(this._url).then(function (t) {
                    return t.json()
                  }).then(function (t) {
                    return t.media
                  }).catch(function (t) {
                    throw new Error('La requete api getPhotographer a échoué : ', t)
                  }))
                case 1:
                case 'end':
                  return t.stop()
              }
            }
          }, t, this)
        })), function () {
          return e.apply(this, arguments)
        })
      }]), t
    }())
    const u = (function () {
      function t (r) {
        i(this, t), this._profilPath = 'assets/photographers/', this._id = r.id, this._name = r.name, this._city = r.city, this._country = r.country, this._tagline = r.tagline, this._price = r.price, this._portrait = r.portrait, this._portfolio = [], this._templatePhotographer = null, this._templatePortfolio = null, this._templateModal = null, this._templateFilter = null
      }
      return c(t, [{
        key: 'id',
        get: function () {
          return this._id
        }
      }, {
        key: 'name',
        get: function () {
          return this._name
        }
      }, {
        key: 'city',
        get: function () {
          return this._city
        }
      }, {
        key: 'country',
        get: function () {
          return this._country
        }
      }, {
        key: 'tagline',
        get: function () {
          return this._tagline
        }
      }, {
        key: 'price',
        get: function () {
          return this._price
        }
      }, {
        key: 'portrait',
        get: function () {
          return this._profilPath + this._portrait
        }
      }, {
        key: 'portfolio',
        get: function () {
          return this._portfolio
        },
        set: function (t) {
          this._portfolio = t
        }
      }, {
        key: 'likes',
        get: function () {
          return this._caluculateLikes()
        }
      }, {
        key: 'templatePhotographer',
        get: function () {
          return this._templatePhotographer
        },
        set: function (t) {
          this._templatePhotographer = t
        }
      }, {
        key: 'templatePortfolio',
        get: function () {
          return this._templatePortfolio
        },
        set: function (t) {
          this._templatePortfolio = t
        }
      }, {
        key: 'templateModal',
        get: function () {
          return this._templateModal
        },
        set: function (t) {
          this._templateModal = t
        }
      }, {
        key: 'templateFilter',
        get: function () {
          return this._templateFilter
        },
        set: function (t) {
          this._templateFilter = t
        }
      }, {
        key: 'addPortfolioMedia',
        value: function (t) {
          this._portfolio.push(t), this._likes += t.likes
        }
      }, {
        key: 'removePortfolioMedia',
        value: function (t) {
          this._portfolio = this._portfolio.filter(function (r) {
            return r !== t
          }), this._likes -= t.likes
        }
      }, {
        key: '_caluculateLikes',
        value: function () {
          let t = 0
          return this._portfolio.forEach(function (r) {
            t += r.likes
          }), t
        }
      }]), t
    }())
    const s = (function () {
      function t (r) {
        i(this, t), this._photographer = r, this.$wrapperCard = null, this.$wrapperHeader = null, this.$wrapperLink = null, this.$buttonModal = null
      }
      return c(t, [{
        key: 'btnModal',
        get: function () {
          return this.$buttonModal
        }
      }, {
        key: 'createPhotographerCard',
        value: function () {
          this.$wrapperCard = document.createElement('li')
          const t = '      \n      <article class="photographer">\n        <a href="photographer.html?id='.concat(this._photographer.id, '" aria-label="').concat(this._photographer.name, '">\n          <div class="photographer__cover">\n            <img width="100" src="').concat(this._photographer.portrait, '" alt="').concat(this._photographer.name, '" />\n          </div>        \n          <h2 class="photographer__title">').concat(this._photographer.name, '</h2>        \n        </a>\n          <div class="photographer__infos" tabindex="0">\n            <div class="photographer__infos__local text--primary">').concat(this._photographer.city, ', ').concat(this._photographer.country, '</div>\n            <div class="photographer__infos__tagline">').concat(this._photographer.tagline, '</div>\n            <div class="photographer__infos__price text--grey">').concat(this._photographer.price, '€/jour</div>\n          </div>\n      </article>      \n    ')
          return this.$wrapperCard.innerHTML = t, this.$wrapperCard
        }
      }, {
        key: 'createPhotographerHeader',
        value: function () {
          this.$wrapperHeader = document.createElement('div'), this.$wrapperHeader.classList.add('photographer-header'), this.$wrapperHeader.setAttribute('data-hidden-on-modal', '')
          const t = '\n      <div class="photographer__content">\n        <h1 class="photographer__content__title display-h2" tabindex="0">'.concat(this._photographer.name, '</h1>\n        <p class="photographer__content__description" tabindex="0">\n          <span class="photographer__content__description__local text--primary">').concat(this._photographer.city, '</span>\n          <span class="photographer__content__description__tag text--grey">').concat(this._photographer.tagline, '</span>\n        </p>\n      </div>\n      <div class="photographer__actions">\n        <button class="button" aria-label="Contacter ').concat(this._photographer.name, '" aria-haspopup="dialog" aria-controls="contact-modal">Contactez-moi</button>\n      </div>\n      <div class="photographer__cover" tabindex="0">\n        <img width="100" src="').concat(this._photographer.portrait, '" alt="').concat(this._photographer.name, '">\n      </div>\n    ')
          return this.$wrapperHeader.innerHTML = t, this.$buttonModal = this.$wrapperHeader.querySelector('[aria-controls="contact-modal"]'), this.$wrapperHeader
        }
      }, {
        key: 'createPhotographerContentLink',
        value: function () {
          this.$wrapperLink = document.createElement('aside'), this.$wrapperLink.setAttribute('tabindex', '0'), this.$wrapperLink.setAttribute('data-hidden-on-modal', ''), this.$wrapperLink.classList.add('photographer-content-link'), this.$wrapperLink.setAttribute('aria-label', ''.concat(this._photographer.likes, " j'aimes, tarifs: ").concat(this._photographer.price, '€ par jour'))
          const t = '\n      <div class="photographer-content-link__like" aria-hidden="true">'.concat(this._photographer.likes, '</div>\n      <div class="photographer-content-link__price" aria-hidden="true">').concat(this._photographer.price, '€ / jour</div>\n    ')
          return this.$wrapperLink.innerHTML = t, this.$wrapperLink
        }
      }, {
        key: 'refreshPhotographerContentLink',
        value: function () {
          if (!this.$wrapperLink) throw new Error('$wrapperLink not exist yet, createPhotographerContentLink before')
          this.$wrapperLink.querySelector('.photographer-content-link__like').innerHTML = ''.concat(this._photographer.likes), this.$wrapperLink.querySelector('.photographer-content-link__price').innerHTML = ''.concat(this._photographer.price, ' € / jour'), this.$wrapperLink.setAttribute('aria-label', ''.concat(this._photographer.likes, " j'aimes, tarifs: ").concat(this._photographer.price, '€ par jour'))
        }
      }]), t
    }())

    function p () {
      return (p = r(o().mark(function t () {
        let r, e, n, i
        return o().wrap(function (t) {
          for (;;) {
            switch (t.prev = t.next) {
              case 0:
                return r = document.querySelector('#photographer_section'), e = new h('data/photographers_new.json'), t.next = 4, e.getPhotographers()
              case 4:
                n = t.sent, i = [], n.forEach(function (t) {
                  const r = new u(t, 'type1')
                  i.push(r)
                }), i.forEach(function (t) {
                  const e = new s(t)
                  r.appendChild(e.createPhotographerCard())
                })
              case 8:
              case 'end':
                return t.stop()
            }
          }
        }, t)
      }))).apply(this, arguments)
    }!(function () {
      p.apply(this, arguments)
    }())
  })()
})()
// # sourceMappingURL=app_index592dd4da.js.map
