"use client";

import { useEffect } from "react";
import Styles from "./Pixel.module.css";

interface Props {
    value: number,
    id: string
}

export default function Pixel(props: Props) {
    useEffect(() => {
        const element = document.getElementById(props.id);
        let color: string = "";
        const v = props.value;
2 
        if (v <= 30) {
            color = `rgb(${100 - v*4}, 147, 139)`;
        } else if (v <= 100) {
            color = `rgb(${100 - v}, ${255 - v}, ${150 - v})`;
        } else if (v <= 180) {
            color = `rgb(255, ${221 - v / 5}, ${180 - v / 1.3})`;
        } else {
            color = `rgb(${130 + v / 5}, ${130 - v / 10}, 0)`
        }

        if (element) {
            
            element.style.backgroundColor = color;
        }
    })

    return (
        <div id={props.id} className={Styles.main}></div>
    )
}