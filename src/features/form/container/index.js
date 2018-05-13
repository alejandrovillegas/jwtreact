import React, { Component } from 'react';
import {connect} from 'react-redux';

class Form extends Component {
    render() {

        if (this.props.isAuthenticated) {
            return <h1>ESTA AUTHENTICADO</h1>
        }
        return <strong>NO ESTA AUTENTICADO</strong>;
    }
}

const mapStateToProps = ({ auth: { isAuthenticated }}) => ({ isAuthenticated })

export default connect(mapStateToProps)(Form);