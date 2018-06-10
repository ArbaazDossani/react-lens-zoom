'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var destroyPreviousLens = function destroyPreviousLens() {
  var lensDestroy = document.querySelectorAll('.img-zoom-lens')[0];
  if (lensDestroy) {
    lensDestroy.parentNode.removeChild(lensDestroy);
  }
};
var setResultDivDimesions = function setResultDivDimesions(updatedWidth, updatedHeight, resultID) {
  var destImage = document.getElementById(resultID);
  if (destImage) {
    destImage.style.width = updatedWidth + 'px';
    destImage.style.height = updatedHeight + 'px';
  }
};
var setSourceDivDimensions = exports.setSourceDivDimensions = function setSourceDivDimensions(updatedWidth, updatedHeight, sourceId) {
  var sourceImage = document.getElementById(sourceId);
  var container = document.getElementsByClassName('img-zoom-container')[0];
  if (container) {
    container.style.maxHeight = updatedHeight + 'px';
  }
  if (sourceImage) {
    sourceImage.style.width = updatedWidth + 'px';
    sourceImage.style.height = updatedHeight + 'px';
  }
};
var setLensDimensions = function setLensDimensions(updatedWidth, updatedHeight, lensClassName) {
  var aspectRatio = 1;
  if (updatedWidth > updatedHeight) {
    aspectRatio = updatedWidth / updatedHeight;
    document.getElementsByClassName(lensClassName)[0].style.width = 150 * aspectRatio + 'px';
  } else {
    aspectRatio = updatedHeight / updatedWidth;
    document.getElementsByClassName(lensClassName)[0].style.height = 150 * aspectRatio + 'px';
  }
};

var zoomImage = exports.zoomImage = function zoomImage(sourceId, resultID, baseSrc, destWidth, destHeight, destSrc) {
  // eslint-disable-line
  var updatedWidth = destWidth;
  var updatedHeight = destHeight;
  destroyPreviousLens();
  setResultDivDimesions(updatedWidth, updatedHeight, resultID);
  var img = document.getElementById(sourceId);
  var result = document.getElementById(resultID);
  /* create lens: */
  var lens = document.createElement('DIV');
  lens.setAttribute('class', 'img-zoom-lens');
  /* insert lens: */
  img.parentElement.insertBefore(lens, img);
  setLensDimensions(updatedWidth, updatedHeight, 'img-zoom-lens');
  /* calculate the ratio between result DIV and lens: */
  var cx = result.offsetWidth / lens.offsetWidth;
  var cy = result.offsetHeight / lens.offsetHeight;
  /* set background properties for the result DIV: */
  result.style.backgroundImage = 'url("' + encodeURI(destSrc || baseSrc) + '")';
  result.style.backgroundSize = img.width * cx + 'px ' + img.height * cy + 'px';
  var getCursorPos = function getCursorPos(e) {
    var x = 0;
    var y = 0;
    e = e || window.event; // eslint-disable-line
    /* get the x and y positions of the image: */
    var a = img.getBoundingClientRect();
    /* calculate the cursor's x and y coordinates, relative to the image: */
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    /* consider any page scrolling: */
    x -= window.pageXOffset;
    y -= window.pageYOffset;
    return { x: x, y: y };
  };
  var moveLens = function moveLens(e) {
    /* prevent any other actions that may occur when moving over the image: */
    e.preventDefault();
    /* get the cursor's x and y positions: */
    var pos = getCursorPos(e);
    /* calculate the position of the lens: */
    var x = pos.x - lens.offsetWidth / 2;
    var y = pos.y - lens.offsetHeight / 2;
    /* prevent the lens from being positioned outside the image: */
    if (x > img.width - lens.offsetWidth) {
      x = img.width - lens.offsetWidth;
    }
    if (x < 0) {
      x = 0;
    }
    if (y > img.height - lens.offsetHeight) {
      y = img.height - lens.offsetHeight;
    }
    if (y < 0) {
      y = 0;
    }
    /* set the position of the lens: */
    lens.style.left = x + 'px';
    lens.style.top = y + 'px';
    /* display what the lens 'sees': */
    result.style.backgroundPosition = '-' + x * cx + 'px -' + y * cy + 'px';
  };
  /* execute a function when someone moves the cursor over the image, or the lens: */
  lens.addEventListener('mousemove', moveLens);
  img.addEventListener('mousemove', moveLens);
  /* and also for touch screens: */
  lens.addEventListener('touchmove', moveLens);
  img.addEventListener('touchmove', moveLens);
};