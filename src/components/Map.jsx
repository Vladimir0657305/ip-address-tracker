import { MapContainer } from 'react-leaflet/MapContainer';
import { TileLayer } from 'react-leaflet/TileLayer';
import { Marker, Popup } from 'react-leaflet';
import { useCallback, useMemo, useState, useContext, useEffect } from 'react';
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

export default function Map() {
    const [map, setMap] = useState(null);
    const { isLoading, setIsLoading } = useContext(coordinatesContext);
    // https://github.com/mapshakers/leaflet-icon-pulse
    // var pulsingIcon = L.icon.pulse({ iconSize: [20, 20], color: 'red' });
    // var marker = L.marker([51.505, -0.09], { icon: pulsingIcon }).addTo(map);
    const { coordinates, setCoordinates } = useContext(coordinatesContext);
    position = [+coordinates.latitude || 51.505, +coordinates.longitude || -0.09];
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
                scrollWheelZoom='center'
                ref={setMap}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position} icon={iconNew} >
                    <Popup>
                        Current location: {coordinates.latitude}, {coordinates.longitude}
                    </Popup>
                </Marker>
            </MapContainer>
        ),
        [coordinates],
    )

    return (
        <>
            {displayMap}
        </>
    );
}