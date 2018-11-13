import React from 'react';
import ReactDOM from 'react-dom';

import Tooltip from './tooltip.react-component';
import TOOLTIPS from './tooltip-templates';

export default class TooltipManager extends React.Component {

    get tooltipProps() {
        return TOOLTIPS[this.props.currentTooltip] || {};
    }

    get tooltipContainer() {
        const targetNode = document.querySelector(`#tm-${this.tooltipProps.position}`);
        let tooltipContainer = targetNode.querySelector('.tooltip-container');
        if (!tooltipContainer) {
            tooltipContainer = document.createElement('div');
            tooltipContainer.classList.add('tooltip-container');
            targetNode.appendChild(tooltipContainer);
        }
        return tooltipContainer;
    }

    componentWillUnmount() {
        [].slice.call(document.querySelectorAll('.tooltip-containter')).forEach(el => { el.remove(); });
    }

    render() {
        if (!this.props.currentTooltip) {
            return null;
        }
        const tooltip = <Tooltip { ...this.tooltipProps } onClose={ this.props.onTooltipClose } />;
        return ReactDOM.createPortal(tooltip, this.tooltipContainer);
    }
}
