import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: 'nav',
      main: 'main',
      navIsOpen: false
    };
    this.showMenu = this.showMenu.bind(this);
    this.hideMenu = this.hideMenu.bind(this);
  }

  showMenu(e) {
    if (!this.state.navIsOpen) {
      this.setState({
        nav: 'nav-visible',
        main: 'main-dark',
        navIsOpen: true
      });
    }
  }

  hideMenu(e) {
    if (this.state.navIsOpen) {
      this.setState({
        nav: 'nav',
        main: 'main',
        navIsOpen: false
      });
    }
  }

  render() {
    return (
      <div>
        <i onClick={this.showMenu} className={'fas fa-hamburger'}></i>
        <div className={this.state.nav}>
          <nav>
            <h1>Menu</h1>
            <ul>
              <li className={'menu-item'}>
                <a onClick={this.hideMenu} href="#">About</a>
              </li>
              <li className={'menu-item'}>
                <a onClick={this.hideMenu} href="#">Getting Started</a>
              </li>
              <li className={'menu-item'}>
                <a onClick={this.hideMenu} href="#">Sign In</a>
              </li>
            </ul>
          </nav>
        </div>
        <div onClick={this.hideMenu} className={this.state.main}></div>
      </div>
    );
  }
}

export default AppDrawer;

// Old code that combines the two methods, but I don't think it can work as it is

// this.toggleMenu = this.toggleMenu.bind(this);

// toggleMenu() {
//   if (!this.state.navIsOpen) {
//     this.setState({
//       nav: 'nav-visible',
//       main: 'main-dark',
//       navIsOpen: true
//     });
//   } else {
//     this.setState({
//       nav: 'nav',
//       main: 'main',
//       navIsOpen: false
//     });
//   }
// }
