import './Header.scss';
import background from '../images/pattern-bg.png';
import { createRef, useContext, useState } from 'react';
import { coordinatesContext } from '../App';
import { isIP } from 'is-ip';
import Errorr from './Errorr';
import Info from './Info';


export default function Header() {
    const refInput = createRef();
    const [inputValue, setInputValue] = useState('');
    const { isErrorr, setIsErrorr } = useContext(coordinatesContext);
    const [ipValue, setIpValue] = useState('');

    const onChangeInputValue = (event) => {
        event.preventDefault();
        setInputValue(event.target.value);
    }

    const changeIpValue = () => {
        let temp = refInput.current.value
        isIP(temp) ?
            setIpValue(refInput.current.value)
            :
            setIsErrorr(true)
    }

    function handleAnswerChange(event) {
        if (event.key === 'Enter') {
            changeIpValue();
        }
    }

    return (
        <div className='header' >
            <div className="header-top" >
                <img src={background} alt='background' className='background'/>
                <h1>IP Address Tracker</h1>
                <div className='header-input-block' onKeyPress={handleAnswerChange}>
                    <input onFocus={() => setInputValue("")} value={inputValue} onChange={onChangeInputValue} ref={refInput}
                        type="text"
                        aria-label="Search" placeholder='Search for any IP address or domain' />
                    <button onClick={changeIpValue}>
                        <img src='../images/icon-arrow.svg' className='headerSvg' alt='arrow' />
                    </button>
                    {
                        <Info value={ipValue} />
                    }
                </div>
            </div>
            {
                isErrorr && <Errorr />
            }
        </div>
    );
}