import React, { Component } from 'react'
import PropTypes from 'prop-types'


 class Contacts extends Component {
    render() {
        return (
            <div>
                <h4>{this.props.name}</h4>
                <ul>
                    <li>{this.props.email}</li>
                    <li>{this.props.phone}</li>
                </ul>
                
            </div>
        )
    }
}
Contacts.propTypes={
    name:PropTypes.string.isRequired,
    email:PropTypes.string.isRequired,
    phone:PropTypes.string.isRequired,
}
export default Contacts;



