import React from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { WiSunrise } from 'react-icons/wi';

export default function Navbar({ isDarkTheme, toggleTheme }) {

  return (
    <nav className={`fixed top-0 left-0 w-full shadow-sm px-8 md:px-20 lg:px-40 py-4 flex justify-between items-center z-50 ${isDarkTheme ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <h1 className={`font-burtons text-lg text-2xl md:text-3xl font-medium ${isDarkTheme ? 'text-white' : 'text-black'}`}>MrPranay</h1>
      <ul className="flex items-center">
        <li onClick={toggleTheme}>
          {isDarkTheme ? <WiSunrise size={35} /> : <BsFillMoonStarsFill size={24} />}
        </li>
        <a className={`font-serif px-4 py-2 ${isDarkTheme ? 'bg-gradient-to-r from-purple-500 to-teal-500 bg-blue-300' : 'bg-gradient-to-r from-cyan-500 to-teal-500 bg-blue-300'} rounded-md ml-8 text-white`} href="PranayMohature.pdf">Resume</a>
      </ul>
    </nav>
  );
}
