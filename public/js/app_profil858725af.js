/* eslint-disable no-fallthrough */
/* eslint-disable no-proto */
/* eslint-disable promise/param-names */
/* eslint-disable no-undef */
/* eslint-disable no-void */
/* eslint-disable no-var */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-func-assign */
/* eslint-disable no-sequences */
/* eslint-disable no-return-assign */
(() => {
  const t = {
    757: (t, e, r) => {
      t.exports = r(666)
    },
    666: t => {
      const e = (function (t) {
        'use strict'
        let e; const r = Object.prototype
        const i = r.hasOwnProperty
        const n = typeof Symbol === 'function' ? Symbol : {}
        const o = n.iterator || '@@iterator'
        const a = n.asyncIterator || '@@asyncIterator'
        const s = n.toStringTag || '@@toStringTag'

        function l (t, e, r) {
          return Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }), t[e]
        }
        try {
          l({}, '')
        } catch (t) {
          l = function (t, e, r) {
            return t[e] = r
          }
        }

        function c (t, e, r, i) {
          const n = e && e.prototype instanceof m ? e : m
          const o = Object.create(n.prototype)
          const a = new P(i || [])
          return o._invoke = (function (t, e, r) {
            let i = u
            return function (n, o) {
              if (i === d) throw new Error('Generator is already running')
              if (i === f) {
                if (n === 'throw') throw o
                return I()
              }
              for (r.method = n, r.arg = o; ;) {
                const a = r.delegate
                if (a) {
                  const s = E(a, r)
                  if (s) {
                    if (s === _) continue
                    return s
                  }
                }
                if (r.method === 'next') r.sent = r._sent = r.arg
                else if (r.method === 'throw') {
                  if (i === u) throw i = f, r.arg
                  r.dispatchException(r.arg)
                } else r.method === 'return' && r.abrupt('return', r.arg)
                i = d
                const l = h(t, e, r)
                if (l.type === 'normal') {
                  if (i = r.done ? f : p, l.arg === _) continue
                  return {
                    value: l.arg,
                    done: r.done
                  }
                }
                l.type === 'throw' && (i = f, r.method = 'throw', r.arg = l.arg)
              }
            }
          }(t, r, a)), o
        }

        function h (t, e, r) {
          try {
            return {
              type: 'normal',
              arg: t.call(e, r)
            }
          } catch (t) {
            return {
              type: 'throw',
              arg: t
            }
          }
        }
        t.wrap = c
        var u = 'suspendedStart'
        var p = 'suspendedYield'
        var d = 'executing'
        var f = 'completed'
        var _ = {}

        function m () {}

        function y () {}

        function g () {}
        let v = {}
        l(v, o, function () {
          return this
        })
        const b = Object.getPrototypeOf
        const k = b && b(b(C([])))
        k && k !== r && i.call(k, o) && (v = k)
        const w = g.prototype = m.prototype = Object.create(v)

        function x (t) {
          ['next', 'throw', 'return'].forEach(function (e) {
            l(t, e, function (t) {
              return this._invoke(e, t)
            })
          })
        }

        function L (t, e) {
          function r (n, o, a, s) {
            const l = h(t[n], t, o)
            if (l.type !== 'throw') {
              const c = l.arg
              const u = c.value
              return u && typeof u === 'object' && i.call(u, '__await')
                ? e.resolve(u.__await).then(function (t) {
                  r('next', t, a, s)
                }, function (t) {
                  r('throw', t, a, s)
                })
                : e.resolve(u).then(function (t) {
                  c.value = t, a(c)
                }, function (t) {
                  return r('throw', t, a, s)
                })
            }
            s(l.arg)
          }
          let n
          this._invoke = function (t, i) {
            function o () {
              return new e(function (e, n) {
                r(t, i, e, n)
              })
            }
            return n = n ? n.then(o, o) : o()
          }
        }

        function E (t, r) {
          const i = t.iterator[r.method]
          if (i === e) {
            if (r.delegate = null, r.method === 'throw') {
              if (t.iterator.return && (r.method = 'return', r.arg = e, E(t, r), r.method === 'throw')) return _
              r.method = 'throw', r.arg = new TypeError("The iterator does not provide a 'throw' method")
            }
            return _
          }
          const n = h(i, t.iterator, r.arg)
          if (n.type === 'throw') return r.method = 'throw', r.arg = n.arg, r.delegate = null, _
          const o = n.arg
          return o ? o.done ? (r[t.resultName] = o.value, r.next = t.nextLoc, r.method !== 'return' && (r.method = 'next', r.arg = e), r.delegate = null, _) : o : (r.method = 'throw', r.arg = new TypeError('iterator result is not an object'), r.delegate = null, _)
        }

        function M (t) {
          const e = {
            tryLoc: t[0]
          }
          1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
        }

        function $ (t) {
          const e = t.completion || {}
          e.type = 'normal', delete e.arg, t.completion = e
        }

        function P (t) {
          this.tryEntries = [{
            tryLoc: 'root'
          }], t.forEach(M, this), this.reset(!0)
        }

        function C (t) {
          if (t) {
            const r = t[o]
            if (r) return r.call(t)
            if (typeof t.next === 'function') return t
            if (!isNaN(t.length)) {
              let n = -1
              const a = function r () {
                for (; ++n < t.length;) { if (i.call(t, n)) return r.value = t[n], r.done = !1, r }
                return r.value = e, r.done = !0, r
              }
              return a.next = a
            }
          }
          return {
            next: I
          }
        }

        function I () {
          return {
            value: e,
            done: !0
          }
        }
        return y.prototype = g, l(w, 'constructor', g), l(g, 'constructor', y), y.displayName = l(g, s, 'GeneratorFunction'), t.isGeneratorFunction = function (t) {
          const e = typeof t === 'function' && t.constructor
          return !!e && (e === y || (e.displayName || e.name) === 'GeneratorFunction')
        }, t.mark = function (t) {
          return Object.setPrototypeOf ? Object.setPrototypeOf(t, g) : (t.__proto__ = g, l(t, s, 'GeneratorFunction')), t.prototype = Object.create(w), t
        }, t.awrap = function (t) {
          return {
            __await: t
          }
        }, x(L.prototype), l(L.prototype, a, function () {
          return this
        }), t.AsyncIterator = L, t.async = function (e, r, i, n, o) {
          void 0 === o && (o = Promise)
          const a = new L(c(e, r, i, n), o)
          return t.isGeneratorFunction(r)
            ? a
            : a.next().then(function (t) {
              return t.done ? t.value : a.next()
            })
        }, x(w), l(w, s, 'Generator'), l(w, o, function () {
          return this
        }), l(w, 'toString', function () {
          return '[object Generator]'
        }), t.keys = function (t) {
          const e = []
          for (const r in t) e.push(r)
          return e.reverse(),
          function r () {
            for (; e.length;) {
              const i = e.pop()
              if (i in t) return r.value = i, r.done = !1, r
            }
            return r.done = !0, r
          }
        }, t.values = C, P.prototype = {
          constructor: P,
          reset: function (t) {
            if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = 'next', this.arg = e, this.tryEntries.forEach($), !t) { for (const r in this) r.charAt(0) === 't' && i.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = e) }
          },
          stop: function () {
            this.done = !0
            const t = this.tryEntries[0].completion
            if (t.type === 'throw') throw t.arg
            return this.rval
          },
          dispatchException: function (t) {
            if (this.done) throw t
            const r = this

            function n (i, n) {
              return s.type = 'throw', s.arg = t, r.next = i, n && (r.method = 'next', r.arg = e), !!n
            }
            for (let o = this.tryEntries.length - 1; o >= 0; --o) {
              const a = this.tryEntries[o]
              var s = a.completion
              if (a.tryLoc === 'root') return n('end')
              if (a.tryLoc <= this.prev) {
                const l = i.call(a, 'catchLoc')
                const c = i.call(a, 'finallyLoc')
                if (l && c) {
                  if (this.prev < a.catchLoc) return n(a.catchLoc, !0)
                  if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                } else if (l) {
                  if (this.prev < a.catchLoc) return n(a.catchLoc, !0)
                } else {
                  if (!c) throw new Error('try statement without catch or finally')
                  if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                }
              }
            }
          },
          abrupt: function (t, e) {
            for (let r = this.tryEntries.length - 1; r >= 0; --r) {
              const n = this.tryEntries[r]
              if (n.tryLoc <= this.prev && i.call(n, 'finallyLoc') && this.prev < n.finallyLoc) {
                var o = n
                break
              }
            }
            o && (t === 'break' || t === 'continue') && o.tryLoc <= e && e <= o.finallyLoc && (o = null)
            const a = o ? o.completion : {}
            return a.type = t, a.arg = e, o ? (this.method = 'next', this.next = o.finallyLoc, _) : this.complete(a)
          },
          complete: function (t, e) {
            if (t.type === 'throw') throw t.arg
            return t.type === 'break' || t.type === 'continue' ? this.next = t.arg : t.type === 'return' ? (this.rval = this.arg = t.arg, this.method = 'return', this.next = 'end') : t.type === 'normal' && e && (this.next = e), _
          },
          finish: function (t) {
            for (let e = this.tryEntries.length - 1; e >= 0; --e) {
              const r = this.tryEntries[e]
              if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), $(r), _
            }
          },
          catch: function (t) {
            for (let e = this.tryEntries.length - 1; e >= 0; --e) {
              const r = this.tryEntries[e]
              if (r.tryLoc === t) {
                const i = r.completion
                if (i.type === 'throw') {
                  var n = i.arg
                  $(r)
                }
                return n
              }
            }
            throw new Error('illegal catch attempt')
          },
          delegateYield: function (t, r, i) {
            return this.delegate = {
              iterator: C(t),
              resultName: r,
              nextLoc: i
            }, this.method === 'next' && (this.arg = e), _
          }
        }, t
      }(t.exports))
      try {
        regeneratorRuntime = e
      } catch (t) {
        typeof globalThis === 'object' ? globalThis.regeneratorRuntime = e : Function('r', 'regeneratorRuntime = r')(e)
      }
    }
  }
  const e = {}

  function r (i) {
    const n = e[i]
    if (void 0 !== n) return n.exports
    const o = e[i] = {
      exports: {}
    }
    return t[i](o, o.exports, r), o.exports
  }
  r.n = t => {
    const e = t && t.__esModule ? () => t.default : () => t
    return r.d(e, {
      a: e
    }), e
  }, r.d = (t, e) => {
    for (const i in e) {
      r.o(e, i) && !r.o(t, i) && Object.defineProperty(t, i, {
        enumerable: !0,
        get: e[i]
      })
    }
  }, r.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), (() => {
    'use strict'

    function t (t, e, r, i, n, o, a) {
      try {
        var s = t[o](a)
        var l = s.value
      } catch (t) {
        return void r(t)
      }
      s.done ? e(l) : Promise.resolve(l).then(i, n)
    }

    function e (e) {
      return function () {
        const r = this
        const i = arguments
        return new Promise(function (n, o) {
          const a = e.apply(r, i)

          function s (e) {
            t(a, n, o, s, l, 'next', e)
          }

          function l (e) {
            t(a, n, o, s, l, 'throw', e)
          }
          s(void 0)
        })
      }
    }
    const i = r(757)
    const n = r.n(i)

    function o (t, e) {
      if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function')
    }

    function a (t, e) {
      for (let r = 0; r < e.length; r++) {
        const i = e[r]
        i.enumerable = i.enumerable || !1, i.configurable = !0, 'value' in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
      }
    }

    function s (t, e, r) {
      return e && a(t.prototype, e), r && a(t, r), Object.defineProperty(t, 'prototype', {
        writable: !1
      }), t
    }
    const l = (function () {
      function t (e) {
        o(this, t), this._url = e
      }
      let r, i, a, l
      return s(t, [{
        key: 'getPhotographers',
        value: (l = e(n().mark(function t () {
          return n().wrap(function (t) {
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
          return l.apply(this, arguments)
        })
      }, {
        key: 'getPhotographerById',
        value: (a = e(n().mark(function t (e) {
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  return t.abrupt('return', fetch(this._url).then(function (t) {
                    return t.json()
                  }).then(function (t) {
                    return t.photographers.filter(function (t) {
                      return t.id === e
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
        value: (i = e(n().mark(function t (e) {
          return n().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  return t.abrupt('return', fetch(this._url).then(function (t) {
                    return t.json()
                  }).then(function (t) {
                    return t.media.filter(function (t) {
                      return t.photographerId === e
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
          return i.apply(this, arguments)
        })
      }, {
        key: 'getAllMedias',
        value: (r = e(n().mark(function t () {
          return n().wrap(function (t) {
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
          return r.apply(this, arguments)
        })
      }]), t
    }())
    const c = (function () {
      function t (e) {
        o(this, t), this._profilPath = 'assets/photographers/', this._id = e.id, this._name = e.name, this._city = e.city, this._country = e.country, this._tagline = e.tagline, this._price = e.price, this._portrait = e.portrait, this._portfolio = [], this._templatePhotographer = null, this._templatePortfolio = null, this._templateModal = null, this._templateFilter = null
      }
      return s(t, [{
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
          this._portfolio = this._portfolio.filter(function (e) {
            return e !== t
          }), this._likes -= t.likes
        }
      }, {
        key: '_caluculateLikes',
        value: function () {
          let t = 0
          return this._portfolio.forEach(function (e) {
            t += e.likes
          }), t
        }
      }]), t
    }())

    function h (t, e) {
      return h = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t
      }, h(t, e)
    }

    function u (t, e) {
      if (typeof e !== 'function' && e !== null) throw new TypeError('Super expression must either be null or a function')
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          writable: !0,
          configurable: !0
        }
      }), Object.defineProperty(t, 'prototype', {
        writable: !1
      }), e && h(t, e)
    }

    function p (t) {
      return p = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
        ? function (t) {
          return typeof t
        }
        : function (t) {
          return t && typeof Symbol === 'function' && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t
        }, p(t)
    }

    function d (t, e) {
      if (e && (p(e) === 'object' || typeof e === 'function')) return e
      if (void 0 !== e) throw new TypeError('Derived constructors may only return object or undefined')
      return (function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return t
      }(t))
    }

    function f (t) {
      return f = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t)
        }, f(t)
    }

    function _ (t) {
      const e = (function () {
        if (typeof Reflect === 'undefined' || !Reflect.construct) return !1
        if (Reflect.construct.sham) return !1
        if (typeof Proxy === 'function') return !0
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
        } catch (t) {
          return !1
        }
      }())
      return function () {
        let r; const i = f(t)
        if (e) {
          const n = f(this).constructor
          r = Reflect.construct(i, arguments, n)
        } else r = i.apply(this, arguments)
        return d(this, r)
      }
    }
    const m = (function () {
      function t (e, r) {
        o(this, t), this._id = e.id, this._photographer = r, this._date = new Date(e.date), this._likes = e.likes, this._price = e.price, this._title = e.title, this._userLike = !1, this._description = e.alt, this._template = null
      }
      return s(t, [{
        key: 'id',
        get: function () {
          return this._id
        }
      }, {
        key: 'date',
        get: function () {
          return this._date
        }
      }, {
        key: 'likes',
        get: function () {
          return this._likes
        },
        set: function (t) {
          this._likes = t, this._userLike = !this._userLike
        }
      }, {
        key: 'userLike',
        get: function () {
          return this._userLike
        }
      }, {
        key: 'price',
        get: function () {
          return this._price
        }
      }, {
        key: 'description',
        get: function () {
          return this._description
        }
      }, {
        key: 'title',
        get: function () {
          return this._title
        }
      }, {
        key: 'photographer',
        get: function () {
          return this._photographer
        }
      }, {
        key: 'template',
        get: function () {
          return this._template
        },
        set: function (t) {
          this._template = t
        }
      }]), t
    }())
    const y = (function (t) {
      u(r, t)
      const e = _(r)

      function r (t) {
        let i
        return o(this, r), (i = e.call(this, t))._type = 'picture', i._image = t.image, i._imageThumbPath = 'assets/portfolio/'.concat(t.photographerId, '/medium/').concat(i._image), i._imagePath = 'assets/portfolio/'.concat(t.photographerId, '/large/').concat(i._image), i
      }
      return s(r, [{
        key: 'thumbPath',
        get: function () {
          return this._imageThumbPath
        }
      }, {
        key: 'path',
        get: function () {
          return this._imagePath
        }
      }, {
        key: 'image',
        get: function () {
          return this._image
        }
      }, {
        key: 'type',
        get: function () {
          return this._type
        }
      }]), r
    }(m))
    const g = (function (t) {
      u(r, t)
      const e = _(r)

      function r (t) {
        let i
        return o(this, r), (i = e.call(this, t))._type = 'video', i._video = t.video, i._videoThumbPath = 'assets/portfolio/'.concat(t.photographerId, '/medium/').concat(i._video.split('.').slice(0, -1).join('.'), '.jpg'), i._videoPath = 'assets/portfolio/'.concat(t.photographerId, '/').concat(i._video), i
      }
      return s(r, [{
        key: 'thumbPath',
        get: function () {
          return this._videoThumbPath
        }
      }, {
        key: 'path',
        get: function () {
          return this._videoPath
        }
      }, {
        key: 'video',
        get: function () {
          return this._video
        }
      }, {
        key: 'type',
        get: function () {
          return this._type
        }
      }]), r
    }(m))
    const v = (function () {
      function t (e) {
        o(this, t), this._photographer = e, this.$wrapperCard = null, this.$wrapperHeader = null, this.$wrapperLink = null, this.$buttonModal = null
      }
      return s(t, [{
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
    const b = (function () {
      function t (e) {
        o(this, t), this._photographer = e, this.$wrapperModal = null
      }
      return s(t, [{
        key: 'modalHtmlElement',
        get: function () {
          return this.$wrapperModal
        }
      }, {
        key: 'closeButtonHtmlElement',
        get: function () {
          return this.$wrapperModal.querySelector('[data-dismiss="contact-modal"]')
        }
      }, {
        key: 'sendButtonHtmlElement',
        get: function () {
          return this.$wrapperModal.querySelector('button[type="submit"]')
        }
      }, {
        key: 'createContactModal',
        value: function () {
          this.$wrapperModal = document.createElement('div'), this.$wrapperModal.id = 'contact-modal', this.$wrapperModal.style.display = 'none', this.$wrapperModal.setAttribute('role', 'dialog'), this.$wrapperModal.setAttribute('aria-labelledby', 'contact-modal__title'), this.$wrapperModal.setAttribute('aria-hidden', 'true'), this.$wrapperModal.setAttribute('tabindex', '-1')
          const t = '\n      <div class="modal" role="document" data-stop-propagation>\n        <header>\n          <h2 id="contact-modal__title" tabindex="0">Contactez-moi<br />'.concat(this._photographer.name, '</h2>\n          <span class="material-icons button__close" role="button" aria-label="Fermer le formulaire de contact" data-dismiss="contact-modal" tabindex="0">close</span>\n        </header>\n        <form action="#" method="post">\n          <div>\n            <label id="label-form-firstname"  tabindex="0" for="form-firstname">Prénom</label>\n            <input type="text" name="firstname" id="form-firstname" aria-labelledby="label-form-firstname" required minlength="2"/>\n          </div>\n          <div>\n            <label id="label-form-lastname"  tabindex="0" for="form-lastname">Nom</label>\n            <input type="text" name="lastname" id="form-lastname" aria-labelledby="label-form-lastname" required minlength="2"/>\n          </div>\n          <div>\n            <label id="label-form-email"  tabindex="0" for="form-email">Email</label>\n            <input type="email" name="email" id="form-email" aria-labelledby="label-form-email" required/>\n          </div>\n          <div>\n            <label id="label-form-message"  tabindex="0" for="form-message">Votre message</label>\n            <textarea name="message" id="form-message" rows="5" placeholder=" " aria-labelledby="label-form-message" required minlength="10"></textarea>\n          </div>\n          <button class="button" type="submit" aria-label="Envoyer le message" >Envoyer</button>\n        </form>\n      </div>\n    ')
          return this.$wrapperModal.innerHTML = t, this.$wrapperModal
        }
      }]), t
    }())
    const k = (function () {
      function t (e) {
        o(this, t), this._photographer = e, this.$wrapperListCards = null
      }
      return s(t, [{
        key: 'mediasHtmlElement',
        get: function () {
          return this.$wrapperListCards
        }
      }, {
        key: 'createListMedia',
        value: function () {
          const t = this
          return this.$wrapperListCards = document.createElement('ul'), this.$wrapperListCards.classList.add('media-cards-list'), this._photographer.portfolio.forEach(function (e) {
            const r = new w(t._photographer, e)
            e.template = r, t.$wrapperListCards.appendChild(r.createCardMedia('li'))
          }), this.$wrapperListCards
        }
      }, {
        key: 'refreshListMedia',
        value: function () {
          const t = this
          const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function () {}
          const r = this.$wrapperListCards.parentNode
          r.classList.remove('loaded'), r.classList.add('loading')
          var i = setTimeout(function () {
            r.removeChild(t.$wrapperListCards), r.appendChild(t.createListMedia()), r.classList.remove('loading'), r.classList.add('loaded'), e(), clearTimeout(i)
          }, 300)
        }
      }]), t
    }())
    var w = (function () {
      function t (e, r) {
        o(this, t), this._photographer = e, this._media = r, this.$wrapperCard = null
      }
      return s(t, [{
        key: 'mediaHtmlElement',
        get: function () {
          return this.$wrapperCard
        }
      }, {
        key: 'createCardMedia',
        value: function (t) {
          this.$wrapperCard = document.createElement(t), this.$wrapperCard.classList.add('media-card'), this.$wrapperCard.classList.add('media-card--'.concat(this._media.type))
          const e = '         \n      <a href="'.concat(this._media.path, '" class="media-card__cover" aria-label="').concat(this._media.description, ', agrandir l\'image">          \n        <img width="100" src="').concat(this._media.thumbPath, '" alt="').concat(this._media.description, ', ').concat(this._media.type, '"/>        \n      </a> \n      <div class="media-card__content">\n        <h2 class="media-card__content__title" tabindex="0">').concat(this._media.title, '</h2>\n        <div class="media-card__content__like favorite">\n          <label id="like-').concat(this._media.id, '" for="like-').concat(this._media.id, '-input" class="favorite__counter">').concat(this._media.likes, '</label>\n          <input id="like-').concat(this._media.id, '-input" aria-label="').concat(this._media.likes, ' j\'aimes" class="favorite__input" type="checkbox" />\n        </div>\n      </div>\n    ')
          return this.$wrapperCard.innerHTML = e, this.$wrapperCard.querySelector('#like-'.concat(this._media.id, '-input')).checked = this._media.userLike, this._stateLikesListener(), this.$wrapperCard
        }
      }, {
        key: '_stateLikesListener',
        value: function () {
          const t = this
          this.$wrapperCard.querySelector('input[type="checkbox"]').addEventListener('click', function (e) {
            e.target.checked ? t._media.likes += 1 : t._media.likes -= 1, t.$wrapperCard.querySelector('label.favorite__counter').innerHTML = t._media.likes, t.$wrapperCard.querySelector('input.favorite__input').setAttribute('aria-label', ''.concat(t._media.likes, " j'aime")), t._photographer.templatePhotographer.refreshPhotographerContentLink()
          })
        }
      }]), t
    }())
    const x = (function () {
      function t () {
        o(this, t), this.$wrapper = null, this._observerNode = null
      }
      return s(t, [{
        key: 'filterHtmlElement',
        get: function () {
          return this.$wrapper
        }
      }, {
        key: 'observerNode',
        get: function () {
          return this._observerNode
        }
      }, {
        key: 'createFilter',
        value: function () {
          this.$wrapper = document.createElement('div'), this.$wrapper.classList.add('filter-selector')
          return this.$wrapper.innerHTML = '         \n      <h3 id="filter__title" tabindex="0">Trier par</h3>\n      <div class="selector" data-filter-value="popularity">\n        <button id="filter__toggle" aria-labelledby="filter__title filter__option1" class="selector__toggle" aria-expanded="false" aria-haspopup="listbox"><span class="material-icons">expand_more</span></button>\n        <ul id="filter__list-items" role="listbox" class="selector__list" tabindex="-1" aria-activedescendant="filter__option1" aria-labelledby="filter__title">\n          <li id="filter__option1" role="option" class="selector__item selector__item--1" tabindex="-1" data-filter-option="popularity" aria-labelledby="filter__title filter__option1" aria-selected="true">Popularité</li>\n          <li id="filter__option2" role="option" class="selector__item selector__item--2" tabindex="-1" data-filter-option="date" aria-labelledby="filter__title filter__option2">Date</li>\n          <li id="filter__option3" role="option" class="selector__item selector__item--3" tabindex="-1" data-filter-option="title" aria-labelledby="filter__title filter__option3">Titre</li>\n        </ul>\n      </div>\n    ', this._observerNode = this.$wrapper.querySelector('.selector'), this.$wrapper
        }
      }]), t
    }())
    const L = (function () {
      function t (e) {
        const r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'button, a, input, textarea, [role="button"], [tabindex="0"]'
        o(this, t), this._node = e.modalHtmlElement, this._closeNode = e.closeButtonHtmlElement, this._sendButton = e.sendButtonHtmlElement, this._ariaSelector = r, this._previousFocus = null, this._modalDisplay = null, this._ariaElements = [], this._hiddenOnModal = Array.from(document.querySelectorAll('[data-hidden-on-modal]')), this._stopPropagation = this._stopPropagation.bind(this), this._ariaModal = this._ariaModal.bind(this), this._closeModal = this.closeModal.bind(this), this._displayModal = this.displayModal.bind(this), this._sendEmail = this._sendEmail.bind(this)
      }
      return s(t, [{
        key: 'init',
        value: function (t) {
          const e = this
          this._node.style.display = 'none', this._closeNode && this._closeNode.addEventListener('click', this._closeModal), this._sendButton.addEventListener('click', function () {
            e._sendEmail()
          }), t.addEventListener('click', function () {
            return e.displayModal()
          })
        }
      }, {
        key: 'element',
        get: function () {
          return this._node
        }
      }, {
        key: 'previousFocus',
        get: function () {
          return this._previousFocus
        }
      }, {
        key: 'displayModal',
        value: function () {
          this._node.style.display = null, this._node.removeAttribute('aria-hidden'), this._node.setAttribute('aria-modal', !0), this._hiddenOnModal.forEach(function (t) {
            t.setAttribute('aria-hidden', !0)
          }), this._previousFocus = document.querySelector(':focus'), this._ariaElements = Array.from(this._node.querySelectorAll(this._ariaSelector)), this._node.addEventListener('click', this._closeModal), this._node.querySelector('[data-stop-propagation]').addEventListener('click', this._stopPropagation), window.addEventListener('keydown', this._ariaModal), this._modalDisplay = !0
        }
      }, {
        key: 'closeModal',
        value: function () {
          this._hiddenOnModal.forEach(function (t) {
            t.removeAttribute('aria-hidden')
          }), this._previousFocus !== null && this._previousFocus.focus(), this._node.style.display = 'none', this._node.setAttribute('aria-hidden', !0), this._node.removeAttribute('aria-modal'), this._node.removeEventListener('click', this._closeModal), this._node.querySelector('[data-stop-propagation]').removeEventListener('click', this._stopPropagation), window.removeEventListener('keydown', this._ariaModal), this._modalDisplay = !1
        }
      }, {
        key: '_stopPropagation',
        value: function (t) {
          t.stopPropagation()
        }
      }, {
        key: '_ariaModal',
        value: function (t) {
          t.key !== 'Escape' && t.key !== 'Esc' || (t.preventDefault(), this._closeModal()), this._node.querySelector(':focus') === this._closeNode && t.key === 'Enter' && (t.preventDefault(), this._closeModal()), t.key === 'Tab' && this._node !== null && (t.preventDefault(), this._focusInModal(t))
        }
      }, {
        key: '_focusInModal',
        value: function (t) {
          const e = this
          t.preventDefault()
          let r = this._ariaElements.findIndex(function (t) {
            return t === e._node.querySelector(':focus')
          })
          !0 === t.shiftKey ? r-- : r++, r >= this._ariaElements.length && (r = 0), r < 0 && (r = this._ariaElements.length - 1), this._ariaElements[r].focus()
        }
      }, {
        key: '_sendEmail',
        value: function () {
          const t = this._node.querySelector('form')
          if (t.checkValidity()) {
            const e = new FormData(t)
            console.log("ENVOI DE L'EMAIL:"), console.log('******************'), console.log('Prenom : ', e.get('firstname')), console.log('Nom : ', e.get('lastname')), console.log('Email : ', e.get('email')), console.log('message : '), console.log(e.get('message')), t.reset()
          }
        }
      }]), t
    }())
    const E = (function () {
      function t (e, r) {
        o(this, t), this._expandButton = e.filterHtmlElement.querySelector('[aria-expanded]'), this._selector = e.filterHtmlElement.querySelector('.selector'), this._photographer = r, this._selectorItemsList = this._selector.querySelector('#filter__list-items'), this._selectorItems = Array.from(this._selector.querySelectorAll('.selector__item')), this._selectedItem = this._selectorItems[0], this._value = this._selectorItems[0].dataset.filterOption, this._expandHeight = this._selectedItem.clientHeight * this._selectorItems.length - 2 + 'px', this._expand = !1, this._ariaEventListener = this._ariaEventListener.bind(this), this._expandListener = this._expandListener.bind(this), this._expandMenu = this._expandMenu.bind(this), this._unexpandMenu = this._unexpandMenu.bind(this)
      }
      return s(t, [{
        key: 'value',
        get: function () {
          return this._value
        }
      }, {
        key: 'init',
        value: function () {
          this.filterPortfolio(), this._expandListener()
        }
      }, {
        key: 'filterPortfolio',
        value: function () {
          switch (this._selector.dataset.filterValue = this._value, this._value) {
            case 'popularity':
              this._photographer.portfolio.sort(function (t, e) {
                return e.likes - t.likes
              })
              break
            case 'date':
              this._photographer.portfolio.sort(function (t, e) {
                return e.date - t.date
              })
              break
            case 'title':
              this._photographer.portfolio.sort(function (t, e) {
                return e.title > t.title ? -1 : t.title > e.title ? 1 : 0
              })
          }
        }
      }, {
        key: '_expandListener',
        value: function () {
          const t = this
          this._expandButton.addEventListener('click', function (e) {
            e.preventDefault(), e.stopPropagation(), t._selector.classList.toggle('active'), t._expand ? (t._unexpandMenu(), t._expandButton.focus()) : t._expandMenu()
          }), this._selector.addEventListener('click', function (e) {
            e.preventDefault(), e.stopPropagation(), t._expand || t._expandMenu()
          }), this._selectorItems.forEach(function (e) {
            e.addEventListener('click', function (e) {
              e.preventDefault(), e.stopPropagation(), t._expand && t._selectItem(e.target)
            })
          }), this._expandButton.addEventListener('keydown', function (e) {
            e.keyCode !== 32 || t._expand || t._expandMenu()
          })
        }
      }, {
        key: '_expandMenu',
        value: function () {
          this._expand = !0, this._expandButton.setAttribute('aria-expanded', !0), this._selector.style.height = this._expandHeight, this._selector.classList.add('active'), this._selectorItems[0].focus(), this._selector.addEventListener('keydown', this._ariaEventListener), document.addEventListener('click', this._unexpandMenu)
        }
      }, {
        key: '_unexpandMenu',
        value: function () {
          this._expand = !1, this._expandButton.setAttribute('aria-expanded', !1), this._selector.style.height = '', this._selector.classList.remove('active'), this._selector.removeEventListener('keydown', this._ariaEventListener), document.removeEventListener('click', this._unexpandMenu)
        }
      }, {
        key: '_selectItem',
        value: function (t) {
          const e = this
          this._selectedItem = t, this._value = t.dataset.filterOption, this.filterPortfolio(), this._selectorItems = this._selectorItems.filter(function (e) {
            return e !== t
          }), this._selectorItems.unshift(t)
          let r = 1
          this._selectorItems.forEach(function (t) {
            t.className = 'selector__item', t.classList.add('selector__item--'.concat(r)), t.removeAttribute('aria-selected'), t === e._selectedItem && (t.classList.add('selected'), t.setAttribute('aria-selected', !0)), r++
          }), this._unexpandMenu()
        }
      }, {
        key: '_ariaEventListener',
        value: function (t) {
          const e = this
          if (t.preventDefault(), t.key !== 'Escape' && t.key !== 'Esc' || (this._unexpandMenu(), this._expandButton.focus()), t.key === 'Enter') {
            if (this._selector.querySelector(':focus') !== this._selectedItem) {
              this._selectItem(this._selector.querySelector(':focus')), this._selectorItemsList.setAttribute('aria-activedescendant', this._selector.querySelector(':focus').id), this._expandButton.setAttribute('aria-labelledby', 'filter__title '.concat(this._selector.querySelector(':focus').id))
              var r = setTimeout(function () {
                e._expandButton.focus(), clearTimeout(r)
              }, 100)
            } else this._unexpandMenu(), this._expandButton.focus()
          }
          if (t.key === 'Tab' && (this._unexpandMenu(), this._expandButton.focus()), t.key === 'PageDown' && this._selectorItems[this._selectorItems.length - 1].focus(), t.key === 'PageUp' && this._selectorItems[0].focus(), t.key === 'ArrowUp' || t.key === 'ArrowDown') {
            let i = this._selectorItems.findIndex(function (t) {
              return t === e._selector.querySelector(':focus')
            })
            t.key === 'ArrowUp' ? i-- : i++, i >= this._selectorItems.length && (i = 0), i < 0 && (i = this._selectorItems.length - 1), this._selectorItems[i].focus()
          }
        }
      }]), t
    }())
    const M = (function () {
      function t (e) {
        o(this, t), this._media = e, this.$wrapperLightbox = null, this.$lightboxContent = null, this.$lightboxCloseButton = null, this.$lightboxNextButton = null, this.$lightboxPrevButton = null, this.$media = null, this.$title = null
      }
      return s(t, [{
        key: 'lightBoxHTMLElement',
        get: function () {
          return this.$wrapperLightbox
        }
      }, {
        key: 'contentHTMLElement',
        get: function () {
          return this.$lightboxContent
        }
      }, {
        key: 'closeButton',
        get: function () {
          return this.$lightboxCloseButton
        }
      }, {
        key: 'nextButton',
        get: function () {
          return this.$lightboxNextButton
        }
      }, {
        key: 'prevButton',
        get: function () {
          return this.$lightboxPrevButton
        }
      }, {
        key: 'media',
        get: function () {
          return this.$media
        }
      }, {
        key: 'title',
        get: function () {
          return this.$title
        }
      }, {
        key: 'createLightBox',
        value: function () {
          const t = document.createElement('aside')
          t.setAttribute('aria-label', 'dialog mode plein ecran'), t.setAttribute('tabindex', 0), t.classList.add('lightbox')
          return t.innerHTML = '\n        <button class="lightbox__close material-icons" aria-label="Fermer la boite de dialog">close</button>\n        <button class="lightbox__next material-icons" aria-label="Media suivant">arrow_forward_ios</button>\n        <button class="lightbox__prev material-icons" aria-label="Media précédent">arrow_back_ios</button>\n        <div class="lightbox__container">\n          <div class="lightbox__container__content"></div>             \n        </div>\n      ', this.$lightboxContent = t.querySelector('.lightbox__container__content'), this.$lightboxCloseButton = t.querySelector('.lightbox__close'), this.$lightboxNextButton = t.querySelector('.lightbox__next'), this.$lightboxPrevButton = t.querySelector('.lightbox__prev'), this.$wrapperLightbox = t, t
        }
      }, {
        key: 'loadFactory',
        value: function (t) {
          if (this._media = t, this._media.type === 'picture') this._loadImage()
          else {
            if (this._media.type !== 'video') throw new Error('Le média avec un type : '.concat(this._media.type, ' est incompatible'))
            this._loadVideo()
          }
        }
      }, {
        key: '_loadImage',
        value: function () {
          const t = this
          const e = new Image()
          e.src = this._media.path, e.alt = this._media.description, e.setAttribute('aria-labelledby', 'picture-title'), e.setAttribute('tabindex', '0')
          const r = document.createElement('div')
          r.classList.add('lightbox__loader'), this.$lightboxContent.innerHTML = '', this.$lightboxContent.appendChild(r), this.$media = e
          const i = document.createElement('h2')
          i.id = 'picture-title', i.innerHTML = this._media.title, i.setAttribute('tabindex', 0), this.$title = i, e.onload = function () {
            t.$lightboxContent.removeChild(r), t.$lightboxContent.appendChild(e), t.$lightboxContent.appendChild(i)
          }
        }
      }, {
        key: '_loadVideo',
        value: function () {
          const t = document.createElement('video')
          t.src = this._media.path, t.setAttribute('title', this._media.description), t.setAttribute('tabindex', '0'), t.autoplay = !0, this.$media = t
          const e = document.createElement('h2')
          e.id = 'picture-title', e.innerHTML = this._media.title, e.setAttribute('tabindex', 0), this.$title = e, this.$lightboxContent.innerHTML = '', this.$lightboxContent.appendChild(t), this.$lightboxContent.appendChild(e)
        }
      }]), t
    }())
    const $ = (function () {
      function t (e, r) {
        o(this, t), this._media = r, this._photographer = e, this._template = new M(this._media), this._controls = void 0, this._previousFocus = null, this._onKeyUp = this._onKeyUp.bind(this), this._close = this._close.bind(this), this._next = this._next.bind(this), this._prev = this._prev.bind(this)
      }
      return s(t, [{
        key: 'init',
        value: function () {
          this._previousFocus = document.querySelector(':focus-visible'), document.body.appendChild(this._template.createLightBox()), document.addEventListener('keydown', this._onKeyUp), this._template.prevButton.addEventListener('click', this._prev), this._template.nextButton.addEventListener('click', this._next), this._template.closeButton.addEventListener('click', this._close), this._template.loadFactory(this._media), this._initControls()
        }
      }, {
        key: '_next',
        value: function (t) {
          const e = this
          t.preventDefault()
          let r = this._photographer.portfolio.findIndex(function (t) {
            return t.id === e._media.id
          })
          r === this._photographer.portfolio.length - 1 && (r = -1), this._media = this._photographer.portfolio[r + 1], this._template.loadFactory(this._media), this._initControls()
        }
      }, {
        key: '_prev',
        value: function (t) {
          const e = this
          t.preventDefault()
          let r = this._photographer.portfolio.findIndex(function (t) {
            return t.id === e._media.id
          })
          r === 0 && (r = this._photographer.portfolio.length), this._media = this._photographer.portfolio[r - 1], this._template.loadFactory(this._media), this._initControls()
        }
      }, {
        key: '_close',
        value: function (t) {
          const e = this
          t.preventDefault(), this._template.lightBoxHTMLElement.classList.add('fadeout')
          var r = setTimeout(function () {
            e._template.lightBoxHTMLElement.parentNode.removeChild(e._template.lightBoxHTMLElement), clearTimeout(r)
          }, 500)
          document.removeEventListener('keydown', this._onKeyUp), this._previousFocus && this._previousFocus.focus()
        }
      }, {
        key: '_onKeyUp',
        value: function (t) {
          t.key !== 'Escape' && t.key !== 'Esc' || this._close(t), t.key === 'ArrowLeft' && this._prev(t), t.key === 'ArrowRight' && this._next(t), t.key === 'Tab' && this._focusInLightBox(t), t.key === 'ArrowUp' && this._template.closeButton.focus()
        }
      }, {
        key: '_focusInLightBox',
        value: function (t) {
          const e = this
          t.preventDefault()
          let r = this._controls.findIndex(function (t) {
            return t === e._template.lightBoxHTMLElement.querySelector(':focus')
          })
          !0 === t.shiftKey ? r-- : r++, r >= this._controls.length && (r = 0), r < 0 && (r = this._controls.length - 1), this._controls[r].focus()
        }
      }, {
        key: '_initControls',
        value: function () {
          const t = this
          this._controls = [this._template.media, this._template.title, this._template.nextButton, this._template.prevButton, this._template.closeButton]
          var e = setTimeout(function () {
            t._template.lightBoxHTMLElement.querySelector(':focus') ? t._template.media.focus() : t._template.lightBoxHTMLElement.focus(), clearTimeout(e)
          }, 100)
        }
      }]), t
    }())

    function P () {
      return (P = e(n().mark(function t () {
        let e, r, i, o, a, s, h, u, p, d, f, _, m
        return n().wrap(function (t) {
          for (;;) {
            switch (t.prev = t.next) {
              case 0:
                return e = document.querySelector('#profil'), r = document.querySelector('#portfolio'), i = document.querySelector('#filter'), o = [], a = new l('data/photographers_new.json'), s = window.location.search, h = new URLSearchParams(s), u = parseInt(h.get('id')), t.next = 10, a.getPhotographerById(u)
              case 10:
                return p = t.sent, t.next = 13, a.getPortfolioByUserId(u)
              case 13:
                t.sent.forEach(function (t) {
                  t.image ? o.push(new y(t)) : t.video && o.push(new g(t))
                }), (d = new c(p)).portfolio = o, d.templatePhotographer = new v(d), d.templatePortfolio = new k(d), d.templateModal = new b(d), d.templateFilter = new x(), e.appendChild(d.templatePhotographer.createPhotographerHeader()), e.appendChild(d.templatePhotographer.createPhotographerContentLink()), e.appendChild(d.templateModal.createContactModal()), i.appendChild(d.templateFilter.createFilter()), f = new L(d.templateModal), new E(d.templateFilter, d).init(), f.init(d.templatePhotographer.btnModal), r.appendChild(d.templatePortfolio.createListMedia()), r.classList.add('loaded'), C(d), _ = d.templateFilter.observerNode, m = {
                  attributes: !0,
                  attributeFilter: ['data-filter-value']
                }, new MutationObserver(function () {
                  d.templatePortfolio.refreshListMedia(function () {
                    C(d)
                  })
                }).observe(_, m)
              case 36:
              case 'end':
                return t.stop()
            }
          }
        }, t)
      }))).apply(this, arguments)
    }

    function C (t) {
      t.portfolio.forEach(function (e) {
        Array.from(e.template.mediaHtmlElement.querySelectorAll('a')).forEach(function (r) {
          r.addEventListener('click', function (r) {
            r.preventDefault()
            var i = setTimeout(function () {
              clearTimeout(i)
            }, 500)
            new $(t, e).init()
          })
        })
      })
    }!(function () {
      P.apply(this, arguments)
    }())
  })()
})()
// # sourceMappingURL=app_profil858725af.js.map
