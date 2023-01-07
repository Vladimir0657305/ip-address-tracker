// https://sys.airtel.lv/ip2country/193.194.110.111/?full=true
// https://github.com/public-apis/public-apis#geocoding
// https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0/hub
// https://www.freecodecamp.org/news/how-to-set-up-a-custom-mapbox-basemap-with-gatsby-and-react-leaflet/

import axios from "axios";
import { useEffect, useContext, useState } from "react";
import { coordinatesContext } from '../App';
import ReactModal from 'react-modal';
import './Info.scss';

export default function Info(ipValue) {
    ReactModal.setAppElement('#root');
    const { coordinates, setCoordinates } = useContext(coordinatesContext);
    const { isLoading, setIsLoading } = useContext(coordinatesContext);
    const [data, setData] = useState([]);
    const [dataMobile, setDataMobile] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(true);

    useEffect(() => {
        // axios.get(`https://sys.airtel.lv/ip2country/${ipValue.value}/?full=true`).then(({ data }) => {
        axios.get(`https://ipwho.is/${ipValue.value}`).then(({ data }) => {
            setCoordinates(data);
            setModalIsOpen(true)
            setData(['IP ADDRESS', 'LOCATION', 'TIMEZONE', 'ISP', data.ip, data.city, data.timezone.utc, data.connection.domain]);
            setDataMobile(['IP ADDRESS', data.ip, 'LOCATION', data.city, 'TIMEZONE', data.timezone.utc, 'ISP', data.connection.domain]);
        })
            .catch(err => {
                console.warn(err);
                alert('ERRORR');
            })
            .finally(setIsLoading(true));
    }, [ipValue.value]);

    return (
        <>
            <ReactModal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} className="Modal" overlayClassName="Overlay">
                <div className='modalClass'>
                    <div className="modalContentData">
                        {window.screen.availWidth > 600 ?
                            data.map(item => <span key={item}>{item}</span>)
                            :
                            dataMobile.map(item => <span key={item}>{item}</span>)
                        }
                    </div>
                    <svg height="24 " viewBox="0 0 200 200" width="24" onClick={() => setModalIsOpen(false)}>
                        <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
                    </svg>
                </div>
            </ReactModal>
        </>
    );
}