import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggled: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggled: !state.isToggled
    }));
  }

  render() {
    const toggleStatus = this.state.isToggled;
    return (
      <div className={'container'} onClick={this.handleClick}>
        <div className={toggleStatus ? 'frame-on' : 'frame-off'}>
          <div className={toggleStatus ? 'toggle-on' : 'toggle-off'}></div>
        </div>
        <div className={'text'}>
          {toggleStatus ? 'ON' : 'OFF'}
        </div>
      </div>
    );
  }
}

export default ToggleSwitch;

/*
Experimental alternate code that is much more verbose.
Wrote two entire diff scenarios for virtual DOM

if (toggleStatus) {
      return (
        <div className={'container'} onClick={this.handleClick}>
          <div className={'frame-on'}>
            <div className={'toggle-on'}></div>
          </div>
          <div className={'text'}>
            ON
          </div>
        </div>
      );
    } else {
      return (
        <div className={'container'} onClick={this.handleClick}>
          <div className={'frame-off'}>
            <div className={'toggle-off'}></div>
          </div>
          <div className={'text'}>
            OFF
          </div>
        </div>
      );
    }
  }
*/
