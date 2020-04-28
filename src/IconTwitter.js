import React, { Component } from 'react'

class IconTwitter extends Component {
    render() {
        return (
            <div>
                Twitter website: {this.props.websitelink}
            </div>
        );
    }
}


export default class PutEmAllTogether extends React.Component { 
    render() {
        return (
            <IconTwitter websitelink="http://www.twitter.com" />
        );
    }
}