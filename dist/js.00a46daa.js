// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"assets/images/icon-facebook.svg":[function(require,module,exports) {
module.exports = "/icon-facebook.bad954a2.svg";
},{}],"assets/images/icon-twitter.svg":[function(require,module,exports) {
module.exports = "/icon-twitter.e43c481e.svg";
},{}],"assets/images/icon-instagram.svg":[function(require,module,exports) {
module.exports = "/icon-instagram.67da2cfc.svg";
},{}],"js/data.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.socialIconsData = exports.featuresData = void 0;
var _iconFacebook = _interopRequireDefault(require("../assets/images/icon-facebook.svg"));
var _iconTwitter = _interopRequireDefault(require("../assets/images/icon-twitter.svg"));
var _iconInstagram = _interopRequireDefault(require("../assets/images/icon-instagram.svg"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var featuresData = exports.featuresData = [{
  id: 1,
  title: "Actionable insights",
  description: "Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics."
}, {
  id: 2,
  title: "Data-driven decisions",
  description: "Make data-driven decisions with our product data analytics. Our AI-generated reports help you unlock insights hidden in your product data."
}, {
  id: 3,
  title: "Always affordable",
  description: "Always affordable pricing that scales with your business. Get top-quality product data analytics services without hidden costs or unexpected fees."
}];
var socialIconsData = exports.socialIconsData = [{
  image: _iconFacebook.default,
  text: "Facebook icon"
}, {
  image: _iconTwitter.default,
  text: "Twitter icon"
}, {
  image: _iconInstagram.default,
  text: "Instagram icon"
}];
},{"../assets/images/icon-facebook.svg":"assets/images/icon-facebook.svg","../assets/images/icon-twitter.svg":"assets/images/icon-twitter.svg","../assets/images/icon-instagram.svg":"assets/images/icon-instagram.svg"}],"assets/images/image-founder.webp":[function(require,module,exports) {
module.exports = "/image-founder.a8494c8a.webp";
},{}],"js/index.js":[function(require,module,exports) {
"use strict";

var _data = require("./data");
var _imageFounder = _interopRequireDefault(require("../assets/images/image-founder.webp"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var getFeatureHtml = function getFeatureHtml(item) {
  var id = item.id,
    title = item.title,
    description = item.description;
  var featureHtml = "\n        <div class=\"feature\">\n            <div class=\"feature__number\">".concat(id, "</div>\n            <h3 class=\"feature__title\">").concat(title, "</h3>\n            <p class=\"feature__description\">\n                ").concat(description, "\n            </p>\n        </div>\n    ");
  return featureHtml;
};
var renderFeatures = function renderFeatures() {
  var featuresContainer = document.getElementById("features-container");
  var featureIndex = 0;
  var renderNextFeature = function renderNextFeature() {
    if (featureIndex < _data.featuresData.length) {
      var item = _data.featuresData[featureIndex];
      var featureHtml = getFeatureHtml(item);
      var featureElement = document.createElement("div");
      featureElement.innerHTML = featureHtml;
      featuresContainer.appendChild(featureElement);
      featureElement.classList.add("add-fade-in");
      featureIndex++;
      setTimeout(renderNextFeature, featureIndex * 150);
    }
  };
  renderNextFeature();
};
renderFeatures();
var getFounderHtml = function getFounderHtml() {
  return "\n        <img class=\"image\" src=".concat(_imageFounder.default, " alt=\"\" />\n        <div class=\"founder__texts-container\">\n            <h2 class=\"founder-title\">Be the first to test</h2>\n            <p class=\"founder-description\">\n                Hi, I'm Louis Graham, the founder of the company. Book a demo call\n                with me to become a beta tester for our app and kickstart your\n                company. Apply for access below and I\u2019ll be in touch to schedule a\n                call.\n            </p>\n            <div class=\"btn primary-btn\">\n                <a href=\"\">Apply for access</a>\n            </div>\n            <img\n                class=\"founder-bg-image\"\n                src=\"./assets/images/bg-pattern-3.svg\"\n                alt=\"\"\n            />\n        </div>\n    ");
};
var getSocialMediaHtml = function getSocialMediaHtml() {
  var socialMediaHtml = "";
  _data.socialIconsData.forEach(function (item) {
    var image = item.image,
      text = item.text;
    socialMediaHtml += "\n        <img\n        class=\"social-media-icon\"\n        src=\"".concat(image, "\"\n        alt=\"").concat(text, "\"\n        />\n        ");
  });
  return socialMediaHtml;
};
var renderSocialMedia = function renderSocialMedia() {
  var socialMediaContainer = document.getElementById("social-media");
  socialMediaContainer.innerHTML = getSocialMediaHtml();
};
renderSocialMedia();
var renderFounderHtml = function renderFounderHtml() {
  document.getElementById("founder").innerHTML = getFounderHtml();
};
renderFounderHtml();
},{"./data":"js/data.js","../assets/images/image-founder.webp":"assets/images/image-founder.webp"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "62554" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/index.js"], null)
//# sourceMappingURL=/js.00a46daa.js.map