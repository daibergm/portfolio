import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { SocialIconProps } from './types';

function SocialIcons({
  size,
  extraClass,
  tailwindPadding = '2',
  color,
  className,
}: SocialIconProps) {
  return (
    <div className={className}>
      <div
        className={`rounded-full shadow-lg shadow-gray-400 p-${tailwindPadding} cursor-pointer hover:scale-105 ease-in duration-200 ${extraClass}`}
      >
        <FaLinkedinIn size={size} color={color} />
      </div>
      <div
        className={`rounded-full shadow-lg shadow-gray-400 p-${tailwindPadding} cursor-pointer hover:scale-105 ease-in duration-200 ${extraClass}`}
      >
        <FaGithub size={size} color={color} />
      </div>
      <div
        className={`rounded-full shadow-lg shadow-gray-400 p-${tailwindPadding} cursor-pointer hover:scale-105 ease-in duration-200 ${extraClass}`}
      >
        <AiOutlineMail size={size} color={color} />
      </div>
      <div
        className={`rounded-full shadow-lg shadow-gray-400 p-${tailwindPadding} cursor-pointer hover:scale-105 ease-in duration-200 ${extraClass}`}
      >
        <BsFillPersonLinesFill size={size} color={color} />
      </div>
    </div>
  );
}

export default SocialIcons;
