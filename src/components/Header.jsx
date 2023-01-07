import './Header.scss';
import background from '../images/pattern-bg.png';
import { createRef, useState } from 'react';
import { isIP } from 'is-ip';
import Info from './Info';


export default function Header() {
    const refInput = createRef();
    const [inputValue, setInputValue] = useState('');
    const [ipValue, setIpValue] = useState('');

    const onChangeInputValue = (event) => {
        event.preventDefault();
        setInputValue(event.target.value);
    }

    const changeIpValue = () => {
        isIP(refInput.current.value) ?
            setIpValue(refInput.current.value)
            :
            alert('You have entered an invalid IP address!')
    }

    return (
        <div className='header' >
            <div className="header-top" >
                <img src={background} alt='background' />
                <h1>IP Address Tracker</h1>
                <div className='header-input-block'>
                    <input onFocus={() => setInputValue("")} value={inputValue} onChange={onChangeInputValue} ref={refInput}
                        type="text"
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