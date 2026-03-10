"use client"

import { useEffect, useState } from "react";
import Styles from "./Map.module.css";
import { IMap, IStation, IStations } from "@/app/tools/types";
import Pixel from "../Pixel/Pixel";
import { getMap } from "@/app/tools/api";
import { getStations } from "@/app/tools/mock";

export default function Map() {
    const [map, setMap] = useState<IMap>();
    const [objects, setObjects] = useState<IStations>();
    const [error, setError] = useState("");

    useEffect(() => {
        async function foo() {
            const response = await getMap();
            if (response.isOk) {
                setMap(response.data);222
            } else {
                setError(response.error ?? "");
            }
        }
        foo();

        setObjects(getStations());
    }, [])

    return (
        <section>
            {map && map.message.data.map((line, i) => {
                return (
                    <div key={`${i}`} className={Styles.div}>
                        {line.map((pixel, j) => {
                            return (
                                <Pixel key={`${i}_${j}`} id={`${i}_${j}`} value={pixel} object={objects?.message.data.find(o => o.x === i && o.y == j) && "high32"}/>
                            )
                        })}
                    </div>
                )
            })}
            {error && (
                <h2>{error}</h2>
            )}
        </section>
    )
}