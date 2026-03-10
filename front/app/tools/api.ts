import { endpoints } from "./config"
import { IMap } from "./types";

export const getMap = async() => {
    try {
        const response = await fetch(endpoints.map, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (response.ok) {
            const data: IMap = await response.json();
            return { isOk: true, data }
        } else {
            return { isOk: false, error: response.statusText }
        }
    } catch (error) {
        return { isOk: false, error: "Error" }
    }
}
    