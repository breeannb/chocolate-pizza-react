import React, { Component } from 'react'
// import fbicon from './fb-icon.png';

class IconFacebook extends Component {
    render() {
        return (
            // <div className="icon-facebook">
            //     <img alt='' src={fbicon} />
            // </div>
            <div>
                Facebook website {this.props.websitelink}
            </div>
        );
    }
}
export default class PutEmAllTogether extends React.Component {
    render() {
        return (
            <IconFacebook websitelink="http://www.facebook.com" />

        );
    }
}
