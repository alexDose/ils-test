import {ResponseRoutesProps} from "../../types";
import {instance} from "../instanse/instanse";

export const osrmService = {
    getRoutes(urlCoordinates: string) {
        return instance.get<ResponseRoutesProps>(`${urlCoordinates}?overview=full&geometries=geojson`)
    },
}

