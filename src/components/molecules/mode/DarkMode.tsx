import { useTheme } from 'next-themes';
import { FiMoon, FiSun } from 'react-icons/fi';

export default function DarkMode() {
  const { theme, setTheme } = useTheme();

  // toggle of dark & light mode
  const toggle = () => {
    if (theme === 'light') setTheme('dark');
    else setTheme('light');
  };

  return (
    <>
      <span
        className="bg-white w-[40px] hover:text-white hidden  h-[40px] rounded-full lg:flex justify-center items-center text-black hover:bg-[#ef4060] transition-all duration-300 ease-in-out cursor-pointer ml-2 "
        onClick={toggle}
      >
        <FiMoon className="text-3xl dark-mode-light dark:hidden" />
        <FiSun className="text-2xl dark-mode-dark hidden  fill-jacarta-700  group-hover:fill-white group-focus:fill-white dark:block dark:fill-white " />
      </span>
    </>
  );
}
