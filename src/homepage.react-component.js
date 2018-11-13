import React from 'react';

const Homepage = props => {
    return (
        <div className="app__homepage">
            <div className="app__welcome-msg">
                <div id="tm-welcome-tooltip" className="tooltip-target">
                    Welcome to the Tooltip Manager Demo
                </div>
            </div>
            <div className="app__action">
                <div id="tm-first-action-tooltip" className="tooltip-target">
                    <button onClick={ props.onClick }>CLICK ME!</button>
                </div>
            </div>
        </div>
    );
};

export default Homepage;
