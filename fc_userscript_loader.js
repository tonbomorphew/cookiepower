function LoadFrozenCookies() {
  var js = document.createElement('script');
  js.setAttribute('type', 'text/javascript');
  js.setAttribute('src', 'https://raw.github.com/tonbmorphew/cookiepower/master/frozen_cookies.js');
  document.head.appendChild(js);
}
// It's not the best way but Chrome doesn't work with addEventListener... :(
// Delay load by 2 seconds to allow the site to load itself first.)
window.setTimeout(LoadFrozenCookies, 2000);
