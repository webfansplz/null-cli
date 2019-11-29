(function(doc, win) {
  var docEl = doc.documentElement;
  var resizeEvt =
    'orientationchange' in window ? 'orientationchange' : 'resize';
  var recalc = function() {
    var ele = docEl.getBoundingClientRect();
    if (!ele.width) return;
    docEl.style.fontSize = 100 * (ele.width / 375) + 'px';
  };
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
