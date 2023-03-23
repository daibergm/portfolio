import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Logo from './components/Logo';
import { menus } from './constants';

function NavBar() {
  const [showNav, setShowNav] = useState(false);

  const handleShowNav = () => setShowNav(!showNav);

  const renderMenu = () =>
    menus.map(({ name }, index) => (
      <Link href="/" key={Math.random()}>
        <li className="text-sm hover:bg-[#709dff] p-2" data-testid={`menu-item-${index}`}>
          {name}
        </li>
      </Link>
    ));

  return (
    // Container
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      {/* Desktop NavBar */}
      <div className="flex justify-between items-center w-full h-full px-4 2xl:px-16">
        <Logo width={83} height={57} />
        <div>
          <ul className="hidden md:flex uppercase">{renderMenu()}</ul>
          <div data-testid="desktop-nav-toggle-btn" onClick={handleShowNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      {/* Mobile NavBar */}
      <div
        data-testid="mobile-nav"
        className={showNav ? 'fixed left-0 top-0 w-full h-screen bg-black/70 md:hidden' : ''}
      >
        {/* Sub container */}
        <div
          className={
            showNav
              ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] h-screen bg-[#ecf0f3] p-4 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-4 ease-in duration-500'
          }
        >
          {/* Header */}
          <div className="flex justify-between px-2">
            <Logo width={59} height={38} />
            <div
              data-testid="mobile-nav-close-btn"
              onClick={handleShowNav}
              className="rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer flex items-center"
            >
              <AiOutlineClose size={20} />
            </div>
          </div>
          {/* Slogan */}
          <div className="border-b border-gray-300 my-4 px-2">
            <p className="py-4">{`Let's build something legendary together`}</p>
          </div>
          {/* Menu */}
          <div>
            <ul className="uppercase">{renderMenu()}</ul>
          </div>
          {/* Footer */}
          <div className="px-2  pt-40">
            <p className="uppercase tracking-widest text-[#5651e5]">{`let's connect`}</p>
            {/* Social icons */}
            <div className="flex py-4 w-full">
              <div className="rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-105 ease-in duration-200 mr-2">
                <FaLinkedinIn size={20} />
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-105 ease-in duration-200 mr-2">
                <FaGithub size={20} />
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-105 ease-in duration-200 mr-2">
                <AiOutlineMail size={20} />
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-105 ease-in duration-200 mr-2">
                <BsFillPersonLinesFill size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
