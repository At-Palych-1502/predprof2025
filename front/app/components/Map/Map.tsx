"use client"

import { useEffect, useState } from "react";
import Styles from "./Map.module.css";
import { IMap } from "@/app/tools/types";
import Pixel from "../Pixel/Pixel";
import { getMap } from "@/app/tools/api";

export default function Map() {
    const [map, setMap] = useState<IMap>();
    const [error, setError] = useState("");

    useEffect(() => {
        async function foo() {
            const response = await getMap();
            if (response.isOk) {
                setMap(response.data);
                console.log(response.data);
            } else {
                setError(response.error ?? "");
            }
        }
        foo();
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
            {error && (
                <h2>{error}</h2>
            )}
        </section>
    )
}