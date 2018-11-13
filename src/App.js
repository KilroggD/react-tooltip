import React, { Component } from 'react';

import Homepage from './homepage.react-component';
import TooltipManager from './tooltips/tooltip-manager.react-component';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentTooltipName: null,
    };
  }

  firstAction = () => {
    setTimeout(() => {
        this.setState({ currentTooltipName: 'event' });
        document.querySelector('#event-message').classList.remove('hidden');
    }, 500);
  }

  componentDidMount() {
    this.setState({ currentTooltipName: 'welcome' });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentTooltipName === 'welcome' && this.state.currentTooltipName === null) {
        return this.setState({ currentTooltipName: 'first_action' });
    }
  }

    onTooltipClose = () => {
        this.setState({
            currentTooltipName: null,
        });
    }

  render() {
    return (
      <div className="app">
          <Homepage onClick={ this.firstAction } />
          <TooltipManager
              currentTooltip={ this.state.currentTooltipName }
              onTooltipClose={ this.onTooltipClose }
          />
      </div>
    );
  }
}

export default App;
