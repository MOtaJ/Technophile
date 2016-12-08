function WebBrowser(url){

}

WebBrowser.prototype.open = function(url) {
  return `Browsing to ${url}`;
}

module.exports = WebBrowser;