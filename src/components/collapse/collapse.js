import { useState } from "react";
import './collapse.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

function Collapse({title , text}) {

    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    const textContent = Array.isArray(text)
    ? text.map((item, index) => <p key={index}>{item}</p>)
    : text;

    return (
        <div className="container">
            <button className="button" onClick={toggleCollapse}>
                {title}
                <FontAwesomeIcon 
                    icon={faChevronDown}
                    className={isOpen ? "rotateClose" : "rotateOpen"}
                />
            </button>
            <div className={`text ${isOpen ? '' : 'close'}`}>{textContent}</div>
        </div>
    )
}

export default Collapse