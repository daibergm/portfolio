import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import SocialIcons from '../SocialIcons';
import Logo from './components/Logo';
import { menus } from './constants';

// TODO: Migrate to ClientComponent using NextJs 13
function NavBar() {
  const [showNav, setShowNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('bg-[#ecf0f3]');
  const [linkColor, setLinkColor] = useState('text-[#1f2937]');
  const [logoColor, setLogoColor] = useState('#1f2937');
  const { asPath } = useRouter();

  useEffect(() => {
    function handleShadow() {
      if (window.scrollY >= 90) setShadow(true);
      else setShadow(false);
    }

    addEventListener('scroll', handleShadow);

    return () => removeEventListener('scroll', handleShadow);
  }, []);

  useEffect(() => {
    if (asPath.includes('project/')) {
      setNavBg('bg-transparent');
      setLinkColor('text-[#ecf0f3]');
      setLogoColor('#ecf0f3');
    } else {
      setNavBg('bg-[#ecf0f3]');
      setLinkColor('text-[#1f2937]');
      setLogoColor('#1f2937');
    }
  }, [asPath]);

  const handleShowNav = () => setShowNav(!showNav);

  const renderMenu = (isMobile = false) =>
    menus.map((menu, index) => {
      let activeClass = '';

      if (
        asPath === `/${menu.href.split('/').join('')}` ||
        (asPath.includes('/project/') && menu.href === '/#projects')
      )
        activeClass = 'link-active';

      return (
        <Link href={menu.href} key={JSON.stringify(menu)}>
          <li
            onClick={() => setShowNav(false)}
            className={`text-sm p-2 ${
              !isMobile ? linkColor : 'text-[#1f2937]'
            } app-menu-link ${activeClass}`}
            data-testid={`menu-item-${index}`}
          >
            {menu.name}
          </li>
        </Link>
      );
    });

  return (
    // Container
    <div className={`fixed w-full h-20 ${shadow && 'shadow-xl'} z-[100] ${navBg}`}>
      {/* Desktop NavBar */}
      <div className="flex justify-between items-center w-full h-full px-4 2xl:px-16">
        <Logo width={83} height={57} color={logoColor} />
        <>
          <ul className="hidden md:flex uppercase">{renderMenu()}</ul>
          <div data-testid="desktop-nav-toggle-btn" onClick={handleShowNav} className="md:hidden">
            <AiOutlineMenu size={25} color={logoColor} />
          </div>
        </>
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
            <p className="py-4">{`Let's build something together`}</p>
          </div>
          {/* Menu */}
          <ul className="uppercase">{renderMenu(true)}</ul>
          {/* Footer */}
          <div className="px-2  pt-40">
            <p className="uppercase tracking-widest text-[#5651e5]">{`let's connect`}</p>
            <SocialIcons size={20} extraClass="mr-2" className="flex py-4 w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
