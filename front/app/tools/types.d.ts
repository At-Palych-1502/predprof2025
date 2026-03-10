export interface IMap {
    message: {
        data: number[][]
    },
    status: string
}

interface IStation {
    x: number,
    y: number,
    type: "station" | "high32" | "high64"
}

export interface IStations {
    message: {
        data: IStation[]
    }
}   