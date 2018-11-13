import React, { Component } from 'react';

import Homepage from './homepage.react-component';
import TooltipManager from './tooltips/tooltip-manager.react-component';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentStepName: null,
    };
  }

  firstAction = () => {
    setTimeout(() => {
        this.setState({ currentStepName: 'event' });
        document.querySelector('#event-message').classList.remove('hidden');
    }, 500);
  }

  componentDidMount() {
    this.setState({ currentStepName: 'welcome' });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentStepName === 'welcome' && this.state.currentStepName === null) {
        return this.setState({ currentStepName: 'first_action' });
    }
  }

    onTooltipClose = () => {
        this.setState({
            currentStepName: null,
        });
    }

  render() {
    return (
      <div className="app">
          <Homepage currentStepName={ this.state.currentStepName } onClick={ this.firstAction } />
          <TooltipManager currentTooltip={ this.state.currentStepName } onTooltipClose={ this.onTooltipClose } />
      </div>
    );
  }
}

export default App;
