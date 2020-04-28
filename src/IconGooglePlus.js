import React, { Component } from 'react'

class IconGooglePlus extends Component {
    render() {
        return (
            <div>
                GooglePlus website {this.props.websitelink}
            </div>
        )
    }
}
export default class PutEmAllTogether extends React.Component {
    render() {
        return (
            <IconGooglePlus websitelink="http://www.aboutme.google.com" />
        );
    }
}