import './Header.scss';
import background from '../images/pattern-bg.png';
import { createRef, useEffect, useState, useContext } from 'react';
import { isIP, isIPv4 } from 'is-ip';
import Info from './Info';


export default function Header() {
    const refInput = createRef();


    // useEffect(() => {
    //     setHeigthHeader(refHeader.current.getBoundingClientRect().height) высота элемента
    //     console.log(heightHeader, "height");
    // }, [refHeader]);
    const [inputValue, setInputValue] = useState('');
    const [ipValue, setIpValue] = useState('');

    const onChangeInputValue = (event) => {
        event.preventDefault();
        
// .replace(/[^0-9]/g,'')
        setInputValue(event.target.value);
    }

    const changeIpValue = () => {
        isIP(refInput.current.value) ?
        setIpValue(refInput.current.value) 
        :
        alert('Error entering IP address')
    }
    return (
        <div className='header' >
            <div className="header-top" >
                <img src={background} alt='background' />
                <h1>IP Address Tracker</h1>
                <div className='header-input-block'>
                    {/* <input ref={refInput} type="text" aria-label="Search" placeholder='Search for any IP address or domain' /> */}
                    <input value={inputValue} onInput={() => setInputValue(/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,'')} maxLength="15" onChange={onChangeInputValue} ref={refInput} 
                        type="text" size="16" pattern="^/\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b/"
                    aria-label="Search" placeholder='Search for any IP address or domain' />
                    <button onClick={changeIpValue}>
                        <img src='../images/icon-arrow.svg' className='headerSvg' alt='arrow' />
                    </button>
                    {
                        ipValue && <Info value={ipValue} />
                    }
                </div>
            </div>
        </div>
    );
}