import React from 'react';

const Tooltip = props => {
    return (
        <div className="tooltip">
            <div className="tooltip__content">
                <p className="tooltip__header">{ props.title }</p>
                <p className="tooltip__text">{ props.text }</p>
            </div>
            <button onClick={ props.onClose } className="tooltip__close-btn">x</button>
        </div>
    );
};

export default Tooltip;
