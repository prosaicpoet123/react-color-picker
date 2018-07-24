import React, { Component } from 'react';

export default class ColorPicker extends Component {

    constructor(props){
        super(props);

        this.state = {
            color: '#006341'
        }
    }

    setColor(newColor) {

        this.setState({
            color: newColor
        })
    }

    render() {
        return (
            <div className="cp-container" style={{ backgroundColor: `${ this.state.color }` }}>
                <div style={{backgroundColor: '#f1646c'}} onClick={() => this.setColor('#f1646c')}></div>
                <div style={{backgroundColor: '#27a4dd'}} onClick={() => this.setColor('#27a4dd')}></div>
                <div style={{backgroundColor: '#feebb9'}} onClick={() => this.setColor('#feebb9')}></div>
                <div style={{backgroundColor: '#9dd5c0'}} onClick={() => this.setColor('#9dd5c0')}></div>
                <div style={{backgroundColor: '#f39cc3'}} onClick={() => this.setColor('#f39cc3')}></div>
                <div style={{backgroundColor: '#fac174'}} onClick={() => this.setColor('#fac174')}></div>
            </div>
        )
    }
}