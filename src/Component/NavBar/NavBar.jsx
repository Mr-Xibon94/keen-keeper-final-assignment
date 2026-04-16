import React from 'react';
import navLogo from '../../assets/logo.png'
import { NavLink } from 'react-router';
import { ChartSpline, HistoryIcon,  HomeIcon, } from 'lucide-react';

const NavBar = () => {
    return (
        <div className='w-full border-b-2 bg-gray-100 p-4'>
            <div className='w-[80%] m-auto flex flex-col space-y-3.5 md:flex-row md:justify-between'>
                <div className='flex justify-center md:justify-start'>
                    <img src={navLogo} alt="it is a logo of NavBar" />
                </div>
                <div className='flex justify-around md:justify-start md:space-x-4'>
                    <NavLink to="/" className={ ({isActive})=> isActive? 'bg-[#244D3F] text-white p-1.5 rounded-[7px] flex items-center': 'flex items-center'}>
                        <button className='flex gap-.5  '><HomeIcon/> Home</button>
                    </NavLink>
                    <NavLink to="/timeline" className={ ({isActive})=> isActive? 'bg-[#244D3F] text-white p-1.5 rounded-[7px] flex items-center': 'flex items-center'}>
                        <button className='flex gap-.5'><span><HistoryIcon/> </span>TimeLine</button>
                    </NavLink>
                    <NavLink to="/stats" className={ ({isActive})=> isActive? 'bg-[#244D3F] text-white p-1.5 rounded-[7px] flex items-center': 'flex items-center'}>
                        <button className='flex gap-.5 border border-gray-50 p-1'><ChartSpline/>Stats</button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default NavBar;