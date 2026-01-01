(function () {
  function setCookie(name, value, days) {
    var d = new Date();
    d.setTime(d.getTime() + (days || 365) * 24 * 60 * 60 * 1000);
    document.cookie =
      name +
      "=" +
      encodeURIComponent(value) +
      "; path=/; SameSite=Lax; expires=" +
      d.toUTCString();
  }
  function getCookie(name) {
    var m = document.cookie.match("(^|;)\\s*" + name + "\\s*=\\s*([^;]+)");
    return m ? decodeURIComponent(m[2]) : null;
  }
  var notice = document.getElementById("cookie-notice");
  if (!notice) return;
  function show() {
    notice.removeAttribute("hidden");
  }
  function hide() {
    notice.setAttribute("hidden", "");
  }
  function applyVisibility() {
    var c = getCookie("cookie_consent");
    if (!c) show();
    else hide();
  }
  var accept = document.getElementById("cookie-accept");
  var decline = document.getElementById("cookie-decline");
  if (accept)
    accept.addEventListener("click", function () {
      setCookie("cookie_consent", "accepted", 365);
      hide();
      if (window.loadDeferredAnalytics) window.loadDeferredAnalytics();
    });
  if (decline)
    decline.addEventListener("click", function () {
      setCookie("cookie_consent", "declined", 365);
      hide();
    });
  // On load, apply visibility. If previously accepted, try load analytics.
  applyVisibility();
  if (
    getCookie("cookie_consent") === "accepted" &&
    window.loadDeferredAnalytics
  )
    window.loadDeferredAnalytics();
})();
