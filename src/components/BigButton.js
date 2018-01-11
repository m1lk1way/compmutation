import React from "react";
import * as classNames from "classnames/bind";
import * as styles from "./BigButton.css";
import { Button } from "./Button";

let classes = classNames.bind(styles);

export class BigButton extends Button{
    render() {
        let classNames = classes({
            button: true,
            loading: this.state.isLoading
        });

        return <span className={classNames} onClick={this.onClick}>Button</span>
    }
}
