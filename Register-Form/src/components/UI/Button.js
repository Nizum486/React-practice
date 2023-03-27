//import React, { useState } from "react"

import classes from "./Button.module.css"

const Button = (props) => {


    /*
    const [isHovered, setIsHovered] = useState(false);


    const mouseEnterHandler = () => {
        setIsHovered(true)
    }


    const mouseLeaveHandler = () => {
        setIsHovered(false)
    }
    */

    return (
        <button
            className={classes.button}
            //className={`${classes.button} ${isHovered ? 'hovered' : ''}`}
            type={props.type || "button"}
            onClick={props.onClick}

            /*
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            */
        >
            {props.children}
        </button>
    )
}

export default Button
