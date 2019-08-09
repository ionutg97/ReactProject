import React from "react";
import './dashboardHeader.css';
import ButtonBlue from '../ButtonBlue'

class DashboardHeader extends React.Component {
    constructor() {
        super();
        this.state = {
            href: "#"
        };
    }

    render() {
        return (
            <div id="editor-dashboard__header">
                <p id="header__title">Editor Dashboard</p>
                <ButtonBlue
                    name="New Article"
                    icon="plus" />
                    
            </div>
        );
    }
}

export default DashboardHeader;
