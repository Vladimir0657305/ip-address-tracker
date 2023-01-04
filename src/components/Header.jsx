import './Header.scss';
import background from '../images/pattern-bg.png';
import { IoChevronForwardCircle, IoChevronForward } from "react-icons/io5";

export default function Header() {

    return(
        <div className='header'>
            <div className="header-top">
                <img src={background} alt='background' />
                <h1>IP Address Tracker</h1>
                <div className='header-input-block'>
                    <input type="text" aria-label="Search" placeholder='Search for any IP address or domain'/>
                    <button>
                        {/* <IoChevronForwardCircle  /> */}
                        <img src='../images/icon-arrow.svg' className='headerSvg' alt='arrow'/>
                    </button>
                </div>
            </div>
        </div>
    );
}