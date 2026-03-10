export interface IMap {
    message: {
        data: number[][]
    },
    status: string
}

interface IStation {
    x: number,
    y: number,
    is32: boolean
}

export interface IStations {
    message: {
        data: IStation[]
    }
}   