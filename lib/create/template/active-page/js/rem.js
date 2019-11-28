(function(doc, win) {
  const docEl = doc.documentElement;
  const resizeEvt =
    "orientationchange" in window ? "orientationchange" : "resize";
  const recalc = function() {
    const { width } = docEl.getBoundingClientRect();
    if (!width) return;
    docEl.style.fontSize = `${100 * (width / 375)}px`;
  };
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener("DOMContentLoaded", recalc, false);
})(document, window);
