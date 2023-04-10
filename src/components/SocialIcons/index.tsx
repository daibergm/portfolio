import Link from 'next/link';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
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
        <Link href="https://www.linkedin.com/in/daibergm/">
          <a>
            <FaLinkedinIn size={size} color={color} />
          </a>
        </Link>
      </div>
      <div
        className={`rounded-full shadow-lg shadow-gray-400 p-${tailwindPadding} cursor-pointer hover:scale-105 ease-in duration-200 ${extraClass}`}
      >
        <Link href="https://github.com/daibergm">
          <a>
            <FaGithub size={size} color={color} />
          </a>
        </Link>
      </div>
      <div
        className={`rounded-full shadow-lg shadow-gray-400 p-${tailwindPadding} cursor-pointer hover:scale-105 ease-in duration-200 ${extraClass}`}
      >
        <Link href="mailto:daibergonzalez94@gmail.com">
          <a>
            <AiOutlineMail size={size} color={color} />
          </a>
        </Link>
      </div>
      <div
        className={`rounded-full shadow-lg shadow-gray-400 p-${tailwindPadding} cursor-pointer hover:scale-105 ease-in duration-200 ${extraClass}`}
      >
        <Link href="https://wa.link/tta1t8">
          <a>
            <FaWhatsapp size={size} color={color} />
          </a>
        </Link>
      </div>
    </div>
  );
}

export default SocialIcons;
