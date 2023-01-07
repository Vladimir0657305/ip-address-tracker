import './Header.scss';
import background from '../images/pattern-bg.png';
import { createRef, useState } from 'react';
import { isIP, isIPv4 } from 'is-ip';
import Errorr from './Errorr';
import Info from './Info';


export default function Header() {
    const refInput = createRef();
    const [inputValue, setInputValue] = useState('');
    const [ipValue, setIpValue] = useState('');
    const [isErrorr, setIsErrorr] = useState(false);

    const onChangeInputValue = (event) => {
        event.preventDefault();
        setInputValue(event.target.value);
    }

    const changeIpValue = () => {
        let temp = refInput.current.value
        isIP(temp) ?
            setIsErrorr(false)
            :
            // alert('You have entered an invalid IP address!')
            setIsErrorr(true)
    }
    console.log('isErrorr IN HEADER=', isErrorr);

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
            {
                isErrorr && <Errorr />
            }
        </div>
    );
}