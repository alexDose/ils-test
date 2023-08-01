import {MapContainer, Marker, Polyline, Popup, TileLayer} from "react-leaflet";
import styles from "./Map.module.scss";
import {useAppSelector} from "../../redux/store";
import {getCoordinates} from "../../redux/selectors/coordinatesSelectors";
import {getRoute} from "../../redux/selectors/routesSelectors";
import {CenterRoute, MapCenter, reverseCoordinates} from "../../common/helpers/helpers";

export const Map = () => {
    const coordinates = useAppSelector(getCoordinates)
    const route = useAppSelector(getRoute)

    const coordinatesReverse = reverseCoordinates(coordinates)

    return (
        <MapContainer
            className={styles.map}
            center={MapCenter(coordinates)}
            zoom={13}
            scrollWheelZoom={false}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <CenterRoute coordinates={MapCenter(coordinates)}/>
            <Polyline weight={5} positions={coordinatesReverse}/>
            {coordinatesReverse.length && route[0].routes.map((route, index) => (
                <Marker key={index} position={route}>
                    <Popup>
                        {route.join(' ')}
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    )
}
