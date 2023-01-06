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
    const [ddd, setDdd] = useState('');
    let strOut = '';

    const onChangeInputValue = (event) => {
        event.preventDefault();
        let tempInp = '';
        let arInpTemp = []; // массив входных данных, разделенный по точкам
        let len = '';
        let vvv = '';
        // const [vvv, setVvv] = useState([]);
        let arOut = ''; // сюда передается соотв элемент массива вх данных
        let arOutStr = []; // выходная переменная, аккумулирующая валидный ввод
        tempInp = event.target.value;
        console.log('!@!@!@', tempInp);
        arInpTemp = tempInp.split('.');
        len = arInpTemp.length;
        arOut = arInpTemp[len-1] || 0;
        console.log('arInpTemp==>', arInpTemp, arInpTemp[1]);
        // arOut = arInpTemp[3] || arInpTemp[2] || arInpTemp[1] || arInpTemp[0];
        // if (arInpTemp[3]?.length > 3 || tempInp.length > 15) return null;

        // if (arInpTemp[3] !== undefined)  arOut = arInpTemp[3];
        // else if (arInpTemp[2] !== undefined)  arOut = arInpTemp[2];
        // else if (arInpTemp[1]?.length || arInpTemp[1] == '')  arOut = arInpTemp[1];
        // else arOut = arInpTemp[0];
        console.log(arInpTemp, 'arOut==', arOut, 'arOut==!!!', arOut[arOut.length-1]);

        if (arOut ? arOut.match("^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\*$") != null : null && +arOut < 256) {
            arOut.length == 3  && setDdd(prev => prev = prev + (arOut + '.'));
            setInputValue(arOut.length == 3 && arInpTemp[3]?.length != 3 ? prev => ddd + arOut + '.' : prev => ddd + arOut);
            console.log('inputValue=>', inputValue, 'DDD=', ddd, 'arOut.length=', arOut.length);
        }
        // arOut[arOut.length - 1] === '.' 
        // else if (arOut.match("^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\*$") != null && +tempInp > 255) {
        //     strOut += tempInp + '.';
        //     setInputValue( arOut);
        // }
        else {
            setDdd(prev => prev = prev + arOut[0] + arOut[1] + '.' + arOut[2]);
            setInputValue(prev => ddd + arOut[0] + arOut[1] + '.' + arOut[2]);
            console.log('inputValue=>', inputValue, 'DDD=', ddd, 'arOut.length=', arOut.length);
            // return null;
        }
        console.log(inputValue);


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
                    {/* <input ref={refInput} type="text" aria-label="Search" placeholder='Search for any IP address or domain' /> */}
                    <input value={inputValue} onChange={onChangeInputValue} ref={refInput}
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