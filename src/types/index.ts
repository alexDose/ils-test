import {Key} from "react";

export interface AppProps {
    loading: boolean
    error: string | null
}

export interface RoutesProps {
    key: Key
    name: string
    routes: [number, number][]
    isSelected: boolean
}

export interface CoordinatesProps {
    coordinates: [number, number][] | []
}

export interface ResponseRoutesProps {
    code: string
    routes: [
        {
            geometry: {
                coordinates: [number, number][]
                waypoints: WaypointsProps[]
            }
        },
    ]
}

interface WaypointsProps {
    hint: string
    distance: number
    name: string
    location: [number, number]
}
