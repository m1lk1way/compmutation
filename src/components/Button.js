import React, { Component } from 'react';
import * as styles from "./Button.css";
import * as classNames from "classnames/bind";

let classes = classNames.bind(styles);

export class Button extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: false
        };
    }
    onClick = () => {
        this.setState( oldState => ({
            isLoading: !oldState.isLoading
        }));
    };
    render() {
        let classNames = classes({
            button: true,
            loading: this.state.isLoading
        });

        return <span className={classNames} onClick={this.onClick}>Button</span>
    }
}
