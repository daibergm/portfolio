'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { APP_MENU } from '@/data';
import { isActiveLink } from '@/utils/linkActiveChecker';
import { Logo } from '../../atoms';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathName = usePathname();
  return (
    <div className="z-50 ">
      <div className="container">
        {/* Header menu start  */}
        <header className="flex justify-between items-center fixed top-0 left-0 w-full lg:static z-[1111111111]  ">
          <div className=" flex justify-between w-full px-4 lg:px-0 lg:bg-transparent bg-black ">
            <div className="flex justify-between w-full items-center space-x-4 lg:my-8 my-5 ">
              <Link className="text-5xl font-semibold" href="/">
                {/* website logo  */}

                <Logo className="h-[32px] lg:h-[48px]" width={153} height={26} />
              </Link>

              {/* start mobile menu toggle and mode btn */}
              <div className="flex items-center">
                {!menuOpen ? (
                  <span
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="lg:opacity-0 lg:invisible visible opacity-100  bg-[#ef4060] w-[40px] h-[40px] rounded-full flex justify-center cursor-pointer items-center text-white text-3xl ml-3 "
                  >
                    <AiOutlineMenu />
                  </span>
                ) : (
                  <span
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="lg:opacity-0 cursor-pointer lg:invisible visible opacity-100  bg-[#ef4060] w-[40px] h-[40px] rounded-full flex justify-center items-center text-white text-3xl ml-3 "
                  >
                    <AiOutlineClose />
                  </span>
                )}
              </div>
              {/* End mobile menu toggle and mode btn */}
            </div>
          </div>
          {/* End flex */}

          {/* mobile nav menu start */}
          <nav className={`${menuOpen ? 'block bg-black   ' : 'hidden lg:block'}`}>
            {/* Menu items start  */}
            <ul
              className={`${
                menuOpen
                  ? 'block lg:hidden  absolute left-0 rounded-b-[20px] top-20 z-[22222222222222] w-full bg-white dark:bg-[#212425] drop-shadow-lg py-4 '
                  : 'flex my-12 '
              }`}
            >
              {APP_MENU.map((item) => (
                <li key={item.id} className="mb-1">
                  <Link
                    className={`${
                      isActiveLink(item.routePath, pathName)
                        ? 'rounded-md  cursor-pointer font-poppins font-medium mx-2.5 flex text-xtiny py-2.5 px-2 md:px-4 xl:px-5 items-center transition-all duration-300 ease-in-out bg-[#212425] hover:text-white hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] text-[#A6A6A6] linked bg-gradient-to-r '
                        : 'px-2 rounded-md  cursor-pointer font-poppins font-medium mx-2.5 flex text-xtiny py-2.5 md:px-4 xl:px-5 items-center transition-all duration-300 ease-in-out bg-[#212425] hover:text-white hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] text-[#A6A6A6]'
                    } `}
                    href={item.routePath}
                  >
                    <span className="mr-2 text-xl">{item.icon}</span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Menu items end  */}
          </nav>
          {/* End mobile nav menu end */}
        </header>
        {/* Header menu End  */}
      </div>
    </div>
  );
}

export default Header;
