import React, {Component, PropTypes} from 'react';
import {Authentication} from "components";

const propTypes = {};

const defaultProps = {};

class Login extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Authentication mode={true}/>
            </div>
        );
    }

}

Login.propTypes = propTypes;

Login.defaultProps = defaultProps;

export default Login;