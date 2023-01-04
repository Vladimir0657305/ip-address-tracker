import './Header.scss';
import background from '../images/pattern-bg.png';
import { createRef, useEffect, useState, useContext } from 'react';
import Info from './Info';


export default function Header() {
    const refInput = createRef();
    

    // useEffect(() => {
    //     setHeigthHeader(refHeader.current.getBoundingClientRect().height) высота элемента
    //     console.log(heightHeader, "height");
    // }, [refHeader]);

    const [ipValue, setIpValue] = useState('');

    const changeIpValue = () => {
        setIpValue(refInput.current.value);
        // <Info/>
        // console.log(ipValue);
    }
    


    return(
        <div className='header' >
            <div className="header-top" >
                <img src={background} alt='background' />
                <h1>IP Address Tracker</h1>
                <div className='header-input-block'>
                    <input ref={refInput}  type="text" aria-label="Search" placeholder='Search for any IP address or domain'/>
                    <button onClick={changeIpValue}>
                        <img src='../images/icon-arrow.svg' className='headerSvg' alt='arrow'/>
                    </button>
                    {
                        ipValue && <Info value={ipValue}/>
                    }
                </div>
            </div>
        </div>
    );
}