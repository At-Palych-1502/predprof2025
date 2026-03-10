"use client";

import { useEffect } from "react";
import Styles from "./Pixel.module.css";

interface Props {
    value: number,
    id: string,
    object?: "station" | "high32" | "high64"
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

            if (props.object == "high32") {
                const high = document.getElementById(`${props.id}_high`) as HTMLElement;
                const temp = element.getBoundingClientRect();
                
                high.style.top = `${temp.y - 320}px`;
                high.style.left = `${temp.x - 320}px`;
            }
        }
    }, [])

    return (
        <>
        <div id={props.id} className={Styles.main}>{props.object && (<img className={Styles.img} alt="h" src={props.object == "station" ? "/station.png" : "/high.png"} />)}</div>
        {(props.object == "high32" || props.object == "high64") && (
            <div id={`${props.id}_high`} className={Styles[props.object]}></div>
        )}
        </>
    )
}