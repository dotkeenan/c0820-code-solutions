import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      counter: state.counter + 1
    }));
  }

  render() {
    const counter = this.state.counter;
    let color = '';

    switch (true) {
      case counter >= 18:
        color = 'white';
        break;
      case counter >= 15:
        color = 'yellow';
        break;
      case counter >= 12:
        color = 'orange';
        break;
      case counter >= 9:
        color = 'red';
        break;
      case counter >= 6:
        color = 'light-purple';
        break;
      case counter >= 3:
        color = 'dark-purple';
        break;
      case counter >= 0:
        color = 'cody';
        break;
    }
    return (
      <button className={color} onClick={this.handleClick}>Hot Button</button>
    );
  }
}

export default HotButton;

/* Experimental stuff I wanna test out later if it works */
// I initially had a color property in my state, but kevin said to just do conditional rendering

// this.state = {
//   counter: 0,
//   color: 'chartreuse'
// };

// no else statements due to the first condition always being true as counter got higher
// could reverse order of conditionals and put else statements to make it work.
// if (counter >= 3) {
//   color = 'dark-purple';
// } if (counter >= 6) {
//   color = 'light-purple';
// } if (counter >= 9) {
//   color = 'red';
// } if (counter >= 12) {
//   color = 'orange';
// } if (counter >= 15) {
//   color = 'yellow';
// } if (counter >= 18) {
//   color = 'white';
// }

// Thought I would need something like this like the react-rnder-lists exercise but maybe not
// const colors = [
//   { color: 'dark-purple' },
//   { color: 'light-purple' },
//   { color: 'red' },
//   { color: 'orange' },
//   { color: 'yellow' },
//   { color: 'white' }
// ];

// handleClick() {
//   const getColor = () => {
//     if (this.state.color === 6) {
//       return 'light-purple';
//     } else if (this.state.color === 9) {
//       return 'red';
//     } else if (this.state.color === 12) {
//       return 'orange';
//     } else if (this.state.color === 15) {
//       return 'yellow';
//     } else if (this.state.color === 18) {
//       return 'white';
//     } else return 'chartreuse';
//   };
//   console.log(this.state.color);
//   console.log(this.state.counter);
//   this.setState(state => ({
//     counter: state.counter++,
//     color: getColor()
//   }));
// }
