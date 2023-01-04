import './Header.scss';
import background from '../images/pattern-bg.png';
import { createRef, useEffect, useState, useContext } from 'react';
import { headerHeightContext } from '../App';


export default function Header() {
    // const refHeader = createRef();
    // const { heightHeader, setHeigthHeader } = useContext(headerHeightContext);

    // useEffect(() => {
    //     setHeigthHeader(refHeader.current.getBoundingClientRect().height)
    //     console.log(heightHeader, "height");
    // }, [refHeader]);

    return(
        <div className='header' >
            <div className="header-top" >
                <img src={background} alt='background' />
                <h1>IP Address Tracker</h1>
                <div className='header-input-block'>
                    <input type="text" aria-label="Search" placeholder='Search for any IP address or domain'/>
                    <button>
                        <img src='../images/icon-arrow.svg' className='headerSvg' alt='arrow'/>
                    </button>
                </div>
            </div>
        </div>
    );
}