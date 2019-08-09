import React from "react";
import './buttonBlue.css';

import { Link } from 'react-router-dom';
import { showDialog } from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class ButtonBlue extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            icon: props.icon
        };
    }


    render() {
        return (
            <form><Link to="/asd">
                <button to="/asd" className="blue-btn" onClick={this.props.showDialog}>
                    <p className="blue-btn__title">{this.state.name}</p>
                </button>   
            </Link>
            </form>
        );
    }
}

ButtonBlue.defaultProps = {
    name: " NEW ARTICLE",
    icon: ""
}

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({ showDialog }, dispatch),
  });

export default connect(null ,mapDispatchToProps)(ButtonBlue);
