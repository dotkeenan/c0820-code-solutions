
import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState(state => ({
      password: e.target.value
    }));
  }

  render() {
    const password = this.state.password;
    let chooseMsg;
    let chooseIcon;

    if (password.length === 0) {
      chooseMsg = <p>A password is required</p>;
    } else if (password.length < 8) {
      chooseMsg = <p>Your password is too short</p>;
    }

    if (password.length < 8) {
      chooseIcon = <i className='fas fa-times'></i>;
    } else {
      chooseIcon = <i className='fas fa-check'></i>;
    }

    return (
      <form>
        <div>
          <label htmlFor="password">Password</label>
        </div>
        <input
          type="password"
          name="password-value"
          id="password"
          value={this.state.password}
          onChange={this.handleChange}
          placeholder="********" />
        {chooseIcon}

        <div>
          {chooseMsg}
        </div>
      </form>
    );
  }
}

export default ValidatedInput;

// Alternate ways that I need to ask which is better to do.
// Alternate way 1 that has conditionals in the render() and sets appropriate
// react elements to variables, and then returns those variables in the react element
// only uses 1 state.

/* Alternate way 2 which has the the conditionals in the handleChange()
and also has more states that get changed.  Might be worse.

import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      valid: false,
      statusMsg: 'A password is required.'
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    function test() {
      if (this.state.password.length === 0) {
        return this.setState(state => ({
          valid: false,
          statusMsg: 'A password is required.'
        }));

      } else if (this.state.password.length < 8) {
        return this.setState(state => ({
          valid: false,
          statusMsg: 'Your password is too short.'
        }));

      }
      this.setState(state => ({
        valid: true,
        statusMsg: ''
      }));
    }

    this.setState(state => ({
      password: e.target.value
    }), test);
  }

  render() {
    const icon = this.state.valid ? 'fas fa-check' : 'fas fa-times';
    return (
      <form>
        <div>
          <label htmlFor="password">Password</label>
        </div>
        <input
          type="password"
          name="password-value"
          id="password"
          value={this.state.password}
          onChange={this.handleChange}
          placeholder="********" />
        <i className={icon}></i>
        <div>
          <p>{this.state.statusMsg}</p>
        </div>
      </form>
    );
  }
}

export default ValidatedInput; */

// ---------------------------------------------------------------------
// Alternate way that runs functions within render() in order to decide
// which icon and which status message is shown.
// import React from 'react';

// class ValidatedInput extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       password: ''
//     };
//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(e) {
//     this.setState(state => ({
//       password: e.target.value
//     }));
//   }

//   render() {
//     const password = this.state.password;

//     function chooseMsg() {
//       if (password.length === 0) {
//         return 'A password is required';
//       } else if (password.length < 8) {
//         return 'Your password is too short.';
//       }
//     }

//     function chooseIcon() {
//       if (password.length < 8) {
//         return 'fas fa-times';
//       }
//       return 'fas fa-check';
//     }

//     return (
//       <form>
//         <div>
//           <label htmlFor="password">Password</label>
//         </div>
//         <input
//           type="password"
//           name="password-value"
//           id="password"
//           value={this.state.password}
//           onChange={this.handleChange}
//           placeholder="********" />
//         <i className={chooseIcon()}></i>
//         {/* <button>Login</button> */}
//         <div>
//           <p>{chooseMsg()}</p>
//         </div>
//       </form>
//     );
//   }
// }

// export default ValidatedInput;
