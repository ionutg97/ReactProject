    import React from "react";
import DashboardHeader from '../DashboardHeader';
import './dashboard.css';
import Table from '../Table';

class Dashboard extends React.Component {
    render() {
        return (
            <div id="editor-dashboard">
                    <DashboardHeader />
                    <Table/>
            </div>
        );
    }
}

export default Dashboard;
