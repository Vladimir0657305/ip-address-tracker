// https://sys.airtel.lv/ip2country/193.194.110.111/?full=true
// https://github.com/public-apis/public-apis#geocoding
// https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0/hub
// https://www.freecodecamp.org/news/how-to-set-up-a-custom-mapbox-basemap-with-gatsby-and-react-leaflet/

import { useContext, useEffect, useState } from 'react';
import { coordinatesContext } from '../App';
import ReactModal from 'react-modal';
import './Error.scss';

export default function Errorr() {

    ReactModal.setAppElement('#root');
    const [modalIsOpen, setModalIsOpen] = useState(true);
    const { isErrorr, setIsErrorr } = useContext(coordinatesContext);

    useEffect(() => {
        setModalIsOpen(true);
    }, [isErrorr])

    const onClickClose = () => {
        setModalIsOpen(false);
        setIsErrorr(false);
    }

    return (
        <>
            <ReactModal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} className="Modal" overlayClassName="Overlay">
                <div className='modalClass'>
                    <div className="modalContentData">
                        {window.screen.availWidth > 600 ?
                            <h2>You have entered an invalid IP address!</h2>
                            :
                            <h3>You have entered an invalid IP address!</h3>
                        }
                    </div>
                    <svg height="24 " viewBox="0 0 200 200" width="24" onClick={() => onClickClose()}>
                        <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
                    </svg>
                </div>
            </ReactModal>
        </>
    );
}