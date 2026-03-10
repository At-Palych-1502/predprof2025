"use client"

import { useEffect, useState } from "react";
import Styles from "./Map.module.css";
import { getMap } from "@/app/tools/mock";
import { IMap } from "@/app/tools/types";
import Pixel from "../Pixel/Pixel";

export default function Map() {
    const [map, setMap] = useState<IMap>();

    useEffect(() => {
        const map = getMap();
        setMap(map);
    }, [])

    return (
        <section>
            {map && map.message.data.map((line, i) => {
                return (
                    <div key={`${i}`} className={Styles.div}>
                        {line.map((pixel, j) => {
                            return (
                                <Pixel key={`${i}_${j}`} id={`${i}_${j}`} value={pixel} />
                            )
                        })}
                    </div>
                )
            })}
        </section>
    )
}