import React from 'react';
import ReactDOM from 'react-dom';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      isRunning: false
    };
    this.tick = this.tick.bind(this);
    this.toggleStart = this.toggleStart.bind(this);
    this.togglePause = this.togglePause.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }

  tick() {
    this.setState(state => ({
      time: state.time + 1
    }));
  }

  toggleStart() {
    this.setState(state => ({
      isRunning: !state.isRunning
    }));
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  togglePause() {
    this.setState(state => ({
      isRunning: !state.isRunning
    }));
    clearInterval(this.timerID);
  }

  resetTimer() {
    if (!this.state.isRunning) {
      this.setState(state => ({
        time: 0
      }));
    }
  }

  render() {
    const playStatusIcon = this.state.isRunning ? 'fas fa-pause' : 'fas fa-play';
    const playStatus = this.state.isRunning ? this.togglePause : this.toggleStart;

    return (
      <div className={'stopwatch'}>
        <div className={'clockface'}>
          <span onClick={this.resetTimer} className={'time'}>{this.state.time}</span>
        </div>
        <div className={'controls'}>
          <i className={playStatusIcon} onClick={playStatus}></i>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Stopwatch />,
  document.getElementById('root')
);

/* Keep this for later studying
My alternate code that combines toggleStart and togglePause, removing the need
for a conditional in my render().  It's less verbose but probably harder to
understand.

  this.toggleState = this.toggleState.bind(this);

  toggleState() {
    if (!this.state.isRunning) {
      this.setState(state => ({
        isRunning: !state.isRunning
      }));
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    } else {
      this.setState(state => ({
        isRunning: !state.isRunning
      }));
      clearInterval(this.timerID);
    }
  }

<i className={playStatusIcon} onClick={this.toggleState}></i>

*/
