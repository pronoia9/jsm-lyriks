import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RiCloseLine } from 'react-icons/ri';
import { HiOutlineHashtag, HiOutlineHome, HiOutlineMenu, HiOutlinePhotograph, HiOutlineUserGroup } from 'react-icons/hi';

import { logo } from '../assets';

const iconStyles = 'w-6 h-6 mr-2';
const links = [
  { name: 'Discover', to: '/', icon: HiOutlineHome },
  { name: 'Around You', to: '/around-you', icon: HiOutlinePhotograph },
  { name: 'Top Artists', to: '/top-artists', icon: HiOutlineUserGroup },
  { name: 'Top Charts', to: '/top-charts', icon: HiOutlineHashtag },
];

const NavLinks = () => (
  <div className='mt-10'>
    {links.map((item, i) => (
      <NavLink
        key={item.name}
        to={item.to}
        className='flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400'
        onClick={() => handleClick && handleClick()}>
        <item.icon className={iconStyles} />
        {item.name}
      </NavLink>
    ))}
  </div>
);

const Sidebar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <div className='md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#191624]'>
        <img src={logo} alt='logo' className='w-full h-14 object-contain' />
        <NavLinks />
      </div>

      {/* Mobile sidebar */}
      <div className='absolute md:hidden block top-6 right-3'>
        {mobileMenu ? (
          <RiCloseLine className={`${iconStyles} text-white`} onClick={() => setMobileMenu(false)} />
        ) : (
          <HiOutlineMenu className={`${iconStyles} text-white`} onClick={() => setMobileMenu(true)} />
        )}
      </div>

      <div
        className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#483D8B] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${
          mobileMenu ? 'left-0' : '-left-full'
        }`}>
        <img src={logo} alt='logo' className='w-full h-14 object-contain' />
        <NavLinks handleClick={() => setMobileMenu(false)} />
      </div>
    </>
  );
};

export default Sidebar;
