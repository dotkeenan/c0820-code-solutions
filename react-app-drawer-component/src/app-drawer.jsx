import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: 'nav',
      main: ''
    };
    this.showMenu = this.showMenu.bind(this);
    this.hideMenu = this.hideMenu.bind(this);
  }

  showMenu(e) {
    this.setState({
      nav: 'nav-visible',
      main: 'main-dark'
    }, e.stopPropagation());
  }

  hideMenu(e) {
    if (e.target === document.querySelector('.main') ||
    e.target.nodeName === 'A') {
      this.setState({
        nav: 'nav',
        main: ''
      });
    }
  }

  render() {
    return (
      <div onClick={this.hideMenu} className={`main ${this.state.main}`}>
        <i onClick={this.showMenu} className={'fas fa-hamburger'}></i>
        <div className={this.state.nav}>
          <nav>
            <h1>Menu</h1>
            <ul>
              <li onClick={this.hideMenu} className={'menu-item'}>
                <a href="#">About</a>
              </li>
              <li onClick={this.hideMenu} className={'menu-item'}>
                <a href="#">Getting Started</a>
              </li>
              <li onClick={this.hideMenu} className={'menu-item'}>
                <a href="#">Sign In</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }

}

export default AppDrawer;
