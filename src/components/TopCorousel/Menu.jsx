import React, { useState } from 'react';
import { MdFlight } from 'react-icons/md';
import { FaHotel } from 'react-icons/fa';
import { RiVisaFill } from 'react-icons/ri';
import { GiPalmTree } from 'react-icons/gi';
import { FaBus } from 'react-icons/fa';
import { GiCruiser } from 'react-icons/gi';
import { BsFillMoonFill } from 'react-icons/bs';
import { CgMoreAlt } from 'react-icons/cg';
import './Form.css';

export const Menu = () => {
    const [selected, setSelected] = useState(0);

    const handleClick = (id) => () => {
        setSelected(id);
    };
    const items = [
        {
            id: 0,
            name: 'Flight',
            icon: <MdFlight/>,
        },
        {
            id: 1,
            name: 'Hotel',
            icon: <FaHotel />
        },
        {
            id: 2,
            name: 'Visa',
            icon: <RiVisaFill />
        },
        {
            id: 3,
            name: 'Holidays',
            icon: <GiPalmTree />
        },
        {
            id: 4,
            name: 'Bus',
            icon: <FaBus />
        },
        {
            id: 5,
            name: 'Cruise',
            icon: <GiCruiser />
        },
       
        {
            id: 7,
            name: 'More',
            icon: <CgMoreAlt />
        },

    ];

    return (
        <div className='menu'>
            {items.map((item) => (
                 <div key={item.id} to={item.link} className={selected == item.id ? 'menu-icon-active' : 'menu-icon'} onClick={handleClick(item.id)}>
                     {item.icon}
                     <span className='iconname'>{item.name}</span>
                 </div>
            ))}
        </div>
    )
}

// export default Menu;