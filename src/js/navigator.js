export class Navigator {
  init () {
    console.log('test');
    this._initPage();
  }

  _initPage () {
    console.log(window.location.protocol + '//' + window.location.host + window.location.pathname);
  }

  _navigateToPage (slug) {
    window.page = slug;
  }
}
