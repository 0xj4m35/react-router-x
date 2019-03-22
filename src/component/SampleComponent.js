import React, { Component } from 'react'

export default class SampleComponent extends Component {
    render() {
        return <div className="component">
            This is Component: {this.props.name}
        </div>
    }
}