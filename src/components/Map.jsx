import { MapContainer } from 'react-leaflet/MapContainer';
import { TileLayer } from 'react-leaflet/TileLayer';
import { useMap } from 'react-leaflet/hooks';
import { Marker, Popup, useMapEvents } from 'react-leaflet';
import { useCallback, useMemo, useState, useContext, useEffect } from 'react';
import { heightHeader, setHeigthHeader } from '../App';
import { useMapEvent, Rectangle } from 'react-leaflet';
import { useEventHandlers } from '@react-leaflet/core';
import 'leaflet/dist/leaflet.css';
import icon from '../images/icon-location.svg';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import L from 'leaflet';
import { coordinatesContext } from '../App';

const iconNew = L.icon({
    iconSize: [35, 41],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
    iconUrl: "../images/icon-location.svg",
});

var position = [51.505, -0.09];
var zoom = 13;

function DisplayPosition({ map }) {
    const [position, setPosition] = useState({})


    map.setView(position, zoom)


    useEffect(() => {
        map.on()
        return () => {
            map.off()
        }
    }, [map])

    return (
        <p>
            latitude: {position.lat.toFixed(4)}, longitude: {position.lng.toFixed(4)}{' '}
            {/* <button onClick={onClick}>reset</button> */}
        </p>
    )
}


export default function Map() {
    const [map, setMap] = useState(null);
    const { isLoading, setIsLoading } = useContext(coordinatesContext);
    // const [position, setPosition] = useState(() => map.getCenter())
    // https://github.com/mapshakers/leaflet-icon-pulse
    // var pulsingIcon = L.icon.pulse({ iconSize: [20, 20], color: 'red' });
    // var marker = L.marker([51.505, -0.09], { icon: pulsingIcon }).addTo(map);

    const { coordinates, setCoordinates } = useContext(coordinatesContext);
    position = [+coordinates.lat || 51.505, +coordinates.lon || -0.09];
    position = [+coordinates.latitude || 51.505, +coordinates.longitude || -0.09];
    // setPosition(+coordinates.lat || 51.505, +coordinates.lon || -0.09)
    // console.log(position);
    // console.log(coordinates.lat, coordinates.lon);
    let zoom = 13;

    let DefaultIcon = L.icon({
        iconUrl: icon,
        shadowUrl: iconShadow
    });
    L.Marker.prototype.options.icon = DefaultIcon;

    useEffect(() => {
        isLoading && map.setView(position, 11);
        setIsLoading(false);
    }, [coordinates])

    const displayMap = useMemo(
        () => (
            <MapContainer
                center={position}
                zoom={zoom}
                // scrollWheelZoom={true}
                scrollWheelZoom='center'
                ref={setMap}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position} icon={iconNew} >
                    <Popup>
                        Current location: {coordinates.lat}, {coordinates.lon}
                    </Popup>
                </Marker>
            </MapContainer>
        ),
        [coordinates],
    )

    const onClick = useCallback(() => {
        map.setView(position, zoom)
    }, [map])



    return (
        <>
            {/* {coordinates &&
                <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    <Marker position={position}  >
                        <Popup>
                            Current location: {coordinates.lat}, {coordinates.lon}
                        </Popup>
                    </Marker>

                </MapContainer>
            } */}
            {/* <button onClick={onClick}>RESET</button> */}
            {displayMap}
        </>
    );
}