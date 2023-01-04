// https://sys.airtel.lv/ip2country/193.194.110.139/?full=true
// https://github.com/public-apis/public-apis#geocoding
// https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0/hub
// https://www.freecodecamp.org/news/how-to-set-up-a-custom-mapbox-basemap-with-gatsby-and-react-leaflet/

import axios from "axios";
import { useEffect, useContext, useState } from "react";
import { coordinatesContext } from '../App';

export default function Info(ipValue) {
    const { coordinates, setCoordinates } = useContext(coordinatesContext);
    useEffect(() => {
        axios.get(`https://sys.airtel.lv/ip2country/${ipValue.value}/?full=true`).then(({ data }) => setCoordinates(data))
    },[]);
    // console.log(coordinates.lat, coordinates.lon);

    return(
        <>
        </>
    );
}